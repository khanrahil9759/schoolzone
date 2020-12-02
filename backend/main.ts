import { NestFactory } from '@nestjs/core';
import { config } from './config';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = config.port;
  const app = await NestFactory.create(AppModule);
  await app.listen((port), () => {
    console.info(`App is running on http://localhost:${config.port}`)
  });
}
bootstrap();
