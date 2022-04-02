import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UsersModule } from './users/users.module';
import config from './config';

@Module({
  imports: [
    TypegooseModule.forRoot(config.mongoURL),
    UsersModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
