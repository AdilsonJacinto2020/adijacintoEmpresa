export declare class MailService {
    private resend;
    sendMail(nome: string, email: string, mensagem: string): Promise<import("resend").CreateEmailResponse>;
}
