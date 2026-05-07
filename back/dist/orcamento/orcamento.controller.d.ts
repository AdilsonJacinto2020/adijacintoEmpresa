import { OrcamentoService } from './orcamento.service';
export declare class OrcamentoController {
    private orcamentoService;
    constructor(orcamentoService: OrcamentoService);
    sendEmail(body: any): Promise<{
        mensagem: string;
    }>;
}
