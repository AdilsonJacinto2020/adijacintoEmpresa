import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import foto from "../assets/images/logo.png";
import fotoMobile from "../assets/images/icon.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/orcamento", label: "Orçamento" },
  { to: "/contact", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090d]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3.5"
          : "bg-gradient-to-b from-[#08090d]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <img
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src={isMobile ? fotoMobile : foto}
              alt="AdiJacinto Logo"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to || (to === "/contact" && location.pathname === "/contato");
            return (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-[#00d4ff] bg-[#00d4ff]/10 shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/orcamento"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00d4ff] to-[#00a3ff] text-[#08090d] text-xs font-bold tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Pedir Orçamento</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="w-5 h-5 text-[#00d4ff]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[420px] opacity-100 border-b border-white/10" : "max-h-0 opacity-0"
        } bg-[#0b0d13]/95 backdrop-blur-2xl`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to || (to === "/contact" && location.pathname === "/contato");
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center justify-between text-sm font-semibold tracking-wider uppercase py-3 px-4 rounded-lg transition-colors ${
                  isActive
                    ? "text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{label}</span>
                {isActive && <Sparkles className="w-4 h-4 text-[#00d4ff]" />}
              </Link>
            );
          })}
          <Link
            to="/orcamento"
            className="mt-4 flex items-center justify-center gap-2 text-center px-5 py-3.5 bg-gradient-to-r from-[#00d4ff] to-[#00a3ff] text-[#08090d] text-sm font-bold tracking-wider uppercase rounded-xl shadow-lg shadow-[#00d4ff]/20"
          >
            <span>Pedir Orçamento</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
