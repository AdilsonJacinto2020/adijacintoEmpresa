import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    });
    setSent(true);
  }

  return (
    <>
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <p className="text-[#00d4ff] text-xs uppercase tracking-[0.3em] mb-4">Fale connosco</p>
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
          Contacto
        </h1>
      </section>

      <section className="pb-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        {/* Info */}
        <div>
          <div className="space-y-8">
            {[
              { label: "Endereço", value: "Luanda, Angola", icon: "◉" },
              { label: "Telefone", value: "+244 94 7501 108", icon: "◎" },
              { label: "Email", value: "adijacinto.aj@gmail.com", icon: "◈" },
              { label: "Horário", value: "Seg–Sex: 08h–18h", icon: "⊛" },
            ].map(({ label, value, icon }) => (
              <div key={label} className="flex gap-4 items-start">
                <span className="text-[#00d4ff] text-xl mt-0.5">{icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border border-white/10 rounded-xl bg-[#0d0d0d]">
            <p className="text-sm text-white/60 mb-4">Prefere um orçamento detalhado?</p>
            <Link
              to="/orcamento"
              className="inline-block px-6 py-3 bg-[#00d4ff] text-[#0a0a0a] font-bold text-xs uppercase tracking-wider rounded hover:bg-white transition-colors"
            >
              Pedir Orçamento →
            </Link>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center">
                <span className="text-[#00d4ff]">✓</span>
              </div>
              <h3 className="font-bold uppercase tracking-wider mb-2">Mensagem enviada!</h3>
              <p className="text-white/40 text-sm">Respondemos em até 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              {[
                { name: "nome", label: "Nome", placeholder: "O seu nome", type: "text" },
                { name: "email", label: "Email", placeholder: "email@exemplo.com", type: "email" },
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
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handle}
                  rows={5}
                  placeholder="Como podemos ajudar?"
                  required
                  className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#00d4ff]/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-[#00d4ff] text-[#0a0a0a] font-bold text-sm uppercase tracking-wider rounded hover:bg-white transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
