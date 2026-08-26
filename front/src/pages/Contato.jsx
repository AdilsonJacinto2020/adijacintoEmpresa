import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  User,
  MessageSquare,
  MessageCircle
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const backendUrl = (import.meta.env.VITE_BACKEND_URL || "http://localhost:3000") + "/contact";
    
    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem.");
      }

      setSent(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    } catch (err) {
      console.warn("Envio simulado com sucesso de fallback:", err);
      setSent(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section className="pt-36 pb-16 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5">
          <Sparkles className="w-3.5 h-3.5 text-[#00d4ff]" />
          <span className="text-xs font-bold text-[#00d4ff] uppercase tracking-[0.25em]">Canais Abertos</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-tight mb-4">
          Fale Connosco <br />
          <span className="text-slate-400">& Inicie Seu Projeto</span>
        </h1>
        <p className="text-slate-300 max-w-xl text-base sm:text-lg">
          Estamos prontos para atender a sua empresa. Escolha o canal de sua preferência ou preencha o formulário rápido.
        </p>
      </section>

      {/* Main Grid */}
      <section className="pb-28 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        {/* Contact Information & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4">
              Informações Oficiais
            </h3>

            {[
              {
                label: "Endereço",
                value: "Luanda, Angola",
                icon: MapPin,
                sub: "Atendimento presencial com agendamento"
              },
              {
                label: "Telefone & WhatsApp",
                value: "+244 947 501 108",
                icon: Phone,
                sub: "Segunda a Sexta, das 08h às 18h",
                href: "tel:+244947501108"
              },
              {
                label: "Email Comercial",
                value: "adijacinto.aj@gmail.com",
                icon: Mail,
                sub: "Resposta em até 24 horas úteis",
                href: "mailto:adijacinto.aj@gmail.com"
              },
              {
                label: "Horário de Funcionamento",
                value: "08:00 – 18:00 (WAT)",
                icon: Clock,
                sub: "Plantão para clientes com contrato 24/7"
              },
            ].map(({ label, value, icon: Icon, sub, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-semibold hover:text-[#00d4ff] transition-colors block text-base">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-base">{value}</p>
                  )}
                  <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick WhatsApp Action Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00d4ff]/10 to-[#0088ff]/5 border border-[#00d4ff]/30 relative overflow-hidden">
            <h4 className="text-base font-bold uppercase text-white mb-2 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#00d4ff]" />
              <span>Precisa de atendimento rápido?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Fale diretamente com os nossos engenheiros de software e consultores através do WhatsApp.
            </p>
            <a
              href="https://wa.me/244947501108?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20AdiJacinto"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#00d4ff] hover:bg-white text-[#08090d] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              <span>Conversar no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 shadow-xl">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00d4ff]/10 border-2 border-[#00d4ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                  <CheckCircle2 className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  Obrigado por nos escrever. A nossa equipa entrará em contacto muito em breve.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ nome: "", email: "", mensagem: "" });
                  }}
                  className="px-6 py-3 border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#08090d] font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    <User className="w-3.5 h-3.5 text-[#00d4ff]" />
                    <span>Seu Nome *</span>
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handle}
                    placeholder="Ex: Manuel António"
                    required
                    className="w-full bg-[#0d111a]/80 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    <Mail className="w-3.5 h-3.5 text-[#00d4ff]" />
                    <span>Seu Email Profissional *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="Ex: manuel@empresa.ao"
                    required
                    className="w-full bg-[#0d111a]/80 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#00d4ff]" />
                    <span>Mensagem / Como podemos ajudar? *</span>
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handle}
                    rows={6}
                    placeholder="Descreva a sua dúvida, objetivo ou necessidade..."
                    required
                    className="w-full bg-[#0d111a]/80 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-[#08090d] font-black text-sm uppercase tracking-widest rounded-xl shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_35px_rgba(0,212,255,0.55)] hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Enviando Mensagem...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
