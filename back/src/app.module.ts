import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { OrcamentoModule } from './orcamento/orcamento.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    ContactModule,
    OrcamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
