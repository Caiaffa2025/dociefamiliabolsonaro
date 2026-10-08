import React, { useState } from 'react';
import { ArrowDown, Scale, BookOpen, Flag } from 'lucide-react';
import heroImg from '../assets/images/hero_brasil_soberania_1791467793400.jpg';

interface HeroSectionProps {
  onExploreClick: () => void;
  onSignClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onSignClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="topo" className="relative border-b border-stone-800 bg-[#090f0c] text-stone-100 overflow-hidden">
      {/* Editorial Utility Ribbon */}
      <div className="bg-[#050a08] border-b border-stone-800/80 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs tracking-wider text-stone-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-semibold uppercase">Memorial da Verdade Histórica</span>
            <span aria-hidden="true">·</span>
            <span>República Federativa do Brasil</span>
            <span aria-hidden="true">·</span>
            <span>Em defesa da Constituição de 1988</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Fontes Oficiais: STF · PF · TSE · CPI da Pandemia · TCU</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Manifesto Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
              <Flag className="w-4 h-4 text-amber-400" />
              <span>Dossiê da Memória, Justiça e Soberania Popular</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold tracking-tight text-white leading-[1.12] text-balance">
              Somos Antifascismo. <br />
              <span className="text-amber-400 font-normal italic">Pela Soberania do Brasil</span> e pelo Fim da Impunidade.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
              O registro histórico exaustivo de todos os inquéritos, indiciamentos, fraudes financeiras, crimes sanitários e ataques ao Estado Democrático de Direito perpetrados por Jair Bolsonaro, seus filhos e familiares desde o primeiro dia de poder.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-amber-300 shadow-md"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explorar Dossiê Completo</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onSignClick}
                className="px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-100 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-stone-700"
              >
                <Scale className="w-4 h-4 text-amber-400" />
                <span>Assinar o Manifesto Cívico</span>
              </button>
            </div>

            {/* Unboxed Metadata / Quantitative Rigor */}
            <div className="pt-6 border-t border-stone-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-300">
              <div>
                <div className="text-2xl font-bold font-monument text-amber-400 tabular-nums">18+</div>
                <div className="text-xs text-stone-400 uppercase tracking-wider mt-0.5">Casos & Inquéritos</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-monument text-amber-400 tabular-nums">700k+</div>
                <div className="text-xs text-stone-400 uppercase tracking-wider mt-0.5">Vítimas da Covid</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-monument text-amber-400 tabular-nums">51</div>
                <div className="text-xs text-stone-400 uppercase tracking-wider mt-0.5">Imóveis em Dinheiro</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-monument text-amber-400 tabular-nums">8 Anos</div>
                <div className="text-xs text-stone-400 uppercase tracking-wider mt-0.5">Inelegibilidade TSE</div>
              </div>
            </div>
          </div>

          {/* Documentary Image Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-stone-800 bg-stone-900 p-2 shadow-2xl">
              <div className="relative aspect-video lg:aspect-4/3 overflow-hidden bg-stone-950">
                {!imgError ? (
                  <img
                    src={heroImg}
                    alt="Povo brasileiro em manifestação pacífica em frente ao Congresso Nacional em defesa da democracia e soberania constitucional"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover grayscale-20 contrast-110 hover:scale-102 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-stone-900 text-stone-400">
                    <Scale className="w-12 h-12 text-amber-400 mb-2" />
                    <span className="font-editorial text-lg text-stone-200">Em Defesa da Soberania Constitucional</span>
                    <span className="text-xs text-stone-400 mt-1">Brasília, DF · Arquivo Histórico da Democracia</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <div className="font-semibold text-amber-300">Congresso Nacional · Brasília, DF</div>
                  <div className="text-[11px] text-stone-300">A soberania reside no povo, que a exerce por meio da Constituição Cidadã.</div>
                </div>
              </div>
              <div className="py-2 px-3 text-[11px] text-stone-400 flex items-center justify-between border-t border-stone-800">
                <span>Registro Documental · Acervo Histórico</span>
                <span className="font-mono text-amber-400/80">DOC-BR-SOB-1988</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
