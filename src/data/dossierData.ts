export interface DossierItem {
  id: string;
  familyMember: 'jair' | 'flavio' | 'carlos' | 'eduardo' | 'jair_renan' | 'michelle' | 'parentes';
  memberName: string;
  memberRole: string;
  title: string;
  period: string;
  category: 'democracia' | 'corrupcao' | 'saude' | 'meio_ambiente' | 'espionagem' | 'patrimonio';
  status: 'Indiciado pela PF' | 'Em Julgamento / STF' | 'Inelegível (TSE)' | 'Condenado / Rito Judicial' | 'Investigação Concluída' | 'Apurado em CPI';
  investigativeBody: string;
  legalProcessId?: string;
  shortSummary: string;
  fullDetails: string;
  crimesList: string[];
  evidenceHighlights: string[];
  sources: string[];
}

export interface FamilyMemberMeta {
  id: 'all' | 'jair' | 'flavio' | 'carlos' | 'eduardo' | 'jair_renan' | 'michelle' | 'parentes';
  label: string;
  fullName: string;
  relation: string;
  count: number;
}

export const FAMILY_MEMBERS_META: FamilyMemberMeta[] = [
  { id: 'all', label: 'Todos os Envolvidos', fullName: 'Clã Bolsonaro Completo', relation: 'Visão Geral', count: 18 },
  { id: 'jair', label: 'Jair Bolsonaro', fullName: 'Jair Messias Bolsonaro', relation: 'Pai · Ex-Presidente', count: 6 },
  { id: 'flavio', label: 'Flávio (01)', fullName: 'Flávio Nantes Bolsonaro', relation: 'Filho 01 · Senador', count: 3 },
  { id: 'carlos', label: 'Carlos (02)', fullName: 'Carlos Nantes Bolsonaro', relation: 'Filho 02 · Vereador RJ', count: 3 },
  { id: 'eduardo', label: 'Eduardo (03)', fullName: 'Eduardo Nantes Bolsonaro', relation: 'Filho 03 · Dep. Federal', count: 2 },
  { id: 'jair_renan', label: 'Jair Renan (04)', fullName: 'Jair Renan Valle Bolsonaro', relation: 'Filho 04 · Empresário/Político', count: 1 },
  { id: 'michelle', label: 'Michelle Bolsonaro', fullName: 'Michelle de Paula Firmo Reinaldo Bolsonaro', relation: 'Esposa · Ex-Primeira-Dama', count: 2 },
  { id: 'parentes', label: 'Irmão e Ex-Esposas', fullName: 'Renato Bolsonaro & Ana Cristina Valle', relation: 'Parentes Próximos', count: 2 }
];

