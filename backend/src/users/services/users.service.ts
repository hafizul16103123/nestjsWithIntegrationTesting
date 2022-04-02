import { clearConfigCache } from 'prettier';
import { Patient, User } from './../entities/user.entity';
import { UpdateUserDto } from './../dto/update-user.dto';
import { CreatePatientDto, CreateUserDto } from './../dto/create-user.dto';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';


@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private readonly userModel:ReturnModelType<typeof User>,
    @InjectModel(Patient)
    private readonly patientModel:ReturnModelType<typeof Patient>
    ){}

  async create(createUserDto: CreateUserDto) :Promise<User> {
    const doc = await this.userModel.create(createUserDto);
    console.log({doc})
    if(!doc) throw new HttpException('User did not created',400)
    const userID=doc._id;
    if(userID){
      const createPatientDto:CreatePatientDto = {
        userID,
        address:'address'

      }
      const patientDoc = await this.patientModel.create(createPatientDto);
      if(!patientDoc) throw new HttpException('Patient did not created',400)
    }
    return doc;
  }

  async findAll():Promise<User[]> {
    const doc = await this.userModel.find();
    if(!doc) throw new HttpException('No User Found',400)
    return doc;
  }

  async findOne(id: string) :Promise<User>{
    const doc = await this.userModel.findOne({_id:id});
    // const doc = undefined;
    if(!doc) throw new HttpException('Invalid user id provided',400)
    return doc;
  }

  async update(id: string, updateUserDto: UpdateUserDto) :Promise<User>{
    const doc = await this.userModel.findOne({_id:id});
    if(!doc) throw new HttpException('Invalid user id provided',400)
    for (const [key,val] of Object.entries(updateUserDto)) {
      doc[key] = updateUserDto[key]
    }
    return doc.save();
  }

  async remove(id: string) :Promise<User>{
    const doc = await this.userModel.findOne({_id:id});
    if(!doc) throw new HttpException('Invalid user id provided',400)
    return doc.remove();
  }
}
