
import { getConnectionToken, TypegooseModule } from 'nestjs-typegoose';
import { Test } from "@nestjs/testing"
import { Connection } from "mongoose"
import * as request from 'supertest';
import { CreatePatientDto, CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import config from '../../../config';
import { AppModule } from '../../../app.module';
import { patientStub, userStub } from '../stubs/user.stub';

export const userControllerTest2=()=>{
  return describe('UsersController2', () => {
    let dbConnection: Connection;
    let httpServer: any;
    let app: any;
  
    beforeAll(async () => {
      const moduleRef = await Test.createTestingModule({
        imports: [ TypegooseModule.forRoot(config.mongoURL),AppModule]
      }).compile();
  
      app = moduleRef.createNestApplication();
      await app.init();
      httpServer = app.getHttpServer();
      dbConnection = (app.get(getConnectionToken()) as Connection)
      // clear db
      await dbConnection.collection('users').deleteMany({});
      await dbConnection.collection('patients').deleteMany({});
    })
  
    afterAll(async () => {
      await app.close();
    })
  
    describe('createUser', () => {
      let response;
      let user;
      it('should create a user', async () => {
        const createUserRequest: CreateUserDto = {
          name: userStub().name,
          age: userStub().age
        }
        response = await request(httpServer).post('/users').send(createUserRequest)
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(createUserRequest);
       //check user create
        user = await dbConnection.collection('users').findOne({ id: response.body.id });
        expect(user).toMatchObject(createUserRequest);
  
      })
      it('should create a Patient', async () => {
        //check patient create
        const createPatientRequest: CreatePatientDto = {
          userID: user._id.toString(),
          address: patientStub().address
        }
        const patient = await dbConnection.collection('patients').findOne({ id: response.body.id });
        expect(patient).toMatchObject(createPatientRequest);
      })
    })
  })
}