export const DOSSIER_ITEMS: DossierItem[] = [
  {
    id: 'golpe-estado',
    familyMember: 'jair',
    memberName: 'Jair Messias Bolsonaro',
    memberRole: 'Ex-Presidente da República',
    title: 'Tentativa de Golpe de Estado e Abolição Violenta do Estado Democrático de Direito',
    period: '2022 - 2024',
    category: 'democracia',
    status: 'Indiciado pela PF',
    investigativeBody: 'Polícia Federal & Supremo Tribunal Federal (STF)',
    legalProcessId: 'PET 12100 / Inq 4874 / Operação Tempus Veritatis',
    shortSummary: 'A Polícia Federal indiciou formalmente Jair Bolsonaro e generais por liderar organização criminosa voltada a manter o poder à força após a derrota nas urnas em 2022.',
    fullDetails: 'Investigação minuciosa comprovou a redação e ajustes na chamada "Minuta do Golpe", reuniões conspiratórias no Palácio da Alvorada com comandantes das Forças Armadas para decretar Estado de Sítio e Operação de Garantia da Lei e da Ordem (GLO), monitoramento clandestino de ministros do STF e incentivo direto a tumultos e bloqueios de rodovias.',
    crimesList: [
      'Tentativa de abolição violenta do Estado Democrático de Direito (Art. 359-L do Código Penal)',
      'Golpe de Estado (Art. 359-M do Código Penal)',
      'Organização criminosa armada (Lei 12.850/2013)'
    ],
    evidenceHighlights: [
      'Documento da Minuta Golpista apreendido com alterações analisadas pelo núcleo presidencial',
      'Registros de reuniões com comandantes das Forças Armadas no Alvorada em novembro e dezembro de 2022',
      'Confissões e mensagens periciadas no celular do tenente-coronel Mauro Cid',
      'Plano clandestino "Punhal Verde e Amarelo" arquitetado por militares próximos ao gabinete presidencial'
    ],
    sources: ['Relatório Final da Polícia Federal (PET 12100/STF)', 'Depoimentos de comandantes Freire Gomes e Carlos Baptista Jr.', 'CPMI dos Atos Golpistas']
  },
  {
    id: 'joias-sauditas',
    familyMember: 'jair',
    memberName: 'Jair Messias Bolsonaro',
    memberRole: 'Ex-Presidente da República',
    title: 'Contrabando e Apropriação Ilícita de Joias de Estado (Caso das Joias)',
    period: '2021 - 2024',
    category: 'corrupcao',
    status: 'Indiciado pela PF',
    investigativeBody: 'Polícia Federal & Tribunal de Contas da União (TCU)',
    legalProcessId: 'Inq 4874 (Pet Joias) / STF',
    shortSummary: 'Desvio de presentes diplomáticos milionários dados ao Estado brasileiro pela Arábia Saudita e Bahrein, que foram comercializados ilegalmente nos Estados Unidos.',
    fullDetails: 'Kits de joias compostos por relógios Rolex, Patek Philippe, canetas Chopard e esculturas banhadas a ouro foram surrupiados do acervo público. O ajudante de ordens Mauro Cid e assessores viajaram aos EUA para leiloar e vender as peças. Após determinação do TCU para devolução dos itens, assessores realizaram uma "operação resgate" clandestina para recomprar um relógio Rolex nos EUA.',
    crimesList: [
      'Peculato (Art. 312 do Código Penal)',
      'Associação criminosa (Art. 288 do Código Penal)',
      'Lavagem de dinheiro (Lei 9.613/1998)'
    ],
    evidenceHighlights: [
      'Comprovante bancário de depósito de US$ 68 mil na conta de Mauro Lourena Cid (general e pai de Mauro Cid)',
      'Recibo de recompra do Rolex em shopping na Pensilvânia pelo advogado Frederick Wassef',
      'Tentativas documentadas de militares pressionando auditores da Receita Federal em Guarulhos para liberar estojo retido'
    ],
    sources: ['Relatório de Indiciamento da PF nº 115/2024', 'Processo do Tribunal de Contas da União TC 003.856/2023-0']
  },
  {
    id: 'fraude-cartoes-vacina',
    familyMember: 'jair',
    memberName: 'Jair Messias Bolsonaro',
    memberRole: 'Ex-Presidente da República',
    title: 'Adulteração de Cartões de Vacinação da Covid-19 no Sistema do SUS',
    period: '2021 - 2024',
    category: 'saude',
    status: 'Indiciado pela PF',
    investigativeBody: 'Polícia Federal & Ministério Público Federal',
    legalProcessId: 'Operação Venire / STF',
    shortSummary: 'Inserção criminosa de registros falsos de doses de vacina contra a Covid-19 nos sistemas do Ministério da Saúde para viabilizar viagem aos Estados Unidos.',
    fullDetails: 'Para driblar as exigências sanitárias de imigração dos Estados Unidos em dezembro de 2022 (quando viajou para Orlando na véspera da posse), o núcleo do ex-presidente manipulou o Sistema de Informações do Programa Nacional de Imunizações (SI-PNI), emitindo certificados ideologicamente falsos de vacinação para Jair Bolsonaro e sua filha menor.',
    crimesList: [
      'Inserção de dados falsos em sistema de informações (Art. 313-A do Código Penal)',
      'Associação criminosa (Art. 288 do Código Penal)',
      'Falsidade ideológica e corrupção de menores'
    ],
    evidenceHighlights: [
      'Logs da rede do SUS comprovando inserções e exclusões das doses falsas de Duque de Caxias (RJ)',
      'Mensagens interceptadas de Mauro Cid combinando com o deputado Gutemberg Reis e secretários municipais',
      'Certificados impressos no Palácio do Planalto minutos antes do embarque presidencial'
    ],
    sources: ['Relatório da Operação Venire (PF)', 'Despacho do Ministro Alexandre de Moraes no STF']
  },
  {
    id: 'cpi-pandemia-mortes',
    familyMember: 'jair',
    memberName: 'Jair Messias Bolsonaro',
    memberRole: 'Ex-Presidente da República',
    title: 'Gestão Criminosa da Pandemia e Boicote às Vacinas (700 Mil Mortes)',
    period: '2020 - 2021',
    category: 'saude',
    status: 'Apurado em CPI',
    investigativeBody: 'Comissão Parlamentar de Inquérito (CPI da Pandemia / Senado Federal)',
    legalProcessId: 'Relatório Final da CPI da Pandemia (Aprovado em 26/10/2021)',
    shortSummary: 'Adoção intencional da tese de "imunidade de rebanho por contaminação", atraso na compra de vacinas da Pfizer e CoronaVac, e sabotagem a medidas sanitárias.',
    fullDetails: 'A CPI comprovou que o governo ignorou dezenas de e-mails da Pfizer com ofertas de vacinas a preço promocional, promoveu o "tratamento precoce" ineficaz com cloroquina e ivermectina mesmo após alertas da OMS, incentivou aglomerações e desestimulou o uso de máscaras. No auge da crise de oxigênio em Manaus, enviou equipes para propagar remédios sem eficácia em vez de cilindros.',
    crimesList: [
      'Epidemia com resultado de morte (Art. 267, § 1º, do Código Penal)',
      'Infração de medida sanitária preventiva (Art. 268)',
      'Charlatanismo e curandeirismo (Art. 283 e 284)',
      'Prevaricação (Art. 319)',
      'Crimes contra a humanidade (Estatuto de Roma / Tribunal de Haia)'
    ],
    evidenceHighlights: [
      '81 e-mails da farmacêutica Pfizer deixados sem resposta oficial durante meses',
      'Gastos milionários do Ministério da Saúde com compras em massa de cloroquina pelo Laboratório do Exército',
      'Testemunhos de cientistas e dados da Fiocruz apontando que centenas de milhares de mortes poderiam ter sido evitadas'
    ],
    sources: ['Relatório Oficial da CPI da Pandemia (1.299 páginas, Senado Federal)', 'Estudos epidemiológicos da Fiocruz e USP']
  },
  {
    id: 'inelegibilidade-tse',
    familyMember: 'jair',
    memberName: 'Jair Messias Bolsonaro',
    memberRole: 'Ex-Presidente da República',
    title: 'Condenação por Abuso de Poder Político e Inelegibilidade até 2030',
    period: '2022 - 2023',
    category: 'democracia',
    status: 'Inelegível (TSE)',
    investigativeBody: 'Tribunal Superior Eleitoral (TSE)',
    legalProcessId: 'Ação de Investigação Judicial Eleitoral (AIJE) 0600814-85.2022.6.00.0000',
    shortSummary: 'Condenado a 8 anos de inelegibilidade por usar a estrutura do Palácio da Alvorada e a TV Brasil para disseminar mentiras sobre o sistema eleitoral a embaixadores estrangeiros.',
    fullDetails: 'Em julho de 2022, Bolsonaro convocou dezenas de embaixadores estrangeiros para atacar o sistema eletrônico de votação, utilizando telões com desinformações já desmentidas pelo TSE. O tribunal concluiu que houve desvio de finalidade, violação do dever de neutralidade do Estado e ataque frontal à soberania do voto democrático.',
    crimesList: [
      'Abuso de poder político (Art. 22 da Lei Complementar nº 64/1990)',
      'Uso indevido dos meios de comunicação social públicos'
    ],
    evidenceHighlights: [
      'Gravação oficial transmitida pela TV Brasil pública e redes sociais institucionais',
      'Pareceres de perícia da Polícia Federal confirmando a higidez e inviolabilidade das urnas eletrônicas',
      'Voto condutor do ministro Benedito Gonçalves aprovado por ampla maioria no plenário do TSE'
    ],
    sources: ['Acórdão do Tribunal Superior Eleitoral (TSE, sessão de 30/06/2023)']
  },
  {
    id: 'crise-yanomami-ibama',
    familyMember: 'jair',
    memberName: 'Jair Messias Bolsonaro',
    memberRole: 'Ex-Presidente da República',
    title: 'Genocídio Yanomami e Desmonte da Fiscalização Ambiental na Amazônia',
    period: '2019 - 2023',
    category: 'meio_ambiente',
    status: 'Investigação Concluída',
    investigativeBody: 'Polícia Federal, Ministério Público Federal & TPI Haia',
    legalProcessId: 'Inquérito Civil Público MPF/RR / Petição no TPI',
    shortSummary: 'Paralisação das multas do IBAMA e ICMBio que provocou invasão em massa de 20 mil garimpeiros ilegais na Terra Indígena Yanomami, gerando fome e morte de centenas de crianças.',
    fullDetails: 'Sob comando de seu ministro Ricardo Salles e diretrizes do Planalto de "passar a boiada", o governo desarmou as forças de repressão ambiental, cortou 93% dos investimentos em ações de proteção territorial indígena e asfixiou serviços básicos de saúde aos Yanomami, contaminando rios com mercúrio e provocando desnutrição terminal.',
    crimesList: [
      'Genocídio de povos originários (Lei 2.889/1956)',
      'Omissão de socorro com resultado morte',
      'Prevaricação e crime ambiental contínuo (Lei 9.605/1998)'
    ],
    evidenceHighlights: [
      'Morte comprovada de 570 crianças Yanomami por desnutrição e causas evitáveis entre 2019 e 2022',
      '21 ofícios de alerta de socorro enviados por lideranças da Hutukara Associação Yanomami ignorados pelo governo',
      'Redução em mais de 70% das autuações e destruição de maquinário ilegal do garimpo'
    ],
    sources: ['Dossiê "Yanomami Sob Ataque" (Hutukara Associação)', 'Relatório do Ministério da Saúde de Jan/2023', 'Ação no STF ADPF 709']
  },
  {
    id: 'rachadinha-flavio-alerj',
    familyMember: 'flavio',
    memberName: 'Flávio Nantes Bolsonaro',
    memberRole: 'Senador da República (ex-Deputado Estadual)',
    title: 'Esquema das "Rachadinhas" na ALERJ e Operador Fabrício Queiroz',
    period: '2007 - 2018 (Revelado em 2018)',
    category: 'corrupcao',
    status: 'Em Julgamento / STF',
    investigativeBody: 'Ministério Público do Estado do Rio de Janeiro (MP-RJ)',
    legalProcessId: 'Procedimento Investigatório Criminal MPRJ nº 2019.00057410',
    shortSummary: 'Apropriação sistemática de salários de dezenas de servidores do gabinete de Flávio Bolsonaro na Assembleia Legislativa do Rio, movimentando milhões em dinheiro vivo.',
    fullDetails: 'Relatório do COAF identificou que o assessor Fabrício Queiroz movimentou R$ 1,2 milhão de maneira atípica, recebendo depósitos regulares de salários de assessores que não trabalhavam na ALERJ (incluindo vizinhos, familiares e parentes de milicianos) e sacando dinheiro em espécie para custear despesas de Flávio.',
    crimesList: [
      'Peculato (Art. 312 do Código Penal)',
      'Lavagem de dinheiro (Lei 9.613/1998)',
      'Organização criminosa (Lei 12.850/2013)'
    ],
    evidenceHighlights: [
      'Relatório de Inteligência Financeira do COAF detalhando 483 depósitos suspeitos',
      '48 depósitos em dinheiro vivo de R$ 2.000 cada feitos na conta de Flávio em apenas um mês em agência bancária da ALERJ',
      'Pagamento de mensalidades escolares dos filhos de Flávio em dinheiro vivo por Fabrício Queiroz'
    ],
    sources: ['Denúncia do MP-RJ perante o Tribunal de Justiça do Rio', 'Relatórios do COAF (Operação Furna da Onça)']
  },
  {
    id: 'loja-chocolate-lavagem',
    familyMember: 'flavio',
    memberName: 'Flávio Nantes Bolsonaro',
    memberRole: 'Senador da República',
    title: 'Lavagem de Dinheiro na Franquia Bolsotini Chocolates (Barra Shopping)',
    period: '2015 - 2019',
    category: 'corrupcao',
    status: 'Investigação Concluída',
    investigativeBody: 'Ministério Público do Rio de Janeiro',
    legalProcessId: 'Apenso do Caso Rachadinha MP-RJ',
    shortSummary: 'Uso de uma loja de chocolates para lavar R$ 1,6 milhão em dinheiro vivo oriundo do esquema de rachadinhas da ALERJ.',
    fullDetails: 'Perícia contábil do MP-RJ demonstrou que a franquia de chocolates Kopenhagen pertencente a Flávio Bolsonaro recebia depósitos desproporcionais em cédulas nos mesmos dias em que Queiroz sacava valores dos servidores da ALERJ. A loja apresentava volume de vendas em dinheiro vivo infinitamente superior a todas as outras franquias da rede.',
    crimesList: [
      'Lavagem de capitais (Art. 1º da Lei 9.613/1998)',
      'Sonegação fiscal e falsidade documental'
    ],
    evidenceHighlights: [
      'Depósitos de até R$ 20 mil em espécie fracionados nas contas da empresa em dias sem movimento correspondente',
      'Discrepância comprovada entre o estoque de bombons vendidos e o faturamento declarado em dinheiro vivo',
      'Distribuição atípica de lucros inflada para o casal Flávio e Fernanda Bolsonaro'
    ],
    sources: ['Relatório de Perícia Contábil do Laboratório de Lavagem de Dinheiro do MP-RJ']
  },
  {
    id: 'mansao-6-milhoes-flavio',
    familyMember: 'flavio',
    memberName: 'Flávio Nantes Bolsonaro',
    memberRole: 'Senador da República',
    title: 'Compra da Mansão de R$ 6 Milhões com Empréstimo Especial do BRB',
    period: '2021',
    category: 'patrimonio',
    status: 'Investigação Concluída',
    investigativeBody: 'Ministério Público do DF & Territórios (MPDFT)',
    legalProcessId: 'Representações no MPF e TCU',
    shortSummary: 'Aquisição de mansão de luxo em condomínio de Brasília por R$ 6 milhões com financiamento no banco estatal BRB incompatível com seu salário líquido.',
    fullDetails: 'Flávio comprou uma mansão de 2.500 m² no Setor de Mansões Dom Bosco por R$ 5,97 milhões. Para custear o imóvel, obteve um financiamento de R$ 3,1 milhões no Banco de Brasília (BRB) com taxas privilegiadas e parcela inicial de R$ 18 mil, consumindo percentual de renda que ultrapassa os parâmetros ordinários de crédito do banco público.',
    crimesList: [
      'Advocacia administrativa',
      'Uso de influência política em instituição financeira estatal',
      'Incompatibilidade de evolução patrimonial'
    ],
    evidenceHighlights: [
      'Escritura pública lavrada em cartório de Brazlândia (cidade satélite a 50 km de Brasília)',
      'Subavaliação da renda familiar exigida no parecer interno de concessão de crédito do BRB',
      'Presidente do BRB nomeado com forte articulação política da bancada governista'
    ],
    sources: ['Escritura do 1º Cartório de Registro de Imóveis do DF', 'Reportagens investigativas The Intercept Brasil e Folha de S.Paulo']
  },
  {
    id: 'abin-paralela-carlos',
    familyMember: 'carlos',
    memberName: 'Carlos Nantes Bolsonaro',
    memberRole: 'Vereador do Rio de Janeiro',
    title: 'Operação Vigilância Aproximada: O Esquema Clandestino da "Abin Paralela"',
    period: '2019 - 2024',
    category: 'espionagem',
    status: 'Indiciado pela PF',
    investigativeBody: 'Polícia Federal & STF',
    legalProcessId: 'Inq 4874 / PET 12100 / Operação Vigilância Aproximada',
    shortSummary: 'Carlos Bolsonaro é apontado pela PF como um dos líderes políticos da instrumentalização criminosa da agência de inteligência para espionar desafetos e proteger a família.',
    fullDetails: 'Sob comando do deputado Alexandre Ramagem (indicado por Carlos e Jair), agentes da Abin utilizaram ilegalmente o programa espião FirstMile para monitorar a localização em tempo real de ministros do STF (Alexandre de Moraes e Gilmar Mendes), auditores da Receita Federal que investigavam as rachadinhas de Flávio, e jornalistas críticos ao clã.',
    crimesList: [
      'Interceptação telefônica e telemática clandestina sem autorização judicial (Lei 9.296/1996)',
      'Invasão de dispositivo informático qualificada (Art. 154-A do CP)',
      'Organização criminosa (Lei 12.850/2013)',
      'Prevaricação'
    ],
    evidenceHighlights: [
      'Computador da Abin apreendido em posse de assessora ligada ao gabinete de Carlos Bolsonaro',
      'Mais de 30 mil monitoramentos georreferenciados ilegais registrados no software FirstMile',
      'Mensagens da assessoria de Carlos solicitando informações sigilosas sobre inquéritos envolvendo a família'
    ],
    sources: ['Decisões judiciais de busca e apreensão da PF / STF', 'Relatório Técnico da Operação Vigilância Aproximada']
  },
  {
    id: 'gabinete-odio-carlos',
    familyMember: 'carlos',
    memberName: 'Carlos Nantes Bolsonaro',
    memberRole: 'Vereador do Rio de Janeiro',
    title: 'Comando do "Gabinete do Ódio" e Milícias Digitais de Desinformação',
    period: '2019 - 2022',
    category: 'democracia',
    status: 'Em Julgamento / STF',
    investigativeBody: 'Polícia Federal & STF',
    legalProcessId: 'Inquérito das Fake News (Inq 4781) & Milícias Digitais (Inq 4874)',
    shortSummary: 'Carlos Bolsonaro capitaneou a estrutura de comunicação paralela financiada com recursos públicos para difamar adversários, incitar ódio e desestabilizar os Três Poderes.',
    fullDetails: 'Assessores comissionados no Palácio do Planalto operavam uma rede coordenada de disparos em massa e páginas apócrifas nas redes sociais. A estrutura servia para promover ataques coordenados a cientistas durante a pandemia, descredibilizar a imprensa profissional e minar a confiança popular no processo eleitoral brasileiro.',
    crimesList: [
      'Calúnia, difamação e injúria sistemáticas',
      'Associação criminosa e atentado à paz pública',
      'Peculato por desvio de função de servidores públicos'
    ],
    evidenceHighlights: [
      'Depoimentos dos ex-ministros Santos Cruz e Gustavo Bebianno comprovando o modus operandi da sala no 3º andar do Planalto',
      'Relatórios das plataformas Meta (Facebook) e Twitter suspendendo redes coordenadas inautênticas ligadas a assessores diretos',
      'Perícia da PF ligando IPs de conexão do gabinete presidencial a perfis de ataques virtuais'
    ],
    sources: ['Inquérito 4874 do STF', 'Relatório da CPMI das Fake News do Congresso Nacional']
  },
  {
    id: 'rachadinha-carlos-camara-rj',
    familyMember: 'carlos',
    memberName: 'Carlos Nantes Bolsonaro',
    memberRole: 'Vereador do Rio de Janeiro',
    title: 'Investigação de Funcionários Fantasmas na Câmara Municipal do Rio de Janeiro',
    period: '2001 - 2021',
    category: 'corrupcao',
    status: 'Investigação Concluída',
    investigativeBody: 'Ministério Público do Estado do Rio de Janeiro (MP-RJ)',
    legalProcessId: 'PIC 2019.00624021 / 3ª Promotoria de Justiça de Defesa da Cidadania',
    shortSummary: 'Investigação apurou contratação de ao menos sete parentes e funcionários fantasmas que nunca bateram ponto na Câmara dos Vereadores e devolviam parte dos salários.',
    fullDetails: 'Entre os nomes contratados no gabinete de Carlos estava Ana Cristina Valle (sua madrasta), parentes de Fabrício Queiroz e a idosa Nadir Barbosa Góes, que morava a centenas de quilômetros da capital e declarou não saber que constava na folha salarial da Câmara do Rio por mais de uma década.',
    crimesList: [
      'Peculato (Art. 312 do CP)',
      'Lavagem de dinheiro (Art. 1º da Lei 9.613/98)',
      'Falsidade ideológica continuada'
    ],
    evidenceHighlights: [
      'Quebras de sigilo bancário e fiscal autorizadas pela 1ª Vara Especializada em Crime Organizado do RJ',
      'Saques em espécie concentrados logo após a compensação dos salários na conta de servidores',
      'Depoimentos de funcionários admitindo não prestar serviços no gabinete'
    ],
    sources: ['Documentos da 3ª Promotoria de Justiça do MP-RJ', 'Reportagens O Globo e Estadão']
  },
  {
    id: 'eduardo-conspiracao-internacional',
    familyMember: 'eduardo',
    memberName: 'Eduardo Nantes Bolsonaro',
    memberRole: 'Deputado Federal',
    title: 'Articulação com a Extrema-Direita Internacional e Ameaças de "Novo AI-5"',
    period: '2019 - 2023',
    category: 'democracia',
    status: 'Investigação Concluída',
    investigativeBody: 'Conselho de Ética da Câmara dos Deputados & Inquérito STF',
    legalProcessId: 'Representações nº 24/2019 / Inq 4874',
    shortSummary: 'Declarações explícitas de ruptura constitucional com o retorno do AI-5 e articulação direta com figuras da extrema-direita global ligadas à invasão do Capitólio.',
    fullDetails: 'Em entrevista gravada, Eduardo afirmou que "se a esquerda radicalizar, a gente vai ter que dar uma resposta, e essa resposta pode ser via um novo AI-5". Ele também atuou como principal elo da família com Steve Bannon, participou de conferências promovendo teses conspiratórias contra a soberania das urnas e viajou aos EUA antes do 8 de Janeiro.',
    crimesList: [
      'Apologia de crime ou ao autor de crime (Art. 287 do Código Penal)',
      'Incitação pública das Forças Armadas contra os poderes constitucionais',
      'Atentado contra o regime democrático'
    ],
    evidenceHighlights: [
      'Gravação em vídeo da declaração sobre o AI-5 em rede pública',
      'Registros de reuniões em Mar-a-Lago com ideólogos da conspiração do Capitólio',
      'Relatório da CPMI do 8 de Janeiro recomendando indiciamento por incitação à desordem democrática'
    ],
    sources: ['Relatório Final da CPMI dos Atos Golpistas', 'Atas da Mesa Diretora da Câmara dos Deputados']
  },
  {
    id: 'eduardo-crise-diplomatica-china',
    familyMember: 'eduardo',
    memberName: 'Eduardo Nantes Bolsonaro',
    memberRole: 'Deputado Federal',
    title: 'Ataques Xenofóbicos à Diplomacia Chinesa e Atraso de Insumos da Vacina',
    period: '2020 - 2021',
    category: 'saude',
    status: 'Investigação Concluída',
    investigativeBody: 'Ministério das Relações Exteriores & Comissão de Relações Exteriores',
    legalProcessId: 'Notas de Repúdio da Embaixada da China',
    shortSummary: 'Ataques irresponsáveis nas redes acusando a China de espionagem e culpando o país pela pandemia, prejudicando o envio de insumos essenciais de vacinas para o Brasil.',
    fullDetails: 'Como presidente da Comissão de Relações Exteriores da Câmara, Eduardo postou acusações infundadas comparando o governo chinês ao desastre de Chernobyl. A retaliação diplomática travou por semanas o envio do Insumo Farmacêutico Ativo (IFA) necessário para o Instituto Butantan e a Fiocruz produzirem dezenas de milhões de doses no auge da mortandade no país.',
    crimesList: [
      'Quebra de decoro parlamentar',
      'Afronta à soberania das relações diplomáticas e segurança sanitária nacional'
    ],
    evidenceHighlights: [
      'Carta de protesto do embaixador Yang Wanming classificando as falas como preconceituosas e danosas à soberania',
      'Cronograma do Instituto Butantan demonstrando o atraso na entrega de lotes de insumos da CoronaVac',
      'Intervenção de governadores estaduais para contornar a crise criada pela família presidencial'
    ],
    sources: ['Notas Oficiais da Embaixada da República Popular da China em Brasília', 'CPI da Pandemia']
  },
  {
    id: 'jair-renan-nexo-excecao',
    familyMember: 'jair_renan',
    memberName: 'Jair Renan Valle Bolsonaro',
    memberRole: 'Filho 04 de Jair Bolsonaro',
    title: 'Operação Nexo de Exceção: Falsidade Ideológica, Fraude Bancária e Lavagem',
    period: '2021 - 2024',
    category: 'corrupcao',
    status: 'Indiciado pela PF',
    investigativeBody: 'Polícia Civil do Distrito Federal (PCDF) & MPDFT',
    legalProcessId: 'Processo Judicial 0708945-84.2024.8.07.0001 (5ª Vara Criminal de Brasília)',
    shortSummary: 'Indiciado e denunciado por forjar o balanço financeiro de sua empresa (RB Eventos) com selos falsos para obter empréstimos bancários fraudulentos no Santander.',
    fullDetails: 'A investigação da PCDF comprovou que Jair Renan forjou faturamentos inexistentes de mais de R$ 4,6 milhões em sua empresa para conseguir linhas de crédito financeiro. Com a ajuda de um instrutor de tiro comparsa (Maciel Carvalho), os valores obtidos com o golpe foram blindados e dissipados sem quitação das dívidas.',
    crimesList: [
      'Uso de documento falso (Art. 304 do Código Penal)',
      'Falsidade ideológica (Art. 299 do Código Penal)',
      'Lavagem de dinheiro (Lei 9.613/1998)',
      'Crimes contra o sistema financeiro nacional'
    ],
    evidenceHighlights: [
      'Laudo pericial grafotécnico atestando a falsificação no balanço fiscal da RB Eventos',
      'Extratos bancários da conta da empresa demonstrando repasse e inadimplência deliberada do empréstimo de R$ 290 mil',
      'Busca e apreensão de aparelhos eletrônicos com trocas de mensagens confabulando o golpe'
    ],
    sources: ['Inquérito da Delegacia de Combate à Corrupção da PCDF', 'Denúncia formal oferecida pelo MPDFT']
  },
  {
    id: 'michelle-cheques-queiroz',
    familyMember: 'michelle',
    memberName: 'Michelle Bolsonaro',
    memberRole: 'Ex-Primeira-Dama',
    title: 'Recebimento de R$ 89 Mil em Cheques de Fabrício Queiroz e sua Esposa',
    period: '2011 - 2018',
    category: 'corrupcao',
    status: 'Investigação Concluída',
    investigativeBody: 'Ministério Público do Rio de Janeiro & COAF',
    legalProcessId: 'Relatórios Financeiros do COAF / Inquérito das Rachadinhas',
    shortSummary: 'Quebra de sigilo bancário revelou que Michelle recebeu 21 cheques de Fabrício Queiroz e 6 da esposa deste (Evelyn), totalizando R$ 89 mil depositados em sua conta.',
    fullDetails: 'Ao ser questionado pela imprensa em 2020 sobre o motivo de sua esposa ter recebido os valores do operador das rachadinhas, Jair Bolsonaro ameaçou fisicamente um jornalista ("Minha vontade é encher sua boca com uma porrada"). O governo alegou que seria o pagamento de um suposto empréstimo antigo, mas nunca apresentou nenhum comprovante de transferência original.',
    crimesList: [
      'Receptação e lavagem de capitais das rachadinhas',
      'Ocultação de patrimônio em conta pessoal'
    ],
    evidenceHighlights: [
      'Extratos bancários oficiais com a microfilmagem de todos os 27 cheques nominais a Michelle Bolsonaro',
      'Ausência total de declaração do suposto "empréstimo de R$ 40 mil" nas declarações de Imposto de Renda de Jair Bolsonaro',
      'Disparidade nas datas e valores que contradizem a justificativa pública'
    ],
    sources: ['Relatório do MP-RJ sobre as contas de Queiroz', 'Reportagens Folha de S.Paulo e Revista Crusoé']
  },
  {
    id: 'michelle-joias-chopard',
    familyMember: 'michelle',
    memberName: 'Michelle Bolsonaro',
    memberRole: 'Ex-Primeira-Dama',
    title: 'Apropriação e Desvio dos Kits de Joias Femininas Chopard',
    period: '2021 - 2023',
    category: 'corrupcao',
    status: 'Investigação Concluída',
    investigativeBody: 'Polícia Federal & Receita Federal',
    legalProcessId: 'PET Joias / STF',
    shortSummary: 'Segundo estojo de joias Chopard, avaliado em centenas de milhares de reais, entrou clandestinamente no Brasil com a comitiva e foi incorporado ao acervo pessoal.',
    fullDetails: 'O conjunto incluía colar, brincos e anel de diamantes e ouro branco da joalheria suíça Chopard. Enquanto um kit foi retido pela alfândega da Receita Federal em Guarulhos na mochila de um militar, um segundo estojo de joias masculinas e femininas entrou sem declaração e foi encaminhado ao Palácio da Alvorada e guardado em fazenda privada.',
    crimesList: [
      'Peculato de bens públicos (Art. 312 do Código Penal)',
      'Descaminho e contrabando de patrimônio diplomático'
    ],
    evidenceHighlights: [
      'Mensagens de áudio de Mauro Cid afirmando que os bens de alto valor seriam destinados à "dona Michelle"',
      'Termos de devolução forçada assinados pela defesa após descoberta da imprensa e decisão do TCU',
      'Depoimento do ex-ministro Bento Albuquerque confirmando que as joias eram destinadas à primeira-dama'
    ],
    sources: ['Inquérito da PF sobre as Joias Sauditas', 'Auditoria Especial da Receita Federal']
  },
  {
    id: 'ana-cristina-valle-mansao',
    familyMember: 'parentes',
    memberName: 'Ana Cristina Siqueira Valle',
    memberRole: 'Segunda ex-esposa de Jair Bolsonaro',
    title: 'Mansão de R$ 3 Milhões no Lago Sul e Rachadinhas do Gabinete',
    period: '2008 - 2022',
    category: 'patrimonio',
    status: 'Investigação Concluída',
    investigativeBody: 'Polícia Federal & MPDFT',
    legalProcessId: 'Inquérito 1699/2021 da Polícia Federal',
    shortSummary: 'A PF pediu abertura de inquérito sobre a compra de uma mansão de R$ 3 milhões no Lago Sul em Brasília e identificou movimentações financeiras incompatíveis.',
    fullDetails: 'Ana Cristina morou na mansão luxuosa avaliada em R$ 3,2 milhões em nome de um corretor de imóveis de fachada. Ela admitiu que participava da arrecadação de salários de parentes contratados nos gabinetes da família Bolsonaro no Rio e em Brasília ao longo de mais de 10 anos.',
    crimesList: [
      'Lavagem de dinheiro (Lei 9.613/1998)',
      'Uso de interposta pessoa (laranja)',
      'Evolução patrimonial sem lastro lícito'
    ],
    evidenceHighlights: [
      'Relatório de Inteligência Financeira do COAF apontando R$ 9,3 milhões em transações suspeitas',
      'Contrato simulado de aluguel para ocultar a real propriedade da mansão em bairro nobre de Brasília',
      'Depoimentos de Marcelo Luiz Nogueira dos Santos (ex-assessor da família) detalhando a entrega de envelopes com dinheiro vivo'
    ],
    sources: ['Relatório de Conclusão da PF enviado à 10ª Vara Federal de Brasília', 'Reportagens UOL e Metrópoles']
  },
  {
    id: 'renato-bolsonaro-fantasma',
    familyMember: 'parentes',
    memberName: 'Renato Antônio Bolsonaro',
    memberRole: 'Irmão de Jair Bolsonaro',
    title: 'Funcionário Fantasma na Assembleia Legislativa de São Paulo (ALESP)',
    period: '2013 - 2016',
    category: 'corrupcao',
    status: 'Investigação Concluída',
    investigativeBody: 'Ministério Público do Estado de São Paulo (MPSP)',
    legalProcessId: 'Inquérito Civil MPSP Comarca de Miracatu',
    shortSummary: 'Irmão de Bolsonaro recebia R$ 17 mil mensais como assessor especial da ALESP enquanto cuidava do seu açougue e lojas na cidade de Miracatu, a centenas de quilômetros de SP.',
    fullDetails: 'Renato Bolsonaro foi nomeado no gabinete do deputado André do Prado, mas durante mais de três anos nunca compareceu para despachar na Assembleia. Equipe do SBT o flagrou trabalhando rotineiramente no açougue da família durante horário de expediente público. Foi exonerado imediatamente após a exibição da reportagem.',
    crimesList: [
      'Improbidade administrativa com enriquecimento ilícito',
      'Dano ao erário público estadual',
      'Falsidade de registro de presença'
    ],
    evidenceHighlights: [
      'Filmagem jornalística em horário de expediente no açougue em Miracatu',
      'Atos de exoneração expedidos pela Mesa Diretora da ALESP em 2016',
      'Ação civil pública exigindo a devolução de salários pagos irregularmente'
    ],
    sources: ['Matéria investigativa SBT Brasil (2016)', 'Diário Oficial do Estado de São Paulo']
  }
];

