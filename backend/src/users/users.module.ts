import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Patient, User } from './entities/user.entity';

@Module({
  imports:[TypegooseModule.forFeature([User,Patient])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
