import { OrcamentoService } from './orcamento.service';
export declare class OrcamentoController {
    private orcamentoService;
    constructor(orcamentoService: OrcamentoService);
    send(body: any): Promise<{
        mensagem: string;
    }>;
}
