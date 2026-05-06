const values = [
  { title: "Excelência", desc: "Entregamos sempre o melhor, com atenção ao detalhe e foco na qualidade." },
  { title: "Inovação", desc: "Usamos as tecnologias mais modernas para criar soluções à frente do mercado." },
  { title: "Compromisso", desc: "Cumprimos prazos e mantemos comunicação transparente em todos os projetos." },
  { title: "Parceria", desc: "Tratamos cada cliente como um parceiro de longo prazo, não apenas um projeto." },
];

const team = [
  { name: "Adi Jacinto", role: "CEO & Fundador", initials: "AJ" },
  { name: "Maria Santos", role: "Desenvolvedora Frontend", initials: "MS" },
  { name: "Carlos Figueira", role: "Desenvolvedor Backend", initials: "CF" },
  { name: "Ana Luísa", role: "Designer UI/UX", initials: "AL" },
];

export default function SobreNos() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <p className="text-[#00d4ff] text-xs uppercase tracking-[0.3em] mb-4">Quem somos</p>
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
          Sobre a
          <br />
          <span className="text-white/30">AdiJacinto</span>
        </h1>
      </section>

      {/* Mission */}
      <section className="px-6 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            A AdiJacinto nasceu com a missão de democratizar o acesso a tecnologia de qualidade em Angola. Acreditamos que toda empresa, independente do tamanho, merece soluções digitais profissionais.
          </p>
          <p className="text-white/40 leading-relaxed">
            Desde 2019, ajudamos empresas angolanas a construir a sua presença digital, automatizar processos e crescer com o apoio da tecnologia certa.
          </p>
        </div>
        <div className="relative">
          <div className="border border-white/10 rounded-xl p-10 text-center">
            <div className="text-7xl font-black text-white/5 mb-4">5+</div>
            <p className="text-[#00d4ff] font-bold uppercase tracking-wider text-sm">Anos de experiência</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="border border-white/10 rounded p-4">
                <div className="text-2xl font-black text-[#00d4ff]">50+</div>
                <div className="text-xs text-white/40 mt-1">Projetos</div>
              </div>
              <div className="border border-white/10 rounded p-4">
                <div className="text-2xl font-black text-[#00d4ff]">30+</div>
                <div className="text-xs text-white/40 mt-1">Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/10 bg-[#0d0d0d] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00d4ff] text-xs uppercase tracking-[0.3em] mb-4">O que nos guia</p>
          <h2 className="text-3xl font-black uppercase mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc }, i) => (
              <div key={title} className="p-6 border border-white/10 rounded-lg">
                <div className="text-xs text-[#00d4ff] mb-3">0{i + 1}</div>
                <h3 className="font-bold uppercase tracking-wider text-sm mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <p className="text-[#00d4ff] text-xs uppercase tracking-[0.3em] mb-4">As pessoas</p>
        <h2 className="text-3xl font-black uppercase mb-12">Nossa Equipa</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, initials }) => (
            <div key={name} className="group text-center p-6 border border-white/10 rounded-xl hover:border-[#00d4ff]/30 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center">
                <span className="text-[#00d4ff] font-bold text-sm">{initials}</span>
              </div>
              <h3 className="font-bold text-sm uppercase tracking-wide">{name}</h3>
              <p className="text-white/40 text-xs mt-1">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
