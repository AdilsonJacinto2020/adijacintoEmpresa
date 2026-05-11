"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const resend_1 = require("resend");
let MailService = class MailService {
    resend = new resend_1.Resend(process.env.RESEND_API_KEY);
    async sendMail(nome, email, mensagem) {
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
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)()
], MailService);
//# sourceMappingURL=mail.service.js.map