export interface CashPropertyMetric {
  title: string;
  value: string;
  description: string;
}

export const CASH_PROPERTY_STATS: CashPropertyMetric[] = [
  {
    title: 'Imóveis em Moeda Corrente',
    value: '51 de 107',
    description: 'Quase metade de todo o patrimônio imobiliário adquirido pelo clã em 30 anos foi pago total ou parcialmente em dinheiro vivo.'
  },
  {
    title: 'Volume Financeiro Histórico',
    value: 'R$ 25,6 Milhões',
    description: 'Valor nominal declarado nas escrituras cartorárias como pago em notas de papel-moeda à vista.'
  },
  {
    title: 'Valor Corrigido pela Inflação',
    value: 'R$ 47,2 Milhões',
    description: 'Estimativa atualizada pelo IPCA para o montante injetado em espécie nas compras imobiliárias.'
  },
  {
    title: 'Cidades Mapeadas',
    value: '16 Municípios',
    description: 'Aquisições distribuídas entre Rio de Janeiro, Brasília, Vale do Ribeira (SP) e litoral fluminense.'
  }
];

export interface SovereigntyPillar {
  id: string;
  title: string;
  subtitle: string;
  historicalRecord: string;
  victimsOrConsequence: string;
  resistanceAction: string;
}

export const SOVEREIGNTY_PILLARS: SovereigntyPillar[] = [
  {
    id: 'democracia-instituicoes',
    title: 'Soberania Democrática & Constitucional',
    subtitle: 'Tentativas de Ruptura, Terrorismo e Minuta Golpista',
    historicalRecord: 'Ataques sistemáticos ao sistema eleitoral brasileiro, desrespeito às decisões do Supremo Tribunal Federal, confabulação de generais da ativa para assalto ao poder, elaboração da Minuta do Golpe de Estado e instigação dos atos terroristas de 8 de janeiro de 2023 em Brasília.',
    victimsOrConsequence: 'Afronta direta aos 156 milhões de eleitores brasileiros, destruição física do patrimônio histórico nacional e abalo diplomático da República.',
    resistanceAction: 'Inquéritos rigorosos no STF, condenações de mais de 300 golpistas a penas de até 17 anos e indiciamento criminal da cúpula militar e política.'
  },
  {
    id: 'saude-vida',
    title: 'Soberania Sanitária & Defesa da Vida',
    subtitle: 'Negação da Ciência, Sabotagem a Vacinas e Morticínio',
    historicalRecord: 'Atraso premeditado nas negociações de compra de imunizantes da Pfizer e CoronaVac, estímulo à contaminação em massa com "kit Covid" ineficaz, desmonte da vacinação infantil e colapso de oxigênio em Manaus com desdém explícito pelo sofrimento das famílias.',
    victimsOrConsequence: 'Mais de 700.000 vidas brasileiras ceifadas pela Covid-19; cálculo da CPI aponta que pelo menos 400.000 poderiam ter sido poupadas com vacinação célere.',
    resistanceAction: 'A CPI da Pandemia no Senado, a mobilização da comunidade científica (Fiocruz, Butantan) e a consolidação do SUS como escudo do povo.'
  },
  {
    id: 'meio-ambiente-povos',
    title: 'Soberania Ambiental & Povos Indígenas',
    subtitle: 'Genocídio Yanomami e Incêndio da Amazônia e Pantanal',
    historicalRecord: 'Doutrina de "passar a boiada" executada com a asfixia financeira do IBAMA e ICMBio, desregulamentação do agrotóxico, conivência explícita com garimpo ilegal com mercúrio e avanço criminoso de grileiros em unidades de conservação e terras demarcadas.',
    victimsOrConsequence: 'Morte de mais de 570 crianças Yanomami por desnutrição e malária evitável; queimadas recordes no Pantanal e desmatamento recorde na Amazônia.',
    resistanceAction: 'Operações de retomada da TI Yanomami, denúncias ativas no Tribunal Penal Internacional em Haia e retomada do Fundo Amazônia.'
  },
  {
    id: 'povo-economia',
    title: 'Soberania Popular & Segurança Alimentar',
    subtitle: 'Desmonte dos Estoques da Conab e 33 Milhões na Fome',
    historicalRecord: 'Esvaziamento deliberado dos estoques reguladores de alimentos da Conab (arroz, feijão, milho), abandono da agricultura familiar, desregulamentação predatória de combustíveis (PPI) e explosão da inflação dos alimentos básicos na mesa dos trabalhadores.',
    victimsOrConsequence: '33,1 milhões de brasileiros jogados na fome severa em 2022 (Rede PENSSAN) e retorno trágico do Brasil ao Mapa da Fome da ONU.',
    resistanceAction: 'Solidariedade das frentes populares, cozinhas comunitárias, MST e retorno de políticas públicas de soberania alimentar e renda mínima.'
  }
];

export interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  actor: string;
  summary: string;
  impactTag: 'Democracia' | 'Corrupção' | 'Saúde' | 'Meio Ambiente';
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2018',
    date: 'Dezembro de 2018',
    title: 'Estopim do Caso Queiroz e as Rachadinhas',
    actor: 'Flávio Bolsonaro & Fabrício Queiroz',
    summary: 'Relatório do COAF enviado ao MP-RJ revela movimentação atípica de R$ 1,2 milhão na conta do ex-assessor Queiroz e cheques destinados a Michelle Bolsonaro, antes mesmo da posse de Jair.',
    impactTag: 'Corrupção'
  },
  {
    year: '2019',
    date: 'Abril de 2019',
    title: 'Instalação do Gabinete do Ódio no Planalto',
    actor: 'Carlos Bolsonaro e assessores',
    summary: 'Estruturação informal do núcleo de desinformação no 3º andar do Palácio do Planalto, iniciando ataques coordenados contra ministros do STF e deputados dissidentes.',
    impactTag: 'Democracia'
  },
  {
    year: '2019',
    date: 'Agosto de 2019',
    title: '"Dia do Fogo" e Desmonte da Fiscalização na Amazônia',
    actor: 'Governo Federal / Ministério do Meio Ambiente',
    summary: 'Fazendeiros e grileiros coordenam queimadas sincronizadas no Pará após redução deliberada das fiscalizações do IBAMA, gerando alerta mundial sobre o colapso amazônico.',
    impactTag: 'Meio Ambiente'
  },
  {
    year: '2020',
    date: 'Março de 2020',
    title: 'Declaração de "Gripezinha" e Boicote ao Isolamento',
    actor: 'Jair Bolsonaro',
    summary: 'Em pronunciamento nacional, o ex-presidente chama a pandemia de "gripezinha", incentiva população a ir para as ruas e inicia a campanha de desinformação pró-cloroquina.',
    impactTag: 'Saúde'
  },
  {
    year: '2021',
    date: 'Janeiro de 2021',
    title: 'Tragédia de Manaus: Asfixia e Falta de Oxigênio',
    actor: 'Ministério da Saúde & Jair Bolsonaro',
    summary: 'Hospitais do Amazonas entram em colapso com pacientes asfixiados sem oxigênio; governo federal ignora alertas prévios de fornecedores e envia comitiva médica pró-cloroquina.',
    impactTag: 'Saúde'
  },
  {
    year: '2021',
    date: 'Outubro de 2021',
    title: 'Conclusão da CPI da Pandemia e Pedido de Indiciamento',
    actor: 'Senado Federal (CPI da Pandemia)',
    summary: 'Senado aprova relatório histórico com 1.299 páginas imputando 9 crimes a Jair Bolsonaro, incluindo crimes contra a humanidade e charlatanismo, e 78 outros indiciados.',
    impactTag: 'Saúde'
  },
  {
    year: '2022',
    date: 'Julho de 2022',
    title: 'Reunião Golpista com Embaixadores Estrangeiros',
    actor: 'Jair Bolsonaro',
    summary: 'Bolsonaro usa o Palácio da Alvorada e a TV Brasil para disseminar acusações falsas contra o sistema eleitoral a dezenas de diplomatas, ato que gerou sua posterior inelegibilidade.',
    impactTag: 'Democracia'
  },
  {
    year: '2022',
    date: 'Agosto de 2022',
    title: 'Revelação da Compra de 51 Imóveis em Dinheiro Vivo',
    actor: 'Família Bolsonaro (UOL Investigação)',
    summary: 'Investigação jornalística baseada em escrituras comprova a aquisição de 51 imóveis pagos com moeda corrente nacional pelo clã Bolsonaro nos últimos 30 anos.',
    impactTag: 'Corrupção'
  },
  {
    year: '2022',
    date: 'Novembro / Dezembro de 2022',
    title: 'Articulação da Minuta do Golpe e Falsificação da Vacina',
    actor: 'Jair Bolsonaro, Mauro Cid e Generais',
    summary: 'Após a derrota nas urnas, reuniões conspiratórias no Alvorada discutem minuta para anular a eleição. Em paralelo, inserem dados falsos de vacina no SUS para viajar aos EUA.',
    impactTag: 'Democracia'
  },
  {
    year: '2023',
    date: '8 de Janeiro de 2023',
    title: 'Atentados Terroristas contra os Três Poderes em Brasília',
    actor: 'Milícias Golpistas e Conspiradores',
    summary: 'Invasão e depredação premeditada do Congresso Nacional, Supremo Tribunal Federal e Palácio do Planalto por hordas golpistas incitadas pela retórica bolsonarista.',
    impactTag: 'Democracia'
  },
  {
    year: '2023',
    date: 'Junho de 2023',
    title: 'TSE Condena Bolsonaro à Inelegibilidade por 8 Anos',
    actor: 'Tribunal Superior Eleitoral',
    summary: 'Por 5 votos a 2, o plenário do TSE declara Jair Bolsonaro inelegível até 2030 por abuso de poder político e desvio de finalidade eleitoral.',
    impactTag: 'Democracia'
  },
  {
    year: '2024',
    date: 'Fevereiro a Novembro de 2024',
    title: 'Operação Tempus Veritatis e Triplo Indiciamento da PF',
    actor: 'Polícia Federal & STF',
    summary: 'A Polícia Federal conclui inquéritos definitivos e indicia Jair Bolsonaro por Golpe de Estado, Associação Criminosa e Peculato (caso das Joias) e Fraude de Vacina.',
    impactTag: 'Democracia'
  }
];
