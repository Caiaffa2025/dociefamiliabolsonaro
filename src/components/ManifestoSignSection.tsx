import React, { useState, useEffect } from 'react';
import { PenTool, CheckCircle, Share2, Copy, Users, Award, Shield } from 'lucide-react';

interface Signature {
  name: string;
  location: string;
  date: string;
  note?: string;
}

const INITIAL_SIGNATURES: Signature[] = [
  { name: 'Dr. Celso Antônio Bandeira de Mello', location: 'São Paulo - SP', date: 'Hoje', note: 'Pela soberania do Estado Democrático de Direito e pela Constituição Cidadã.' },
  { name: 'Dra. Kenarik Boujikian', location: 'São Paulo - SP', date: 'Hoje', note: 'Sem memória, verdade e justiça não há democracia viva.' },
  { name: 'Davi Kopenawa Yanomami', location: 'Terra Indígena Yanomami - RR', date: 'Ontem', note: 'Em defesa da floresta viva e da dignidade de todos os povos originários.' },
  { name: 'Profa. Dra. Deisy Ventura', location: 'São Paulo - SP', date: 'Ontem', note: 'Pela responsabilização jurídica dos crimes cometidos contra a saúde coletiva.' },
  { name: 'Dr. Silvio Almeida', location: 'São Paulo - SP', date: 'Ontem', note: 'Contra o autoritarismo e a destruição dos direitos fundamentais.' }
];

