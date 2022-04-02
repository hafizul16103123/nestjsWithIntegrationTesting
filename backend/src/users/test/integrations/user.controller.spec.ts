import { Param } from '@nestjs/common';

import { getConnectionToken, TypegooseModule } from 'nestjs-typegoose';
import { Test } from "@nestjs/testing"
import { Connection } from "mongoose"
import * as request from 'supertest';
import { CreatePatientDto, CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import config from '../../../../src/config';
import { AppModule } from '../../../../src/app.module';
import { patientStub, userStub } from '../stubs/user.stub';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export const userControllerTest=()=>{
  return describe('UsersController2', () => {
    let dbConnection: Connection;
    let httpServer: any;
    let app: any;
    let user;
  
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
      //******************************** CREATE USERS ***************************** */
    describe('createUser', () => {
      let response;
      
      it('should create a user', async () => {
        const createUserRequest: CreateUserDto = {
          name: userStub().name,
          age: userStub().age
        }
        response = await request(httpServer).post('/users').send(createUserRequest)
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(createUserRequest);
        user = await dbConnection.collection('users').findOne({ id: response.body.id });
        expect(user).toMatchObject(createUserRequest);
  
      })
      it('should create a Patient', async () => {
        const createPatientRequest: CreatePatientDto = {
          userID: user._id.toString(),
          address: patientStub().address
        }
        const patient = await dbConnection.collection('patients').findOne({ id: response.body.id });
        expect(patient).toMatchObject(createPatientRequest);
      })
    })

    //******************************** GET USERS ***************************** */
    describe('getUsers', () => {
      it('should return an array of users', async () => {
        const response = await request(httpServer).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject([userStub()]);
      })
    })
    //******************************** GET SINGLE USER ***************************** */
    describe('getUser', () => {
      it('should return an user', async () => {
        const response = await request(httpServer).get(`/users/${user._id.toString()}`);
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(userStub());
      })
    })
    //******************************** UPDATE SINGLE USER ***************************** */
    describe('updateUser', () => {
      it('should return an user with updated value', async () => {
        const updateUserRequest: UpdateUserDto = {
          name: userStub().name,
          age: userStub().age
        }
        const response = await request(httpServer).patch(`/users/${user._id.toString()}`).send(updateUserRequest);
        // user = await dbConnection.collection('users').findOne({ id: user._id.toString() });
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(userStub());
      })
    })
    
    // //******************************** DELETE SINGLE USER ***************************** */
    // describe('deleteUser', () => {
    //   it('should delete an user', async () => {
    //     const response = await request(httpServer).delete(`/users/${user._id.toString()}`);
    //     console.log({1:response.body})
    //     console.log({2:response.status})
    //     expect(response.status).toBe(200);
    //     expect(response.body).toMatchObject(userStub());
    //   })
    // })
  })
}