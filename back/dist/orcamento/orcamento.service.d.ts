import { MailerService } from '@nestjs-modules/mailer';
export declare class OrcamentoService {
    private mailService;
    constructor(mailService: MailerService);
    sendEmail(data: any): Promise<void>;
}
