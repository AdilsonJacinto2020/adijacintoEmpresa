import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private resend = new Resend(process.env.RESEND_API_KEY);

  async sendMail(nome: string, email: string, mensagem: string) {
    return await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'seuemail@gmail.com',

      subject: 'Novo contato do site',

      html: `
        <h1>Novo contato</h1>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });
  }
}