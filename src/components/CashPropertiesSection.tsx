import React from 'react';
import { Banknote, Building2, MapPin, AlertCircle, FileSearch } from 'lucide-react';
import { CASH_PROPERTY_STATS } from '../data/dossierData.ts';

export const CashPropertiesSection: React.FC = () => {
  const propertyCities = [
    { city: 'Rio de Janeiro (Capital)', count: '19 imóveis', desc: 'Barra da Tijuca, Tijuca, Bento Ribeiro, Copacabana e Vila Isabel' },
    { city: 'Brasília (DF)', count: '5 imóveis', desc: 'Mansão de R$ 6M do Senador Flávio e apartamentos no Sudoeste' },
    { city: 'Vale do Ribeira (SP)', count: '14 imóveis', desc: 'Miracatu e Eldorado (comércios e sítios de familiares e irmão)' },
    { city: 'Litoral Fluminense (RJ)', count: '13 imóveis', desc: 'Casa na praia de Mambucaba em Angra dos Reis, Resende e Saquarema' }
  ];

  return (
    <section id="imoveis" className="py-16 lg:py-24 bg-[#060c09] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-2">
            <Banknote className="w-4 h-4" />
            <span>Investigação Cartorária UOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight text-balance">
            O Escândalo dos 51 Imóveis Pagos em Dinheiro Vivo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
            Um levantamento documental em dezenas de cartórios de notas revelou que quase metade do patrimônio imobiliário adquirido pelo clã Bolsonaro ao longo de três décadas foi quitado com notas em espécie, prática típica de lavagem de dinheiro.
          </p>
        </div>

        {/* 4 Quantitative Rigor Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CASH_PROPERTY_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#0e1713] border border-stone-800 p-6 flex flex-col justify-between hover:border-amber-500/50 transition-colors"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-2">
                  {stat.title}
                </span>
                <span className="text-3xl font-monument font-bold text-amber-400 tabular-nums">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-4 leading-relaxed border-t border-stone-800/80 pt-3">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Dive Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Geographical Distribution */}
          <div className="lg:col-span-7 bg-[#0b1410] border border-stone-800 p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-editorial font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>Distribuição Geográfica das Aquisições em Espécie</span>
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              As compras em dinheiro vivo não foram casos isolados, mas um método contínuo e disseminado entre Jair, seus três filhos mais velhos, suas duas ex-esposas e seu irmão:
            </p>

            <div className="space-y-4">
              {propertyCities.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between border-b border-stone-800/80 pb-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-stone-100">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item.city}</span>
                    </div>
                    <div className="text-stone-400 text-[11px] pl-5">{item.desc}</div>
                  </div>
                  <div className="font-monument font-bold text-amber-400 whitespace-nowrap pl-4">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-stone-400 flex items-center gap-2">
              <FileSearch className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Fonte: Levantamento de 1.105 páginas de escrituras públicas em cartórios pelo portal UOL (2022).</span>
            </div>
          </div>

          {/* The Method and Legal Inconsistencies */}
          <div className="lg:col-span-5 bg-[#0e1713] border border-stone-800 p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-editorial font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span>Por que Comprar com Dinheiro Vivo?</span>
            </h3>

            <div className="space-y-4 text-xs text-stone-300 leading-relaxed">
              <div className="p-3.5 bg-stone-950 border border-stone-800 space-y-1">
                <span className="font-semibold text-amber-300 block">1. Ocultação de Origem</span>
                <p>
                  Transações em cédulas dificultam o rastreamento bancário pelo COAF e Receita Federal, impedindo que se comprove se o dinheiro partiu de salários confiscados de assessores fantasmas (rachadinhas).
                </p>
              </div>

              <div className="p-3.5 bg-stone-950 border border-stone-800 space-y-1">
                <span className="font-semibold text-amber-300 block">2. Incompatibilidade de Renda</span>
                <p>
                  Os salários de deputados e vereadores da família não justificavam a acumulação de dezenas de imóveis, lojas e mansões sem contração de financiamentos de mercado comuns.
                </p>
              </div>

              <div className="p-3.5 bg-stone-950 border border-stone-800 space-y-1">
                <span className="font-semibold text-amber-300 block">3. O Clã e a Moeda Corrente</span>
                <p>
                  Quando confrontado por jornalistas durante a campanha eleitoral, Jair Bolsonaro não negou as operações e declarou publicamente: <em>&quot;Qual é o problema de comprar imóvel com dinheiro vivo?&quot;</em>.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
