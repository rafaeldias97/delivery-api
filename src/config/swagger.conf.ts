import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const openApi = (app: INestApplication<any>) => {
  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Delivery API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('docs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  return config;
};
