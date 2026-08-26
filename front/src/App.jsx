import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import SobreNos from "./pages/SobreNos";
import Orcamento from "./pages/Orcamento";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#08090d] text-slate-100 selection:bg-[#00d4ff]/30 selection:text-[#00d4ff]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<SobreNos />} />
            <Route path="/orcamento" element={<Orcamento />} />
            <Route path="/contact" element={<Contato />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
