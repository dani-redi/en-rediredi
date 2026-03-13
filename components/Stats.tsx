
import React, { useState } from 'react';
import { ScrollSection } from './ScrollSection';

const Stats: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      label: 'Leads Gerados por Mês',
      value: '+50 Mil',
      description: '',
      icon: 'shopping_cart',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'Total de pedidos pelos botões "comprar" e "pedir pelo whatsapp" gerados pelo catálogo'
    },
    {
      label: 'ROI Médio Mensal',
      value: '30x',
      description: '(Sobre mensalidade)',
      icon: 'savings',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'GMV médio mensal / mensalidade do plano Essential'
    },
    {
      label: 'Novas Oportunidades Diárias',
      value: '5 a 10',
      description: '(Geradas pela Redi IA)',
      icon: 'ads_click',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'Novas oportunidades de vendas de produtos geradas por Redi IA'
    },
    {
      label: 'Aumento nas Vendas',
      value: 'até 30%',
      description: '(Canais da Redi)',
      icon: 'trending_up',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'Aumento nas vendas nos canais gerenciados pela RediRedi - WhatsApp, Catálogo e Redes Sociais'
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#f5f0ff] via-[#f8f5ff] to-[#faf8ff] py-7 md:py-8 px-4 md:px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/plataforma-de-vendas/pattern.svg')] opacity-5"></div>

      <div className="max-w-7xl mx-auto relative">
        <ScrollSection className="text-center mb-6 md:mb-8">

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-4">
            Resultados reais para quem usa a Redi no dia a dia
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Métricas que mostram o impacto real da nossa plataforma no seu negócio
          </p>
        </ScrollSection>

        <ScrollSection stagger={1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-visible">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#b539e6]/20 hover:border-[#b539e6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#b539e6]/10 hover:-translate-y-1 flex flex-col items-center text-center overflow-visible"
            >
              {/* Info icon with tooltip */}
              <div
                className="absolute top-3 right-3 cursor-help z-[100]"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setHoveredCard(hoveredCard === idx ? null : idx)}
              >
                <span className="material-symbols-rounded text-zinc-300 text-lg">help</span>

                {/* Tooltip */}
                {hoveredCard === idx && (
                  <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg z-[9999] w-56 md:w-72 text-right leading-snug whitespace-normal" style={{ pointerEvents: 'none' }}>
                    <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
                    <span>{stat.tooltip}</span>
                  </div>
                )}
              </div>

              {/* Icon and Value container */}
              <div className="flex items-center gap-4 mb-2">
                {/* Icon container */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-rounded text-white text-xl">{stat.icon}</span>
                </div>

                {/* Value */}
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
              </div>

              {/* Label */}
              <h3 className="text-slate-900 font-bold text-lg mb-1 leading-tight">
                {stat.label}
              </h3>

              {/* Hover effect decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#b539e6]/5 to-[#6200ee]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </ScrollSection>
      </div>
    </section>
  );
};

export default Stats;
