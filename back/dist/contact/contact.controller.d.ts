import { ContactService } from './contact.service';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
    send(body: any): Promise<{
        mensagem: string;
    }>;
}
