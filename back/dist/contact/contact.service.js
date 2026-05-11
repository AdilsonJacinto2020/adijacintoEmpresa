"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const resend_1 = require("resend");
let ContactService = class ContactService {
    resend;
    constructor() {
        this.resend = new resend_1.Resend(process.env.RESEND_API_KEY);
    }
    async sendEmail(data) {
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
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ContactService);
//# sourceMappingURL=contact.service.js.map