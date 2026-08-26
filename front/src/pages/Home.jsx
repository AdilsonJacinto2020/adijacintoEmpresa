import { Link } from "react-router-dom";
import {
  Globe,
  Database,
  Mail,
  Headphones,
  ShoppingBag,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites & Web Apps",
    desc: "Presença digital de alto impacto, arquitetura moderna, responsiva e otimizada para SEO e conversão.",
    tag: "Mais procurado"
  },
  {
    icon: Database,
    title: "Sistemas de Gestão",
    desc: "Software personalizado com painéis interativos para automatizar processos e escalar sua operação.",
    tag: "Sob Medida"
  },
  {
    icon: Mail,
    title: "Email Corporativo",
    desc: "Comunicação profissional com domínio próprio (@suaempresa.ao) e segurança de nível corporativo.",
    tag: "Profissional"
  },
  {
    icon: Headphones,
    title: "Suporte Técnico 24/7",
    desc: "Manutenção contínua, auditorias preventivas e monitoramento em tempo real para a sua empresa.",
    tag: "Garantia"
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Performance Extrema",
    desc: "Aplicações ultrarrápidas construídas com as tecnologias mais modernas do mercado global."
  },
  {
    icon: ShieldCheck,
    title: "Segurança & Confiabilidade",
    desc: "Protocolos rígidos de proteção de dados, backups frequentes e infraestrutura resiliente."
  },
  {
    icon: TrendingUp,
    title: "Foco em Crescimento",
    desc: "Desenvolvemos produtos alinhados diretamente aos objetivos comerciais da sua organização."
  }
];

const stats = [
  { value: "50+", label: "Projetos Entregues", sub: "100% no prazo" },
  { value: "98%", label: "Taxa de Satisfação", sub: "Avaliação 5 estrelas" },
  { value: "5+", label: "Anos no Mercado", sub: "Experiência sólida" },
  { value: "24h", label: "Tempo Médio de Resposta", sub: "Suporte dedicado" },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16">
        {/* Background Grid and Glowing Orbs */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00d4ff]/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-[#0070f3]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 backdrop-blur-md">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-ping" />
              <span className="text-xs font-semibold text-[#00d4ff] uppercase tracking-[0.2em]">
                Engenharia de Software & Soluções Digitais
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.02] mb-6">
              Tecnologia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#4ce1ff] to-[#0088ff]">
                de Elite
              </span>{" "}
              para o seu Negócio
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Desenvolvemos websites, plataformas web e sistemas de gestão personalizados que elevam a autoridade da sua marca e multiplicam a produtividade da sua empresa em Angola.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/orcamento"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-[#08090d] font-bold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_35px_rgba(0,212,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Solicitar Proposta</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-[#00d4ff]/60 bg-white/[0.02] hover:bg-[#00d4ff]/5 text-white hover:text-[#00d4ff] text-sm uppercase font-semibold tracking-wider rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                Explorar Serviços
              </Link>
            </div>

            {/* Micro proof */}
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
                <span>Entregas Ágeis</span>
              </div>
            </div>
          </div>

          {/* Hero Interactive Card / Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full p-8 rounded-2xl bg-gradient-to-b from-[#131926]/90 to-[#0c0f17]/90 border border-white/15 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-2.5 py-1 rounded-md">
                  v2.0 • Online
                </span>
              </div>

              <div className="my-8 space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Inovação Contínua</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Tecnologias de ponta e arquiteturas escaláveis.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Segurança Empresarial</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Proteção total dos dados do seu negócio.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Pronto para dar o próximo passo?</span>
                <Link to="/contact" className="text-[#00d4ff] font-semibold hover:underline">
                  Fale Connosco →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-white/10 bg-[#0a0d14] relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0088ff] mb-2 tracking-tight">
                {value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-200">{label}</div>
              <div className="text-[11px] text-slate-400 mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE HIGHLIGHTS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#00d4ff] text-xs uppercase font-bold tracking-[0.3em] mb-3">Diferenciais</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Por que escolher a <span className="text-[#00d4ff]">AdiJacinto</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00d4ff]/5"
            >
              <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] mb-6">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold uppercase text-white mb-3 tracking-wide">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 border-t border-white/10 bg-[#0a0d14]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[#00d4ff] text-xs uppercase font-bold tracking-[0.3em] mb-3">Nossas Competências</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight">
                Serviços <br />
                <span className="text-slate-400">Especializados</span>
              </h2>
            </div>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#00d4ff] uppercase tracking-wider transition-colors"
            >
              <span>Ver todos os serviços</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, tag }, i) => (
              <div
                key={title}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#00d4ff] uppercase tracking-wider bg-[#00d4ff]/10 px-2 py-0.5 rounded-full border border-[#00d4ff]/20">
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-3 uppercase tracking-wide text-base group-hover:text-[#00d4ff] transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider group-hover:text-[#00d4ff]">
                  <span>Saber mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-xs text-[#00d4ff] uppercase tracking-widest font-semibold">
            Comece Hoje
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase mb-6 tracking-tight">
            Pronto para transformar <br />
            <span className="text-[#00d4ff]">o seu negócio?</span>
          </h2>
          <p className="text-slate-300 mb-10 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Entre em contacto com os nossos especialistas e obtenha uma proposta clara, transparente e sob medida.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/orcamento"
              className="px-10 py-5 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-[#08090d] font-black text-sm uppercase tracking-widest rounded-xl shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento Grátis
            </Link>
            <Link
              to="/contact"
              className="px-8 py-5 border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              Falar no WhatsApp / Telefone
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
