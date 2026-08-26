import { Link } from "react-router-dom";
import {
  Globe,
  Database,
  Mail,
  Headphones,
  ShoppingBag,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    desc: "Desenvolvimento de sites institucionais, landing pages e portfólios digitais de alta conversão, responsivos e otimizados com SEO de ponta.",
    features: ["Design Responsivo & Adaptável", "SEO & Performance Otimizada", "Integração WhatsApp & Redes", "Painel Administrativo Fácil"],
    price: "A partir de 150.000 Kz",
    badge: "Essencial",
  },
  {
    icon: Database,
    title: "Sistemas de Gestão (ERP/CRM)",
    desc: "Aplicações web completas e seguras para automação de faturas, controlo de stock, gestão de clientes e emissão de relatórios dinâmicos.",
    features: ["Dashboards Personalizados", "Integração via APIs", "Gestão Multiusuário e Permissões", "Exportação Excel / PDF"],
    price: "A partir de 300.000 Kz",
    badge: "Empresarial",
  },
  {
    icon: Mail,
    title: "Email Corporativo Profissional",
    desc: "Configuração, proteção contra spam e gestão de emails com domínio próprio (@suaempresa.ao), Google Workspace ou Microsoft 365.",
    features: ["Domínio e Identidade Própria", "Armazenamento em Nuvem Seguro", "Calendários e Reuniões Online", "Suporte na Configuração"],
    price: "A partir de 15.000 Kz/mês",
    badge: "Credibilidade",
  },
  {
    icon: Headphones,
    title: "Suporte & Manutenção Contínua",
    desc: "Monitoramento em tempo real, proteção contra ataques, backups frequentes e suporte técnico prioritário para a tranquilidade da sua equipa.",
    features: ["Monitoramento 24/7", "Backups Semanais em Nuvem", "Patches de Segurança Imediatos", "Suporte Prioritário"],
    price: "A partir de 50.000 Kz/mês",
    badge: "Segurança",
  },
  {
    icon: ShoppingBag,
    title: "Lojas Virtuais (E-Commerce)",
    desc: "Plataformas de venda online de alta performance com catálogo intuitivo, cálculo de frete, carrinho inteligente e pagamentos seguros.",
    features: ["Catálogo de Produtos Ilimitado", "Checkout Rápido & Seguro", "Controlo de Stock Automático", "Notificações de Venda em Tempo Real"],
    price: "A partir de 250.000 Kz",
    badge: "Vendas Online",
  },
  {
    icon: Cpu,
    title: "Consultoria em TI & Infraestrutura",
    desc: "Diagnóstico profundo do ecossistema tecnológico da sua empresa, identificando gargalos e criando planos estratégicos de modernização.",
    features: ["Auditoria de Segurança & Redes", "Plano Diretor de Tecnologia", "Formação e Treinamento de Equipa", "Acompanhamento Contínuo"],
    price: "A partir de 80.000 Kz",
    badge: "Estratégico",
  },
];

export default function Servicos() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5">
          <Sparkles className="w-3.5 h-3.5 text-[#00d4ff]" />
          <span className="text-xs font-bold text-[#00d4ff] uppercase tracking-[0.25em]">Soluções Completas</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-tight mb-6">
          Nossos <br />
          <span className="text-slate-400">Serviços & Especialidades</span>
        </h1>
        <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
          Unimos estratégia, design e tecnologia de última geração para desenvolver soluções robustas que aceleram o crescimento do seu negócio em Angola.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc, features, price, badge }) => (
            <div
              key={title}
              className="group rounded-2xl p-8 bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/[0.02] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 rounded-full border border-[#00d4ff]/20">
                    {badge}
                  </span>
                </div>

                <h3 className="font-black text-xl text-white uppercase tracking-wide mb-3 group-hover:text-[#00d4ff] transition-colors">
                  {title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{desc}</p>

                <div className="space-y-2.5 mb-8 border-t border-white/5 pt-5">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-5 mt-auto flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">Investimento</p>
                  <p className="text-[#00d4ff] font-bold text-base mt-0.5">{price}</p>
                </div>
                <Link
                  to="/orcamento"
                  className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#00d4ff] group-hover:text-[#08090d] text-slate-300 transition-all"
                  aria-label={`Pedir orçamento para ${title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#00d4ff]/10 via-transparent to-[#0088ff]/10 border border-[#00d4ff]/20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-3">
            Precisa de um projeto sob medida?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Desenvolvemos integrações específicas, automações avançadas e sistemas corporativos complexos.
          </p>
          <Link
            to="/orcamento"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#08090d] font-bold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.35)] hover:bg-white transition-all"
          >
            <span>Solicitar Proposta Customizada</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
