# GTM — Correção do Tracking no Botão "Comienza gratis"

## Diagnóstico do Problema

O trigger no GTM era configurado para disparar em **"cliques em Links cuja URL contém 'signup'"**.  
Essa abordagem depende da variável embutida `{{Click URL}}` do GTM, que **só lê o atributo `href` de tags `<a>`**.

Os botões "Comienza gratis" são elementos `<button>` com `onClick` programático (`window.open()`).  
Por não terem `href`, a variável `{{Click URL}}` retorna **undefined/vazio** — o trigger nunca dispara, independentemente da configuração do GA4.

---

## Solução Implementada no Código

O arquivo `utils/url.ts` agora inclui um `dataLayer.push()` **antes** de abrir a URL:

```ts
const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
if (Array.isArray(dataLayer)) {
  dataLayer.push({
    event: 'signup_click',
    signup_url: url.toString(),
  });
}
```

Esse push ocorre em todos os botões da landing page, pois todos já usam a função `handleSignupClick` de `utils/url.ts`.

---

## Ajustes Necessários no GTM

### 1. Criar um novo Trigger — Custom Event

| Campo         | Valor           |
|---------------|-----------------|
| Tipo          | Custom Event    |
| Nome do Evento | `signup_click` |

> Esse trigger dispara sempre que o `dataLayer.push({ event: 'signup_click' })` for executado.

---

### 2. Atualizar a Tag GA4 existente

Na tag GA4 de evento (que antes usava o trigger de clique em link), troque o trigger pelo novo **Custom Event — signup_click**.

Configurações recomendadas da tag:

| Campo            | Valor           |
|------------------|-----------------|
| Tipo da Tag      | GA4 Event       |
| Nome do Evento   | `signup_click`  |
| Parâmetro extra  | `signup_url` → variável `{{DLV - signup_url}}` (opcional, para debug) |

---

### 3. (Opcional) Criar variável de DataLayer para `signup_url`

Se quiser logar a URL exata para fins de debug no GA4 Debugger:

| Campo              | Valor         |
|--------------------|---------------|
| Tipo               | Data Layer Variable |
| Nome da Variável   | `signup_url`  |
| Versão             | Version 2     |

---

### 4. Publicar o container GTM

Após criar o trigger e atualizar a tag, clique em **Enviar** no GTM para publicar a versão com as alterações.

---

## Validação

1. Abra o GTM Preview Mode no site.
2. Clique em qualquer botão "Comienza gratis".
3. No painel do GTM Preview, verifique se o evento `signup_click` aparece na lista de eventos disparados.
4. Confirme que a tag GA4 está listada como **Fired** nesse evento.
5. No GA4 DebugView, o evento `signup_click` deve aparecer em tempo real.

---

## Por que não usar o trigger "Click - Just Links"?

| Abordagem                      | Funciona com `<button>`? | Observação                              |
|-------------------------------|--------------------------|------------------------------------------|
| Click - Just Links (href)     | ❌ Não                   | Só funciona com `<a href="...">`        |
| Click - All Elements (URL)    | ❌ Não                   | `{{Click URL}}` vazio sem `href`        |
| **Custom Event (dataLayer)**  | ✅ Sim                   | Padrão recomendado para SPA e React     |

O padrão `dataLayer.push()` é a abordagem recomendada pela própria Google para Single Page Applications (SPA) como React, onde a navegação é programática e não depende de cliques em `<a>` tags nativas.
