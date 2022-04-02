import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './utils/response/exception';
import { TransformInterceptor } from './utils/response/response';

async function bootstrap() {
  const logger:Logger=new Logger('APP_STARTED')
  const app = await NestFactory.create(AppModule);
  //setup swagger start
  const options = new DocumentBuilder()
  .setTitle('Integration testing')
  .setDescription('e2e testing')
  .addBearerAuth({ description: 'User JWT Token', type: 'http', name: 'Authorization', bearerFormat: 'JWT' })
  .setVersion('2.0')
  .addTag('Integration')
  .build();
  const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);
  //setup swagger end
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  app.enableCors()
  await app.listen(3001);
 logger.log(`App started on http://localhost:3001`)
}
bootstrap();
