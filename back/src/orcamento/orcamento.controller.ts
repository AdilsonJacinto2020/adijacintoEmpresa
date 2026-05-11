import { Body, Controller, Post } from '@nestjs/common';
import { OrcamentoService } from './orcamento.service';

@Controller('orcamento')
export class OrcamentoController {
  constructor(private orcamentoService: OrcamentoService) {}
  @Post()
  async send(@Body() body: any) {
    await this.orcamentoService.send(body);
    return { mensagem: 'orcamento enviado com sucesso' };
  }
}
