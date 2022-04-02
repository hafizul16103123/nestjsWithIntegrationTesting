"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const exception_1 = require("./utils/response/exception");
const response_1 = require("./utils/response/response");
async function bootstrap() {
    const logger = new common_1.Logger('APP_STARTED');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Integration testing')
        .setDescription('e2e testing')
        .addBearerAuth({ description: 'User JWT Token', type: 'http', name: 'Authorization', bearerFormat: 'JWT' })
        .setVersion('2.0')
        .addTag('Integration')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new exception_1.AllExceptionsFilter());
    app.useGlobalInterceptors(new response_1.TransformInterceptor());
    app.enableCors();
    await app.listen(3001);
    logger.log(`App started on http://localhost:3001`);
}
bootstrap();
//# sourceMappingURL=main.js.map