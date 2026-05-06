import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacto')
export class ContactController {
  constructor(private contactService: ContactService) {}
  @Post()
  async send(@Body() body: any) {
    await this.contactService.sendEmail(body);
    return { mensagem: 'Email enviado com sucesso' };
  }
}
