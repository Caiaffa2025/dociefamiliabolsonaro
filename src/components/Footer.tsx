import React from 'react';
import { Shield, BookOpen, Scale, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040806] text-stone-400 border-t border-stone-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-stone-800 pb-8">
          <div className="space-y-1">
            <div className="font-monument text-amber-400 font-bold tracking-wider text-base flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400 shrink-0" />
              <span>SOMOS ANTIFASCISMO & SOBERANIA NACIONAL</span>
            </div>
            <p className="text-stone-400 max-w-xl text-[11px] leading-relaxed">
              Memorial documental e permanente em defesa da soberania popular, dos direitos humanos e do Estado Democrático de Direito na República Federativa do Brasil.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            <span>Voltar ao Topo</span>
          </button>
        </div>

        {/* Links and Disclaimers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px] text-stone-400">
          <div className="space-y-2">
            <span className="font-semibold text-stone-200 uppercase tracking-wider block">
              Fontes & Bases Judiciais
            </span>
            <ul className="space-y-1 text-stone-400">
              <li>• Supremo Tribunal Federal (Inq 4874, Pet 12100)</li>
              <li>• Tribunal Superior Eleitoral (AIJE 0600814-85)</li>
              <li>• Relatórios Oficiais da Polícia Federal (DITEC/PF)</li>
              <li>• Relatório Final da CPI da Pandemia (Senado)</li>
              <li>• Ministério Público do Estado do Rio de Janeiro (MP-RJ)</li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-semibold text-stone-200 uppercase tracking-wider block">
              Navegação do Memorial
            </span>
            <div className="flex flex-col space-y-1.5 text-stone-400">
              <a href="#dossie" className="hover:text-amber-400 transition-colors">Dossiê Completo do Clã</a>
              <a href="#cronologia" className="hover:text-amber-400 transition-colors">Cronologia 2018 - Presente</a>
              <a href="#imoveis" className="hover:text-amber-400 transition-colors">O Escândalo dos 51 Imóveis</a>
              <a href="#soberania" className="hover:text-amber-400 transition-colors">Impactos na Soberania do Povo</a>
              <a href="#manifesto" className="hover:text-amber-400 transition-colors">Assinar o Manifesto</a>
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-semibold text-stone-200 uppercase tracking-wider block">
              Princípio Constitucional
            </span>
            <blockquote className="italic border-l-2 border-amber-400/80 pl-3 text-stone-300">
              &quot;Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição.&quot;
            </blockquote>
            <span className="block text-stone-500 text-[10px]">Art. 1º, Parágrafo Único da Constituição da República Federativa do Brasil de 1988.</span>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Somos Antifascismo · Pela Soberania do Brasil. Licença Aberta para Fins Cívicos e Educativos.
          </div>
          <div>
            Sem anistia para crimes contra a humanidade e contra a democracia.
          </div>
        </div>

      </div>
    </footer>
  );
};
