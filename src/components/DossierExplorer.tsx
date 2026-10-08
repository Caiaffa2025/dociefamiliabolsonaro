import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronRight, 
  X, 
  FileText, 
  AlertOctagon, 
  ShieldCheck, 
  ExternalLink,
  BookOpen,
  Filter
} from 'lucide-react';
import { 
  DOSSIER_ITEMS, 
  FAMILY_MEMBERS_META, 
  DossierItem, 
  FamilyMemberMeta 
} from '../data/dossierData.ts';

export const DossierExplorer: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<FamilyMemberMeta['id']>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItemModal, setActiveItemModal] = useState<DossierItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Áreas' },
    { id: 'democracia', label: 'Golpe & Democracia' },
    { id: 'corrupcao', label: 'Rachadinhas & Corrupção' },
    { id: 'saude', label: 'Pandemia & SUS' },
    { id: 'espionagem', label: 'Abin Paralela' },
    { id: 'meio_ambiente', label: 'Amazônia & Indígenas' },
    { id: 'patrimonio', label: 'Mansões & Patrimônio' }
  ];

  const filteredItems = useMemo(() => {
    return DOSSIER_ITEMS.filter((item) => {
      const matchMember = selectedMember === 'all' || item.familyMember === selectedMember;
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        q === '' ||
        item.title.toLowerCase().includes(q) ||
        item.shortSummary.toLowerCase().includes(q) ||
        item.memberName.toLowerCase().includes(q) ||
        item.crimesList.some(c => c.toLowerCase().includes(q)) ||
        item.evidenceHighlights.some(e => e.toLowerCase().includes(q));

      return matchMember && matchCategory && matchSearch;
    });
  }, [selectedMember, selectedCategory, searchQuery]);

  return (
    <section id="dossie" className="py-16 lg:py-24 bg-[#0a120e] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
            Arquivo Criminal e Constitucional
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight text-balance">
            O Dossiê do Clã Bolsonaro: Todos os Envolvimentos e Processos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
            Navegue pelos inquéritos da Polícia Federal, denúncias do Ministério Público, relatórios de CPIs e condenações no STF e TSE. Cada registro traz a descrição dos fatos, provas materiais e tipificações penais.
          </p>
        </div>

        {/* Filter Controls: Family Member Selector */}
        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Filtrar por Integrante da Família:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {FAMILY_MEMBERS_META.map((member) => {
              const isActive = selectedMember === member.id;
              return (
                <button
                  key={member.id}
                  onClick={() => setSelectedMember(member.id)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors border ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 border-amber-300 font-bold shadow-sm'
                      : 'bg-stone-900/90 text-stone-300 border-stone-800 hover:border-stone-600 hover:text-white'
                  }`}
                >
                  <span className="whitespace-nowrap">{member.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Bar: Categories + Instant Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors border ${
                    isSelected
                      ? 'bg-stone-100 text-stone-950 border-white font-semibold'
                      : 'bg-transparent text-stone-400 border-stone-800 hover:text-stone-200 hover:border-stone-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por caso, vacina, joias, Queiroz..."
              className="w-full pl-9 pr-8 py-2 bg-stone-950 text-stone-200 text-xs border border-stone-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors placeholder:text-stone-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-500 hover:text-stone-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter (Unboxed clean metadata) */}
        <div className="flex items-center justify-between text-xs text-stone-400 mb-6">
          <div className="flex items-center gap-2">
            <span>Exibindo <strong>{filteredItems.length}</strong> registro(s) documentado(s)</span>
            <span aria-hidden="true">·</span>
            <span>Critério: Documentos públicos oficiais e perícias</span>
          </div>
          {(selectedMember !== 'all' || selectedCategory !== 'all' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedMember('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-amber-400 hover:underline text-xs"
            >
              Limpar todos os filtros
            </button>
          )}
        </div>

        {/* Dossier Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-stone-950/60 border border-stone-800 text-stone-400">
            <AlertOctagon className="w-10 h-10 mx-auto text-amber-500/80 mb-3" />
            <h3 className="text-base font-semibold text-stone-200">Nenhum registro encontrado</h3>
            <p className="text-xs text-stone-400 mt-1 max-w-md mx-auto">
              Não encontramos investigações para o termo buscado com os filtros atuais. Tente buscar por outros nomes ou palavras-chave como &quot;joias&quot;, &quot;golpe&quot;, &quot;vacina&quot; ou &quot;Queiroz&quot;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between bg-[#0e1713] border border-stone-800/90 hover:border-amber-500/60 transition-all p-6 relative"
              >
                <div className="space-y-3">
                  {/* Unboxed Metadata Header (Anti-slop zero-pill) */}
                  <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-stone-800/60 pb-2.5">
                    <span className="font-semibold text-amber-400 uppercase tracking-wide">
                      {item.memberName.split(' ')[0]} {item.memberName.split(' ')[1] || ''}
                    </span>
                    <div className="flex items-center gap-1.5 text-stone-400">
                      <span>{item.period}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-stone-300 font-medium">{item.status}</span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-editorial font-bold text-stone-100 group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Short Summary */}
                  <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed">
                    {item.shortSummary}
                  </p>

                  {/* Crimes Highlight List */}
                  <div className="pt-2 text-[11px] text-stone-400 space-y-1">
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-500">
                      Tipificação Apurada:
                    </div>
                    <div className="text-stone-300 line-clamp-2">
                      {item.crimesList[0]}
                    </div>
                  </div>
                </div>

                {/* Footer with Expand Action */}
                <div className="pt-5 mt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <div className="text-[11px] text-stone-500 truncate max-w-[160px]">
                    {item.investigativeBody.split('&')[0]}
                  </div>
                  <button
                    onClick={() => setActiveItemModal(item)}
                    className="inline-flex items-center gap-1 text-amber-400 font-semibold hover:text-amber-300 transition-colors py-1 group/btn"
                  >
                    <span>Ver Provas & Despachos</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Modal / Detail Drawer for In-depth Case Analysis */}
      {activeItemModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveItemModal(null)}
        >
          <div 
            className="bg-[#0e1713] border border-stone-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-stone-100 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-stone-800 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                  <span>{activeItemModal.memberName}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-400">{activeItemModal.memberRole}</span>
                </div>
                <h3 className="text-2xl font-editorial font-bold text-white">
                  {activeItemModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItemModal(null)}
                className="p-1.5 text-stone-400 hover:text-white bg-stone-900 border border-stone-800"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Unboxed Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-b border-stone-800 text-xs">
              <div>
                <span className="text-stone-500 uppercase tracking-wider block text-[10px]">Status Jurídico</span>
                <span className="font-medium text-amber-300">{activeItemModal.status}</span>
              </div>
              <div>
                <span className="text-stone-500 uppercase tracking-wider block text-[10px]">Período</span>
                <span className="font-medium text-stone-200">{activeItemModal.period}</span>
              </div>
              <div className="col-span-2">
                <span className="text-stone-500 uppercase tracking-wider block text-[10px]">Órgão Conduzindo</span>
                <span className="font-medium text-stone-200">{activeItemModal.investigativeBody}</span>
              </div>
            </div>

            {/* Procedural ID */}
            {activeItemModal.legalProcessId && (
              <div className="p-3 bg-stone-950 border border-stone-800 text-xs flex items-center justify-between">
                <span className="text-stone-400">Identificação Processual / Inquérito:</span>
                <span className="font-mono text-amber-400 font-semibold">{activeItemModal.legalProcessId}</span>
              </div>
            )}

            {/* Detailed Facts */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Descrição dos Fatos Documentados</span>
              </h4>
              <p className="text-sm text-stone-200 leading-relaxed font-normal">
                {activeItemModal.fullDetails}
              </p>
            </div>

            {/* Legal Classifications */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-amber-400" />
                <span>Tipificações Penais e Imputações Formais</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {activeItemModal.crimesList.map((crime, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{crime}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evidence Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Provas Materiais e Relatórios Periciais</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300 bg-stone-950/80 p-3.5 border border-stone-800">
                {activeItemModal.evidenceHighlights.map((ev, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sources */}
            <div className="pt-3 border-t border-stone-800 text-xs text-stone-400 space-y-1">
              <span className="font-semibold text-stone-300">Fontes Oficiais & Arquivos:</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-stone-400">
                {activeItemModal.sources.map((src, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-amber-400" />
                    <span>{src}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveItemModal(null)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-stone-800 hover:bg-stone-700 text-white border border-stone-600 transition-colors"
              >
                Fechar Detalhes
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
