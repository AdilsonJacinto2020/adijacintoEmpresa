import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrcamentoService {
  constructor(private mailService: MailerService) {}
  async sendEmail(data: any) {
    const { nome, empresa, email, telefone, servico, orcamento, descricao} = data;
    await this.mailService.sendMail({
      to: 'adijacinto.aj@gmail.com',
      subject: `Pedido de orçamento ${nome}`,
      text: `O cliente ${nome} com a empresa ${empresa}
      e email ${email} e telefone ${telefone} pretende
      o serviço ${servico} com esse ${orcamento}, esse 
      são os detalhes ${descricao}`,
    });
  }
}
