import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './src/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const port = process.env.PORT || 3000;

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));

    await app.listen(port, '0.0.0.0');
    console.log(`Application is running on: ${port}`);
}

bootstrap();