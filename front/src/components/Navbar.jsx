import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import foto from '../assets/images/logo.png'
const links = [
  { to: "/adijacintoEmpresa", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/orcamento", label: "Orçamento" },
  { to: "/contact", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/adijacintoEmpresa" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-[3px] bg-[#0a0a0a] rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-lg tracking-[0.2em] uppercase text-white">
            <img className="w-18 h-20" src={foto} alt="" /> </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm tracking-wider uppercase transition-all duration-300 hover:text-[#00d4ff] ${
                location.pathname === to
                  ? "text-[#00d4ff] font-semibold"
                  : "text-white/70"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/orcamento"
            className="ml-4 px-5 py-2 bg-[#00d4ff] text-[#0a0a0a] text-sm font-bold tracking-wider uppercase rounded hover:bg-white transition-colors duration-300"
          >
            Pedir Orçamento
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#0d0d0d] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm tracking-wider uppercase py-2 border-b border-white/5 ${
                location.pathname === to ? "text-[#00d4ff]" : "text-white/70"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/orcamento"
            className="mt-2 text-center px-5 py-3 bg-[#00d4ff] text-[#0a0a0a] text-sm font-bold tracking-wider uppercase rounded"
          >
            Pedir Orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
