import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:5173',
    'http://localhost:3000',
  ].map(o => o.replace(/\/$/, '')); // remove barra no final de todos

  app.enableCors({
    origin: allowedOrigins,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
