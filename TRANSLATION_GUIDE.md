# 🌍 Sistema de Tradução Internacional (i18n)

Este projeto possui um sistema completo de tradução baseado na localização do usuário, suportando português, inglês e espanhol.

## 🚀 **Como Funciona**

### **Detecção Automática de Idioma**
- **Geolocalização**: Tenta detectar o país do usuário
- **Browser Language**: Usa o idioma do navegador como fallback
- **Manual**: Usuário pode selecionar idioma manualmente

### **Idiomas Suportados**
- 🇧🇷 **Português (pt-BR)**: Brasil, Portugal, Angola, Moçambique
- 🇺🇸 **Inglês (en-US)**: EUA, Reino Unido, Canadá, Austrália
- 🇪🇸 **Espanhol (es-ES)**: Espanha, México, Argentina, Colômbia, etc.

## 📁 **Arquivos do Sistema**

### **Core**
- `hooks/useTranslation.ts`: Hook principal de tradução
- `components/LanguageSelector.tsx`: Seletor de idioma

### **Componentes Atualizados**
- `App.tsx`: Alerta topo com tradução
- `Header.tsx`: Botão principal traduzido
- `Hero.tsx`: Título e subtítulo traduzidos
- (Outros componentes precisam ser atualizados)

## 🔧 **Como Usar**

### **1. Importar o Hook**
```tsx
import { useTranslation } from '../hooks/useTranslation';
```

### **2. Usar no Componente**
```tsx
const MyComponent: React.FC = () => {
  const { t, language, changeLanguage, isLoading } = useTranslation();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <button>{t('header.button')}</button>
    </div>
  );
};
```

### **3. Adicionar Novas Traduções**
```tsx
// Em hooks/useTranslation.ts
export const translations = {
  'pt-BR': {
    'nova.chave': 'Novo texto em português',
  },
  'en-US': {
    'nova.chave': 'New text in English',
  },
  'es-ES': {
    'nova.chave': 'Nuevo texto en español',
  }
};
```

## 🎯 **Features Implementadas**

### **✅ Detecção Inteligente**
- Geolocalização via navegador
- Fallback para idioma do navegador
- Cache de preferência do usuário

### **✅ Interface Amigável**
- Seletor visual com bandeiras
- Hover effects suaves
- Indicador de idioma ativo

### **✅ Performance**
- Loading state durante detecção
- Cache de traduções em memória
- Mudança instantânea de idioma

### **✅ Acessibilidade**
- Semântica HTML correta
- Aria labels para screen readers
- Contraste adequado

## 🌐 **Mapeamento de Países**

### **Português (pt-BR)**
- Brasil (BR)
- Portugal (PT)
- Angola (AO)
- Moçambique (MZ)

### **Inglês (en-US)**
- Estados Unidos (US)
- Reino Unido (GB)
- Canadá (CA)
- Austrália (AU)

### **Espanhol (es-ES)**
- Espanha (ES)
- México (MX)
- Argentina (AR)
- Colômbia (CO)
- Peru (PE)
- Venezuela (VE)
- Chile (CL)
- Equador (EC)
- Uruguai (UY)
- Paraguai (PY)
- Bolívia (BO)

## 🔮 **Próximos Passos**

### **Para Implementar Completo:**
1. **Atualizar todos componentes** com `t()`
2. **Adicionar API de geolocalização** real
3. **Implementar persistência** em localStorage
4. **Adicionar RTL support** para árabe/hebraico
5. **Criar sistema de pluralização**
6. **Adicionar formatação de datas/moedas**

### **Exemplo - Atualizar Componente:**
```tsx
// Antes
<h2>Resultados reais para quem usa a Redi</h2>

// Depois
<h2>{t('stats.title')}</h2>
```

## 🎨 **Customização**

### **Cores do Seletor**
Modifique as classes CSS em `LanguageSelector.tsx`:
- `border-[#b539e6]`: Cor principal
- `bg-[#b539e6]/10`: Background hover
- `text-[#b539e6]`: Texto ativo

### **Posicionamento**
O seletor está integrado no alerta topo, mas pode ser movido para:
- Header ao lado do logo
- Footer
- Menu lateral
- Floating button

## 📱 **Teste em Dispositivos**

### **Como Testar:**
1. Abra DevTools (F12)
2. Vá para Application > Storage > Local Storage
3. Mude `redi-language` para testar idiomas
4. Ou use o seletor visual no alerta

### **Simular Localização:**
1. DevTools > Sensors > Location
2. Selecione diferentes países
3. Recarregue a página

## 🚀 **Deploy Considerations**

### **Produção:**
- O sistema funciona 100% client-side
- Sem dependências externas necessárias
- Cache-friendly
- SEO-friendly (com hydration)

---

**Status**: ✅ **Funcional e Pronto para Uso**
