import { Link } from "react-router-dom";

const services = [
  {
    icon: "◈",
    title: "Sites & Web Apps",
    desc: "Presença digital de alto impacto, responsiva e otimizada para resultados.",
  },
  {
    icon: "⬡",
    title: "Sistemas de Gestão",
    desc: "Software personalizado para automatizar e escalar o seu negócio.",
  },
  {
    icon: "◎",
    title: "Email Corporativo",
    desc: "Comunicação profissional com domínio próprio e suite completa.",
  },
  {
    icon: "⟁",
    title: "Suporte Técnico",
    desc: "Manutenção e assistência técnica especializada para a sua empresa.",
  },
];

const stats = [
  { value: "50+", label: "Projetos entregues" },
  { value: "98%", label: "Satisfação dos clientes" },
  { value: "5+", label: "Anos de experiência" },
  { value: "24h", label: "Suporte disponível" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
              <span className="text-xs text-[#00d4ff] uppercase tracking-[0.2em]">Soluções Digitais em Angola</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] uppercase mb-6">
              Tecnologia
              <br />
              <span className="text-[#00d4ff]">que move</span>
              <br />
              <span className="text-white/30">negócios</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Desenvolvemos soluções digitais modernas que aumentam a eficiência e impulsionam o crescimento da sua empresa.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/servicos"
                className="px-8 py-4 bg-[#00d4ff] text-[#0a0a0a] font-bold text-sm uppercase tracking-wider rounded hover:bg-white transition-colors duration-300"
              >
                Ver Serviços
              </Link>
              <Link
                to="/orcamento"
                className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-wider rounded hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-300"
              >
                Pedir Orçamento
              </Link>
            </div>
          </div>

          {/* Visual block */}
          <div className="hidden md:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 border border-[#00d4ff]/20 rounded-2xl" />
              <div className="absolute inset-4 border border-[#00d4ff]/10 rounded-xl" />
              <div className="absolute inset-8 border border-[#00d4ff]/5 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black text-white/5 select-none">ADJ</div>
                  <div className="mt-4 w-16 h-0.5 bg-[#00d4ff] mx-auto" />
                  <div className="mt-4 text-xs text-[#00d4ff]/60 tracking-[0.4em] uppercase">Est. 2019</div>
                </div>
              </div>
              {/* Corner dots */}
              {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos) => (
                <div key={pos} className={`absolute ${pos} w-2 h-2 bg-[#00d4ff] rounded-full`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-black text-[#00d4ff] mb-1">{value}</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-[#00d4ff] text-xs uppercase tracking-[0.3em] mb-3">O que fazemos</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
              Serviços
              <br />
              <span className="text-white/30">Especializados</span>
            </h2>
          </div>
          <Link
            to="/servicos"
            className="text-sm text-white/50 hover:text-[#00d4ff] uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            Ver todos <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative p-8 border border-white/10 rounded-lg hover:border-[#00d4ff]/40 transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 bg-[#00d4ff]/0 group-hover:bg-[#00d4ff]/3 rounded-lg transition-all duration-500" />
              <div className="relative">
                <span className="text-3xl text-[#00d4ff] mb-6 block">{icon}</span>
                <div className="text-xs text-white/30 mb-2">0{i + 1}</div>
                <h3 className="font-bold text-white mb-3 uppercase tracking-wide text-sm">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            Pronto para
            <br />
            <span className="text-[#00d4ff]">começar?</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg">
            Entre em contacto e receba um orçamento personalizado sem compromisso.
          </p>
          <Link
            to="/orcamento"
            className="inline-block px-12 py-5 bg-[#00d4ff] text-[#0a0a0a] font-black text-sm uppercase tracking-widest rounded hover:bg-white transition-colors duration-300"
          >
            Solicitar Orçamento Grátis
          </Link>
        </div>
      </section>
    </>
  );
}
