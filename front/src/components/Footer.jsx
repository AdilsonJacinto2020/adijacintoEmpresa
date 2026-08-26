import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin, Heart } from "lucide-react";
import foto from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        {/* Brand Section */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img className="h-10 md:h-12 w-auto object-contain" src={foto} alt="AdiJacinto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Soluções digitais modernas, seguras e personalizadas para empresas angolanas acelerarem sua transformação tecnológica e vendas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { label: "LinkedIn", url: "https://linkedin.com" },
              { label: "Instagram", url: "https://instagram.com" },
              { label: "Facebook", url: "https://facebook.com" },
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/5 transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Links Navigation */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-6">Navegação Rápida</h4>
          <ul className="space-y-3.5">
            {[
              { to: "/", label: "Início" },
              { to: "/servicos", label: "Nossos Serviços" },
              { to: "/sobre", label: "Sobre a Empresa" },
              { to: "/orcamento", label: "Pedir Orçamento" },
              { to: "/contact", label: "Fale Connosco" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#00d4ff] transition-colors" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d4ff] mb-6">Contactos Diretos</h4>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Sede Principal</p>
                <p className="text-slate-400 text-xs mt-0.5">Luanda, Angola</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Atendimento / WhatsApp</p>
                <a href="tel:+244947501108" className="text-slate-400 text-xs hover:text-[#00d4ff] transition-colors">
                  +244 947 501 108
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Email Corporativo</p>
                <a href="mailto:adijacinto.aj@gmail.com" className="text-slate-400 text-xs hover:text-[#00d4ff] transition-colors">
                  adijacinto.aj@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-black/40 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AdiJacinto. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com excelência em Angola</span>
            <span className="text-base">🇦🇴</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
