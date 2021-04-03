import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { UserModule } from 'src/module/user.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(UserModule);
  await app.listen(3000);
}
bootstrap();
