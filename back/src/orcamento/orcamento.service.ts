import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class OrcamentoService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }
  async send(data: any) {
    const { nome, empresa, email, telefone, servico, orcamento, descricao} = data;

    await this.resend.emails.send({
      from: 'onboarding@resend.dev',

      to: process.env.MAIL_USER || '',

      subject: `Pedido de orçamento de ${nome}`,

      html: `
        <h2> Pedido de Orçamento </h2>

        <p>A cliente <strong>Nome:</strong> ${nome} com a empresa ${empresa}</p>

        <p>Com o telefone ${telefone}e email<strong>Email:</strong> ${email}</p>

        <p>Pretende o serviço ${servico} com o orçamento de ${orcamento}</p>

        <p>Com essa descrição${descricao}</p>
      `,
    });
  }
}
