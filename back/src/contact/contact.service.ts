import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class ContactService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendEmail(data: any) {
    const { nome, email, mensagem } = data;

    await this.resend.emails.send({
      from: 'onboarding@resend.dev',

      to: process.env.MAIL_USER || '',

      subject: `Nova mensagem de ${nome}`,

      html: `
        <h2>Nova mensagem</h2>

        <p><strong>Nome:</strong> ${nome}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p>${mensagem}</p>
      `,
    });
  }
}
