# Sistema de Tooltips Genérico (React + Tailwind)

Use este prompt para replicar tooltips em qualquer componente com os mesmos elementos (lista, botões, cards etc.).

---

## 1. Pré-requisitos
- React com TypeScript
- Tailwind CSS
- Fonte **Material Symbols Rounded** (ou outro set de ícones)

---

## 2. Passos rápidos
1. Importar `useState` e criar `hoveredItem`.
2. Definir `items` (ou `stats`, `buttons` etc.) e o objeto `tooltips` correspondente.
3. Envolver cada item com `relative cursor-help`.
4. Renderizar o tooltip em `absolute`, com seta e classes utilitárias.
5. Garantir que containers pai tenham `overflow-visible`.
6. Opcional: adicionar suporte a `onClick` para mobile.

---

## 3. Snippet pronto

```tsx
import React, { useState } from 'react';

const TooltipList: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = ['Catálogo', 'CRM', 'Pedidos'];
  const tooltips: Record<string, string> = {
    Catálogo: 'Organize produtos com fotos, preços e descrições profissionais',
    CRM: 'Gerencie clientes com histórico completo e follow-up otimizado',
    Pedidos: 'Controle vendas e status em um único lugar'
  };

  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm cursor-help overflow-visible"
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => setHoveredItem((prev) => (prev === item ? null : item))}
        >
          <span className="material-symbols-rounded text-secondary text-sm">check</span>
          <span className="font-semibold text-slate-700">{item}</span>

          {hoveredItem === item && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-lg z-[200] whitespace-normal w-64 text-left" style={{ pointerEvents: 'none' }}>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
              {tooltips[item]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TooltipList;
```

---

## 4. Classes essenciais

| Elemento | Classes sugeridas |
| --- | --- |
| Item | `relative cursor-help flex items-center gap-2 overflow-visible` |
| Tooltip | `absolute bottom-full left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-lg w-64 whitespace-normal z-[200]` |
| Seta | `absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900` |

> Ajuste cores e tamanhos conforme o design system. Para tooltips laterais, troque `bottom-full` por `left-full`/`right-full` e reposicione a seta.

---

## 5. Considerações de responsividade
- Em mobile, prefira `onClick` (já incluído) para abrir/fechar.
- Use `pointerEvents: 'none'` no tooltip para não interromper o hover.
- Remova `overflow-hidden` de wrappers (se necessário, aplique `overflow-visible`).

### CSS complementar
```css
.scroll-section {
  overflow: visible !important;
}
```

---

## 6. Checklist rápido
- [ ] `useState` importado e configurado
- [ ] Lista de itens + objeto `tooltips`
- [ ] Containers com `relative` e `overflow-visible`
- [ ] Tooltip com classes de posicionamento e seta
- [ ] Eventos de hover/click testados em desktop e mobile
- [ ] z-index ajustado caso existam elementos sobrepostos

---

## 7. Troubleshooting
- **Tooltip não aparece**: verifique se o item tem `relative` e se o estado está mudando.
- **Tooltip cortado**: confirme `overflow-visible` nos pais.
- **Interação falhando em touch**: use `onClick`/`onTouchStart` e considere debounce.
- **Texto muito grande**: aumente `w-64` ou use `max-w-sm` e `whitespace-normal`.

Use este guia como blueprint para qualquer página: basta colar o snippet, mudar os itens e personalizar as classes que já estarão coerentes com os componentes existentes. ✅
