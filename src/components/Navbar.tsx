import React, { useState } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  onSignClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSignClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070d0a]/95 backdrop-blur-md border-b border-emerald-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Zone - Single text element wordmark */}
        <a 
          href="#topo" 
          className="font-monument tracking-wider text-base sm:text-lg font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span>SOMOS ANTIFASCISMO</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links (single line, subtle underline on hover) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider text-stone-300">
          <a href="#dossie" className="hover:text-amber-400 transition-colors whitespace-nowrap py-1">
            Dossiê do Clã
          </a>
          <a href="#cronologia" className="hover:text-amber-400 transition-colors whitespace-nowrap py-1">
            Linha do Tempo
          </a>
          <a href="#imoveis" className="hover:text-amber-400 transition-colors whitespace-nowrap py-1">
            51 Imóveis
          </a>
          <a href="#soberania" className="hover:text-amber-400 transition-colors whitespace-nowrap py-1">
            Soberania
          </a>
          <a href="#manifesto" className="hover:text-amber-400 transition-colors whitespace-nowrap py-1">
            Manifesto
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSignClick}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-900 bg-amber-400 hover:bg-amber-300 transition-colors rounded-none border border-amber-300 whitespace-nowrap shadow-sm"
          >
            Assinar Manifesto
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white"
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1410] border-b border-stone-800 px-4 py-4 space-y-3">
          <a
            href="#dossie"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-stone-300 hover:text-amber-400 py-1"
          >
            Dossiê do Clã
          </a>
          <a
            href="#cronologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-stone-300 hover:text-amber-400 py-1"
          >
            Linha do Tempo
          </a>
          <a
            href="#imoveis"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-stone-300 hover:text-amber-400 py-1"
          >
            51 Imóveis em Dinheiro Vivo
          </a>
          <a
            href="#soberania"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-stone-300 hover:text-amber-400 py-1"
          >
            Soberania Nacional
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-stone-300 hover:text-amber-400 py-1"
          >
            Manifesto Popular
          </a>
        </div>
      )}
    </header>
  );
};
