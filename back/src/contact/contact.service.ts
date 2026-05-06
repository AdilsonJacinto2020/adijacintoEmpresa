/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  constructor(private mailService: MailerService) {}
  async sendEmail(data: any) {
    const { nome, email, mensagem } = data;
    await this.mailService.sendMail({
      to: 'adijacinto.aj@gmail.com',
      subject: `Nova mensagem de ${nome}`,
      text: `
            Nome ${nome}
            Email ${email}
            Mensagem ${mensagem}`,
    });
  }
}
