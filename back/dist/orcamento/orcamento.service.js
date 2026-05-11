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
exports.OrcamentoService = void 0;
const common_1 = require("@nestjs/common");
const resend_1 = require("resend");
let OrcamentoService = class OrcamentoService {
    resend;
    constructor() {
        this.resend = new resend_1.Resend(process.env.RESEND_API_KEY);
    }
    async send(data) {
        const { nome, empresa, email, telefone, servico, orcamento, descricao } = data;
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
};
exports.OrcamentoService = OrcamentoService;
exports.OrcamentoService = OrcamentoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OrcamentoService);
//# sourceMappingURL=orcamento.service.js.map