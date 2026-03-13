# Tooltip com Ícone de Interrogação (Stats Cards)

Guia pronto para copiar/colar em qualquer site React + Tailwind com cards de estatística.

---

## 1. Pré-requisitos
- React + TypeScript
- Tailwind CSS configurado
- Fonte **Material Symbols Rounded** carregada (ícones do Google)

---

## 2. Passo a passo resumido
1. Importar `useState`.
2. Criar o array `stats` contendo `tooltip` para cada card.
3. Renderizar os cards aplicando classes utilitárias e `overflow-visible`.
4. Adicionar o ícone de interrogação no canto superior direito com eventos de hover/click.
5. Exibir o tooltip quando o índice estiver selecionado.
6. Garantir que nenhum wrapper esteja com `overflow-hidden`.

---

## 3. Snippet completo

```tsx
import React, { useState } from 'react';

const StatsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      label: 'Leads gerados por mês',
      value: '+50 Mil',
      description: '',
      icon: 'shopping_cart',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'Total de pedidos pelos botões "comprar" e "pedir pelo whatsapp" gerados pelo catálogo'
    },
    {
      label: 'ROI Médio Mensal',
      value: '70x',
      description: '(Sobre mensalidade)',
      icon: 'savings',
      color: 'from-[#b539e6] to-[#6200ee]',
      tooltip: 'GMV médio mensal dividido pela mensalidade do plano Essential'
    },
    // ...adicione os demais cards
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-[#f5f0ff] via-[#f8f5ff] to-[#faf8ff] overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-visible">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-[#b539e6]/20 hover:border-[#b539e6]/40 transition-all hover:shadow-xl hover:shadow-[#b539e6]/10 hover:-translate-y-1 overflow-visible"
            >
              {/* Ícone / Tooltip */}
              <div
                className="absolute top-3 right-3 cursor-help z-[100]"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setHoveredCard(hoveredCard === idx ? null : idx)}
              >
                <span className="material-symbols-rounded text-zinc-300 text-lg">help</span>

                {hoveredCard === idx && (
                  <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg z-[9999] w-56 md:w-72 text-right leading-snug whitespace-normal" style={{ pointerEvents: 'none' }}>
                    <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
                    <span>{stat.tooltip}</span>
                  </div>
                )}
              </div>

              {/* Conteúdo do card */}
              <div className="flex items-center gap-4 mb-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-rounded text-white text-xl">{stat.icon}</span>
                </div>
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
              </div>

              <h3 className="text-slate-900 font-bold text-lg mb-1 leading-tight">{stat.label}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
```

Cole esse bloco em qualquer página e ajuste apenas o array `stats`.

---

## 4. Estilos e boas práticas

| Elemento | Classes essenciais |
| --- | --- |
| Ícone | `absolute top-3 right-3 cursor-help z-[100]` |
| Tooltip | `absolute bottom-full right-0 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg whitespace-normal z-[9999]` |
| Seta | `absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900` |
| Conteiner do card | `relative overflow-visible transition hover:-translate-y-1` |

### CSS adicional
```css
.scroll-section {
  overflow: visible !important;
}
```

> Certifique-se de remover `overflow-hidden` de wrappers externos ou substitua por `overflow-visible` quando o tooltip precisar “sair” do card.

---

## 5. Responsividade & acessibilidade
- Desktop: usar `onMouseEnter/onMouseLeave`.
- Mobile: mantenha `onClick` como fallback (já incluído no snippet).
- Use `pointerEvents: 'none'` no tooltip para evitar que o hover seja perdido ao mover o cursor.

---

## 6. Checklist rápido
- [ ] `useState` importado e `hoveredCard` criado
- [ ] Array `stats` contém `tooltip`
- [ ] Cards com `relative overflow-visible`
- [ ] Ícone posicionado (`top-3 right-3`) e com handlers
- [ ] Tooltip com largura responsiva (`w-56 md:w-72`) e seta alinhada
- [ ] Wrappers sem `overflow-hidden`
- [ ] Testado em desktop e mobile

---

## 7. Troubleshooting
- Tooltip cortando: confirmar `overflow-visible` no card e pais.
- Tooltip atrás de outros elementos: elevar `z-index` (`z-[9999]`).
- Hover não dispara: aumentar hitbox do ícone (ex. adicionar `p-1`).
- Necessidade de fechar no mobile: manter o handler `onClick` já contemplado.

---

Pronto! O mesmo prompt pode ser replicado em qualquer landing page que utilize os mesmos componentes de cards. Ajuste textos, cores e gradientes conforme a identidade visual do novo site. ✅
