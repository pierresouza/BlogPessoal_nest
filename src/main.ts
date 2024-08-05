import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blog Pessoal')
    .setDescription('Projeto Blog Pessoal')
    .setContact('Pierre Souza','https://github.com/pierresouza','pierre.s3@hotmail.com',)
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'; // Configuração de fuso horário
  app.useGlobalPipes(new ValidationPipe()); //Habilitamos o validation Globalmente
  app.enableCors(); //Habilitamos requisições de outras origens (Servdores)
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
