import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { OrcamentoModule } from './orcamento/orcamento.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'adijacinto.aj@gmail.com',
          pass: 'znkk extq bvpd xfkp',
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