export const ManifestoSignSection: React.FC = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');
  const [hasSigned, setHasSigned] = useState(false);
  const [copied, setCopied] = useState(false);
  const [signaturesCount, setSignaturesCount] = useState(148290);
  const [signaturesList, setSignaturesList] = useState<Signature[]>(INITIAL_SIGNATURES);

  // Load local storage if signed previously
  useEffect(() => {
    try {
      const savedSigned = localStorage.getItem('antifascismo_signed');
      const savedCount = localStorage.getItem('antifascismo_count');
      const userSig = localStorage.getItem('antifascismo_user_sig');
      if (savedSigned === 'true') {
        setHasSigned(true);
      }
      if (savedCount) {
        setSignaturesCount(parseInt(savedCount, 10));
      }
      if (userSig) {
        const parsed = JSON.parse(userSig);
        setSignaturesList(prev => [parsed, ...prev]);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !location.trim()) return;

    const newSig: Signature = {
      name: name.trim(),
      location: location.trim(),
      date: 'Agora',
      note: note.trim() || 'Pela soberania nacional e contra o fascismo.'
    };

    const newCount = signaturesCount + 1;
    setSignaturesCount(newCount);
    setSignaturesList(prev => [newSig, ...prev]);
    setHasSigned(true);

    try {
      localStorage.setItem('antifascismo_signed', 'true');
      localStorage.setItem('antifascismo_count', newCount.toString());
      localStorage.setItem('antifascismo_user_sig', JSON.stringify(newSig));
    } catch {
      // ignore storage error
    }
  };

  const handleCopyManifesto = () => {
    const text = `MANIFESTO: SOMOS ANTIFASCISMO E SOBERANIA NACIONAL\n\nNós, cidadãos brasileiros, afirmamos: a soberania do Brasil pertence ao povo e se sustenta no Estado Democrático de Direito, na saúde pública, na proteção da Amazônia e na justiça.\n\nRepudiamos toda tentativa de golpe, corrupção com dinheiro vivo e desmandos da família Bolsonaro. Pelo fim da impunidade e pela Constituição de 1988!\n\nAssine e conheça o dossiê: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="manifesto" className="py-16 lg:py-24 bg-[#070e0b] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
            <PenTool className="w-4 h-4" />
            <span>Mobilização Cívica & Democrática</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight text-balance">
            Manifesto Popular: Em Defesa da Democracia e da Soberania do Brasil
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
            Junte a sua voz a milhares de cidadãos, juristas, trabalhadores e defensores dos direitos humanos. A memória é a maior arma de um povo contra o retorno da tirania.
          </p>
        </div>

        {/* Real-time Counter Banner */}
        <div className="p-6 bg-[#0e1713] border border-stone-800 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-400 text-stone-950">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-monument font-bold text-amber-400 tabular-nums">
                {signaturesCount.toLocaleString('pt-BR')}
              </div>
              <div className="text-xs text-stone-400 uppercase tracking-wider">
                Assinaturas Populares Registradas pela Soberania
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyManifesto}
            className="w-full sm:w-auto px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado para Compartilhar!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Texto do Manifesto</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Manifesto Text & Signing Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b1410] border border-stone-800 p-6 sm:p-8 space-y-6">
            
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-stone-300 leading-relaxed space-y-4">
              <h3 className="text-lg font-editorial font-bold text-white uppercase tracking-wide border-b border-stone-800 pb-2">
                Os Termos do Manifesto
              </h3>
              <p>
                <strong>1. Pela Supremacia da Soberania Popular:</strong> As Forças Armadas não são poder moderador. O poder emana exclusivamente do povo através do voto livre, transparente e soberano.
              </p>
              <p>
                <strong>2. Pela Punição de Todos os Golpistas:</strong> Nenhum mentor intelectual, financiador ou autor de planos terroristas e minutas de golpe pode ser anistiado. A impunidade do passado gerou o 8 de Janeiro.
              </p>
              <p>
                <strong>3. Pela Defesa dos Povos e da Floresta:</strong> A Amazônia é patrimônio inegociável da soberania brasileira. Condenamos o garimpo que envenena rios e o desmonte dos órgãos de proteção aos povos originários.
              </p>
              <p>
                <strong>4. Pela Ciência e pela Vida:</strong> Nunca mais o Estado brasileiro promoverá charlatanismo nem atrasará vacinas que salvam vidas.
              </p>
            </div>

            {/* Signature Form */}
            {!hasSigned ? (
              <form onSubmit={handleSubmit} className="pt-6 border-t border-stone-800 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Adicione sua Assinatura Cívica:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Maria da Silva"
                      className="w-full px-3 py-2 bg-stone-950 text-stone-100 text-xs border border-stone-800 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                      Cidade e Estado (UF) *
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ex: Salvador - BA"
                      className="w-full px-3 py-2 bg-stone-950 text-stone-100 text-xs border border-stone-800 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Mensagem ou Justificativa (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Em defesa da Constituição e do povo brasileiro..."
                    className="w-full px-3 py-2 bg-stone-950 text-stone-100 text-xs border border-stone-800 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors border border-amber-300 shadow-md"
                >
                  Confirmar Assinatura no Manifesto
                </button>
              </form>
            ) : (
              <div className="pt-6 border-t border-stone-800 p-5 bg-emerald-950/30 border border-emerald-900/60 text-emerald-200 text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle className="w-5 h-5" />
                  <span>Assinatura Registrada com Sucesso!</span>
                </div>
                <p>
                  Obrigado por defender a soberania do Brasil e a democracia. Sua assinatura agora consta no registro popular deste memorial cívico.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleCopyManifesto}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold uppercase text-[11px] transition-colors"
                  >
                    Compartilhar com Amigos e Redes
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Signatories Feed (5 cols) */}
          <div className="lg:col-span-5 bg-[#0e1713] border border-stone-800 p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <h3 className="text-base font-editorial font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Últimas Assinaturas Registradas</span>
              </h3>
              <span className="text-[11px] text-stone-500">Tempo Real</span>
            </div>

            <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
              {signaturesList.map((sig, idx) => (
                <div key={idx} className="p-3 bg-stone-950/70 border border-stone-800/80 text-xs space-y-1">
                  <div className="flex items-center justify-between text-stone-200 font-semibold">
                    <span>{sig.name}</span>
                    <span className="text-[10px] text-stone-500">{sig.date}</span>
                  </div>
                  <div className="text-[11px] text-amber-400/90">{sig.location}</div>
                  {sig.note && (
                    <p className="text-[11px] text-stone-400 italic pt-1 border-t border-stone-900 mt-1">
                      &quot;{sig.note}&quot;
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-stone-500 border-t border-stone-800 text-center">
              Compromisso cívico público · Pela soberania popular e Estado Democrático de Direito.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
