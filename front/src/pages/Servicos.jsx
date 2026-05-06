import { Link } from "react-router-dom";

const services = [
  {
    icon: "◈",
    title: "Sites & Landing Pages",
    desc: "Desenvolvimento de sites institucionais, landing pages e portfólios digitais com design moderno, responsivo e otimizado para conversão.",
    features: ["Design responsivo", "SEO integrado", "Alta performance", "Painel de gestão"],
    price: "A partir de 150.000 Kz",
  },
  {
    icon: "⬡",
    title: "Sistemas de Gestão",
    desc: "Aplicações web personalizadas para gerir inventário, faturação, clientes, colaboradores e muito mais.",
    features: ["Desenvolvimento personalizado", "Integração com APIs", "Relatórios avançados", "Acesso multiusuário"],
    price: "A partir de 300.000 Kz",
  },
  {
    icon: "◎",
    title: "Email Corporativo",
    desc: "Configuração e gestão de emails profissionais com o seu domínio (@suaempresa.ao), via Google Workspace ou Microsoft 365.",
    features: ["Domínio personalizado", "Armazenamento em nuvem", "Calendário partilhado", "Suporte técnico"],
    price: "A partir de 15.000 Kz/mês",
  },
  {
    icon: "⟁",
    title: "Suporte & Manutenção",
    desc: "Manutenção preventiva, atualizações de segurança e suporte técnico contínuo para os seus sistemas digitais.",
    features: ["Monitoramento 24h", "Backups automáticos", "Atualizações regulares", "Resposta rápida"],
    price: "A partir de 50.000 Kz/mês",
  },
  {
    icon: "⊞",
    title: "E-commerce",
    desc: "Lojas online completas com gestão de produtos, pagamentos integrados e experiência de compra otimizada.",
    features: ["Catálogo de produtos", "Pagamentos seguros", "Gestão de pedidos", "Integração de envios"],
    price: "A partir de 250.000 Kz",
  },
  {
    icon: "⊛",
    title: "Consultoria em TI",
    desc: "Análise e diagnóstico da infraestrutura digital da sua empresa, com recomendações estratégicas para otimização.",
    features: ["Auditoria digital", "Plano estratégico", "Formação da equipa", "Acompanhamento"],
    price: "A partir de 80.000 Kz",
  },
];

export default function Servicos() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <p className="text-[#00d4ff] text-xs uppercase tracking-[0.3em] mb-4">O que oferecemos</p>
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
          Nossos
          <br />
          <span className="text-white/30">Serviços</span>
        </h1>
        <p className="text-white/50 max-w-xl text-lg">
          Soluções completas de tecnologia para empresas que querem crescer com eficiência e profissionalismo.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, title, desc, features, price }) => (
            <div
              key={title}
              className="group border border-white/10 rounded-xl p-8 hover:border-[#00d4ff]/30 transition-all duration-500 flex flex-col"
            >
              <span className="text-4xl text-[#00d4ff] mb-6 block">{icon}</span>
              <h3 className="font-black text-white uppercase tracking-wide mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
              <ul className="space-y-2 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="text-[#00d4ff] text-xs">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Investimento</p>
                <p className="text-[#00d4ff] font-bold text-sm">{price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/40 mb-6">Precisa de algo personalizado?</p>
          <Link
            to="/orcamento"
            className="inline-block px-10 py-4 bg-[#00d4ff] text-[#0a0a0a] font-bold text-sm uppercase tracking-wider rounded hover:bg-white transition-colors duration-300"
          >
            Solicitar Proposta Personalizada
          </Link>
        </div>
      </section>
    </>
  );
}
