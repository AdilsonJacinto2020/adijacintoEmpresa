import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}
  @Post()
  async send(@Body() body: any) {
    await this.contactService.sendEmail(body);
    return { mensagem: 'Email enviado com sucesso' };
  }
}
