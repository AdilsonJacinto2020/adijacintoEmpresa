import { Link } from "react-router-dom";
import foto from '../assets/images/logo.png'
export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-7 h-7">
              <div className="absolute inset-[3px] bg-[#050505] rounded-sm rotate-45" />
            </div>
            <span className="font-bold text-lg tracking-[0.2em] uppercase">
              <img className="w-18 h-20" src={foto} alt="" />
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Soluções digitais modernas para empresas angolanas que querem crescer com tecnologia.
          </p>
          <div className="flex gap-4 mt-6">
            {["LinkedIn", "Instagram", "Facebook"].map((s) => (
              <a key={s} href="#" className="text-xs text-white/40 hover:text-[#00d4ff] uppercase tracking-wider transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Navegação</h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Início" },
              { to: "/servicos", label: "Serviços" },
              { to: "/sobre", label: "Sobre Nós" },
              { to: "/contato", label: "Contato" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-white/60 hover:text-[#00d4ff] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Luanda, Angola</li>
            <li>+244 947 501 108</li>
            <li>adijacinto.aj@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-white/30">© 2026 AdiJacinto. Todos os direitos reservados.</p>
        <p className="text-xs text-white/20">Feito em Angola 🇦🇴</p>
      </div>
    </footer>
  );
}
