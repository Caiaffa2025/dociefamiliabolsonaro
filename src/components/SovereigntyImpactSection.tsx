import React, { useState } from 'react';
import { ShieldCheck, HeartPulse, TreePine, Users, Award, ChevronRight } from 'lucide-react';
import { SOVEREIGNTY_PILLARS, SovereigntyPillar } from '../data/dossierData.ts';

export const SovereigntyImpactSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>(SOVEREIGNTY_PILLARS[0].id);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'democracia-instituicoes':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'saude-vida':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'meio-ambiente-povos':
        return <TreePine className="w-5 h-5 text-emerald-400" />;
      case 'povo-economia':
        return <Users className="w-5 h-5 text-amber-300" />;
      default:
        return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  const selectedData = SOVEREIGNTY_PILLARS.find(p => p.id === activePillar) || SOVEREIGNTY_PILLARS[0];

  return (
    <section id="soberania" className="py-16 lg:py-24 bg-[#09120e] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Pela Soberania do Brasil e Contra o Fascismo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight text-balance">
            O Que o Clã Bolsonaro Fez Contra o Povo e a Soberania Nacional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
            Soberania não é bater continência para bandeiras estrangeiras ou armar milícias. Soberania é alimentar o povo, defender o território nacional, proteger a ciência e preservar as instituições democráticas da República.
          </p>
        </div>

        {/* Interactive 4 Pillars View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pillar Selector (Left Column - 4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {SOVEREIGNTY_PILLARS.map((pillar) => {
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`w-full text-left p-4 sm:p-5 transition-all border flex items-center justify-between ${
                    isActive
                      ? 'bg-[#121f18] border-amber-400 shadow-md text-white'
                      : 'bg-[#0d1612] border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {getPillarIcon(pillar.id)}
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold">
                        {pillar.title}
                      </div>
                      <div className="text-[11px] text-stone-400 mt-0.5 line-clamp-1">
                        {pillar.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-amber-400' : 'text-stone-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Pillar Full Manifest (Right Column - 8 cols) */}
          <div className="lg:col-span-8 bg-[#0e1914] border border-stone-800 p-6 sm:p-8 space-y-6">
            
            <div className="border-b border-stone-800 pb-4">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                Eixo Estrutural de Soberania
              </div>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                {selectedData.title}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                {selectedData.subtitle}
              </p>
            </div>

            {/* Historical Damage */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                1. O Ataque Perpetrado pelo Governo Bolsonaro
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal bg-stone-950/70 p-4 border border-stone-800/80">
                {selectedData.historicalRecord}
              </p>
            </div>

            {/* Consequences to the People */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                2. Consequência Direta para o Povo Brasileiro
              </h4>
              <div className="p-4 bg-rose-950/20 border border-rose-900/40 text-xs sm:text-sm text-rose-200 leading-relaxed">
                {selectedData.victimsOrConsequence}
              </div>
            </div>

            {/* The Democratic Antifascist Response */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                3. A Resposta da Soberania Constitucional e da Sociedade
              </h4>
              <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 text-xs sm:text-sm text-emerald-200 leading-relaxed">
                {selectedData.resistanceAction}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
