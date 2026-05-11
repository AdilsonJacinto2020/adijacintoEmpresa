import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { OrcamentoModule } from './orcamento/orcamento.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },

        tls: {
          rejectUnauthorized: false,
        },
      },
    }),
    ContactModule,
    OrcamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
