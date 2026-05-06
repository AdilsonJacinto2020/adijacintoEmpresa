import { useState } from "react";

const services = [
  "Site Institucional",
  "Landing Page",
  "Sistema de Gestão",
  "E-commerce",
  "Email Corporativo",
  "Suporte Técnico",
  "Consultoria em TI",
  "Outro",
];

const budgets = [
  "Menos de 100.000 Kz",
  "100.000 – 300.000 Kz",
  "300.000 – 600.000 Kz",
  "Mais de 600.000 Kz",
  "A discutir",
];

export default function Orcamento() {
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", telefone: "", servico: "", orcamento: "", descricao: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Aqui integraria com backend / EmailJS / Formspree
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/40 flex items-center justify-center">
            <span className="text-[#00d4ff] text-2xl">✓</span>
          </div>
          <h2 className="text-3xl font-black uppercase mb-4">Pedido Enviado!</h2>
          <p className="text-white/50 leading-relaxed">
            Recebemos o seu pedido de orçamento. A nossa equipa entrará em contacto nas próximas 24 horas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <p className="text-[#00d4ff] text-xs uppercase tracking-[0.3em] mb-4">Sem compromisso</p>
        <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-6">
          Pedir
          <br />
          <span className="text-white/30">Orçamento</span>
        </h1>
        <p className="text-white/50 max-w-lg">
          Preencha o formulário abaixo e receba uma proposta personalizada gratuitamente.
        </p>
      </section>

      <section className="pb-28 px-6 max-w-4xl mx-auto">
        <form onSubmit={submit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "nome", label: "Nome completo", placeholder: "João Silva", type: "text" },
              { name: "empresa", label: "Empresa", placeholder: "Minha Empresa Lda.", type: "text" },
              { name: "email", label: "Email", placeholder: "joao@empresa.ao", type: "email" },
              { name: "telefone", label: "Telefone", placeholder: "+244 900 000 000", type: "tel" },
            ].map(({ name, label, placeholder, type }) => (
              <div key={name}>
                <label className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-2">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handle}
                  placeholder={placeholder}
                  required
                  className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Serviço pretendido</label>
              <select
                name="servico"
                value={form.servico}
                onChange={handle}
                required
                className="w-full bg-[#0a0a0a] border border-white/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
              >
                <option value="" disabled>Selecionar serviço...</option>
                {services.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Orçamento disponível</label>
              <select
                name="orcamento"
                value={form.orcamento}
                onChange={handle}
                className="w-full bg-[#0a0a0a] border border-white/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
              >
                <option value="" disabled>Selecionar faixa...</option>
                {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Descreva o seu projeto</label>
            <textarea
              name="descricao"
              value={form.descricao}
              onChange={handle}
              rows={5}
              placeholder="Conte-nos sobre o seu projeto, objetivos e qualquer detalhe relevante..."
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-12 py-4 bg-[#00d4ff] text-[#0a0a0a] font-black text-sm uppercase tracking-widest rounded hover:bg-white transition-colors duration-300"
          >
            Enviar Pedido
          </button>
        </form>
      </section>
    </>
  );
}
