import { Patient, User } from './../entities/user.entity';
import { UpdateUserDto } from './../dto/update-user.dto';
import { CreateUserDto } from './../dto/create-user.dto';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class UsersService {
    private readonly userModel;
    private readonly patientModel;
    constructor(userModel: ReturnModelType<typeof User>, patientModel: ReturnModelType<typeof Patient>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
