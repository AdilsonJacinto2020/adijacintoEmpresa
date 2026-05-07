import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const allowedOrigin = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: allowedOrigin,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
