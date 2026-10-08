import React, { useState } from 'react';
import { Calendar, ChevronRight, Clock, ShieldAlert } from 'lucide-react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/dossierData.ts';

export const TimelineSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredEvents = selectedTag === 'all'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(e => e.impactTag === selectedTag);

  return (
    <section id="cronologia" className="py-16 lg:py-24 bg-[#080f0c] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Linha do Tempo Ininterrupta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight text-balance">
            Do Primeiro Dia ao Fim do Poder: A Cronologia dos Desmandos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
            Antes mesmo da faixa presidencial ser colocada em 1º de janeiro de 2019, o clã já estava envolvido nas investigações do COAF com Fabrício Queiroz. Acompanhe a sucessão cronológica dos principais escândalos que abalaram o Brasil.
          </p>

          {/* Interactive Tag Selector */}
          <div className="flex flex-wrap gap-2 mt-6">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1.5 text-xs font-medium transition-colors border ${
                selectedTag === 'all'
                  ? 'bg-amber-400 text-stone-950 border-amber-300 font-bold'
                  : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
              }`}
            >
              Todos os Anos (2018 - 2024+)
            </button>
            {['Democracia', 'Corrupção', 'Saúde', 'Meio Ambiente'].map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors border ${
                  selectedTag === tag
                    ? 'bg-stone-200 text-stone-950 border-white font-semibold'
                    : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l-2 border-stone-800 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
          {filteredEvents.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Year marker on left for desktop */}
              <div className="hidden md:block absolute -left-40 top-0 text-right w-28">
                <span className="text-xl font-monument font-bold text-amber-400 tabular-nums">
                  {event.year}
                </span>
                <span className="block text-[11px] text-stone-400 mt-0.5">
                  {event.date.split(' de ')[0]}
                </span>
              </div>

              {/* Node indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 bg-stone-950 border-2 border-amber-400 group-hover:bg-amber-400 transition-colors" />

              {/* Event Content Card */}
              <div className="bg-[#0e1713] border border-stone-800/90 hover:border-stone-600 transition-colors p-5 md:p-6">
                {/* Mobile Date Header */}
                <div className="md:hidden flex items-center justify-between text-xs text-stone-400 mb-2 border-b border-stone-800/60 pb-2">
                  <span className="font-monument font-bold text-amber-400">{event.year}</span>
                  <span>{event.date}</span>
                </div>

                {/* Metadata strip: Actor and Category */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-400 mb-2">
                  <span className="font-semibold text-stone-200">{event.actor}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-400/90 font-medium">{event.impactTag}</span>
                  <span aria-hidden="true" className="hidden md:inline">·</span>
                  <span className="hidden md:inline text-stone-500">{event.date}</span>
                </div>

                <h3 className="text-xl font-editorial font-bold text-white group-hover:text-amber-300 transition-colors">
                  {event.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                  {event.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
