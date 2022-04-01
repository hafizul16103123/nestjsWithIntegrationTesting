// import config from 'src/config';
// import { Inject, Module } from "@nestjs/common";
// import { TypegooseModule } from "nestjs-typegoose";

// import { DatabaseService } from "./database.service";
// import { MongooseModule } from '@nestjs/mongoose';

// @Module({
//     imports:[ MongooseModule.forRootAsync({
//         useFactory: (configService: ConfigService) => ({
//           uri: configService.get<string>('NODE_ENV') === 'test'
//             ? configService.get<string>('MONGO_TEST_CONNECTION_URI')
//             : configService.get<string>('MONGO_CONNECTION_URI')
//         }),
//         inject: [Conf]
//       }),],
//     providers:[DatabaseService],
//     exports:[DatabaseService]
// })
// export class DatabaseModule{}