import { Link } from "react-router-dom";
import {
  Award,
  Lightbulb,
  ShieldCheck,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Briefcase,
  CheckCircle2
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excelência e Rigor",
    desc: "Cada linha de código, interface e estratégia é refinada com alto padrão de qualidade e atenção aos mínimos detalhes."
  },
  {
    icon: Lightbulb,
    title: "Inovação Prática",
    desc: "Adotamos arquiteturas modernas e tecnologias de ponta que geram resultados comerciais reais para o seu negócio."
  },
  {
    icon: ShieldCheck,
    title: "Compromisso e Transparência",
    desc: "Prazos cumpridos com rigor, comunicação aberta e alinhamento constante em todas as fases do projeto."
  },
  {
    icon: Users,
    title: "Parceria de Longo Prazo",
    desc: "Mais do que prestadores de serviços, atuamos como o braço de engenharia tecnológica da sua empresa."
  },
];

const team = [
  { name: "Adi Jacinto", role: "CEO & Engenheiro de Software", initials: "AJ", bio: "Especialista em soluções digitais e arquitetura de software." },
  { name: "Maria Santos", role: "Frontend & UI/UX Developer", initials: "MS", bio: "Focada em interfaces fluidas, responsivas e intuitivas." },
  { name: "Carlos Figueira", role: "Backend & Cloud Engineer", initials: "CF", bio: "Especialista em segurança de dados, APIs e infraestrutura em nuvem." },
  { name: "Ana Luísa", role: "Design de Produto & Branding", initials: "AL", bio: "Especialista em identidade visual corporativa e conversão." },
];

export default function SobreNos() {
  return (
    <>
      {/* Header Section */}
      <section className="pt-36 pb-16 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5">
          <Sparkles className="w-3.5 h-3.5 text-[#00d4ff]" />
          <span className="text-xs font-bold text-[#00d4ff] uppercase tracking-[0.25em]">A Nossa História</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-tight mb-6">
          Sobre a <br />
          <span className="text-slate-400">AdiJacinto</span>
        </h1>
        <p className="text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
          Impulsionamos a evolução tecnológica em Angola através de software sob medida, design premium e infraestruturas digitais de alta confiabilidade.
        </p>
      </section>

      {/* Mission & Numbers */}
      <section className="px-6 pb-24 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p className="font-medium text-white">
            Fundada com a missão de democratizar a excelência tecnológica em Angola, a AdiJacinto nasceu para entregar soluções digitais que competem nos mais altos padrões mundiais.
          </p>
          <p className="text-slate-400">
            Apoiamos empresas de diversos setores na modernização de seus processos, criação de sistemas de gestão internos, presença digital marcante e suporte técnico ininterrupto.
          </p>
          <div className="pt-4 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2.5 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
              <span>Metodologia Ágil e Eficiente</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
              <span>Foco em Retorno sobre Investimento</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
              <span>Suporte e Acompanhamento Contínuo</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
              <span>Código Seguro e Escalável</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131926] to-[#0c0f17] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="text-center mb-8">
              <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0088ff] mb-2">
                5+
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-200">Anos de Experiência no Mercado</p>
              <p className="text-xs text-slate-400 mt-1">Transformando desafios complexos em soluções simples</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-black text-[#00d4ff]">50+</div>
                <div className="text-xs font-medium uppercase text-slate-400 mt-1">Projetos Concluídos</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl font-black text-[#00d4ff]">30+</div>
                <div className="text-xs font-medium uppercase text-slate-400 mt-1">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y border-white/10 bg-[#0a0d14]/70 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-[#00d4ff] text-xs uppercase font-bold tracking-[0.3em] mb-3">Nossos Pilares</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">Valores que nos Guiam</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/[0.02] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-[#00d4ff] mb-2 font-semibold">0{i + 1}</div>
                <h3 className="font-bold uppercase tracking-wider text-base text-white mb-2.5">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[#00d4ff] text-xs uppercase font-bold tracking-[0.3em] mb-3">Talento Humano</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">Nossa Equipa</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, initials, bio }) => (
            <div
              key={name}
              className="group text-center p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#0088ff]/20 border-2 border-[#00d4ff]/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-[#00d4ff] font-black text-lg tracking-wider">{initials}</span>
                </div>
                <h3 className="font-bold text-base uppercase tracking-wide text-white">{name}</h3>
                <p className="text-[#00d4ff] text-xs font-medium mt-1 mb-3">{role}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
