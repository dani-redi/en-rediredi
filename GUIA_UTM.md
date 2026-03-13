# Implementation Guide: Default UTM Parameters

This document details the implementation of the automatic UTM parameter injection logic on the Landing Page and provides a step-by-step guide on how to replicate this behavior in other pages, components, or new buttons in the future.

## 1. Context and The Problem

Originally, the various "Get started for free" buttons on the page redirected the user using the direct static call below:

```tsx
window.open('https://app.rediredi.com/en/signup?' + window.location.search, '_blank')
```

**Problems with the old approach:**
1. Basic concatenation like `?` + `location.search` caused formatting errors like `??` if the base URL already had parameters attached incorrectly.
2. When a user organically accessed the site directly through the home page (without parameters in the URLs), the Redi application received a "blank" lead in terms of ad tracking, resulting in lost origin data.
3. Code repetition throughout the entire application (violating the DRY - Don't Repeat Yourself concept).

## 2. The Implemented Solution

To resolve these points, we created and architected a global and testable utility function called `handleSignupClick`. This function interacts natively with the web API libraries `URL` and `URLSearchParams`, evaluating the current URL robustly.

**What does this function do in practice?**
1. Checks the browser URL.
2. Actively searches for keys starting with the `utm_` tag (e.g., `utm_source`, `utm_campaign`, `utm_medium`, etc.).
3. If it **DOES NOT HAVE ANY** UTM tracking parameter, the function explicitly injects the default behavior: `utm_source=organic_lp`.
4. If a UTM campaign is already running, the application will preserve the values and send them to the App.

The logical processing resides cleanly at the system's root:
**Utility file: `utils/url.ts`**
```typescript
export const handleSignupClick = () => {
  const url = new URL('https://app.rediredi.com/en/signup');
  const params = new URLSearchParams(window.location.search);
  
  let hasUtm = false;
  params.forEach((_, key) => {
    if (key.startsWith('utm_')) {
      hasUtm = true;
    }
  });

  if (!hasUtm) {
    params.set('utm_source', 'organic_lp');
  }

  url.search = params.toString();
  window.open(url.toString(), '_blank');
};
```

---

## 3. Step-by-Step: Replicating in other structures

If you, the developer, have the mission of creating a NEW section or page containing a CTA (Call to Action) for "Sign Up" (Registration), simply attach the mentioned function without the need to rewrite pure URL logic.

### Step 1: Import the analytical function `handleSignupClick`
At the top of your component file (e.g., `NewComponent.tsx`):

```tsx
import { handleSignupClick } from '../utils/url';
```
*(Note: Just ensure the folder path (e.g., `../` or `../../`) is correct).*

### Step 2: Attach it to the HTML Component's Interaction Event
On action elements like your `<button>` containing the "Get started for free" functionality, simply bind it to your `onClick` prop.

**Instead of using this (Old Standard):**
```tsx
<button 
   onClick={() => window.open('https://app.rediredi.com/en/signup?' + window.location.search, '_blank')}
>
  Get started for free
</button>
```

**Do this (New and Recommended Standard):**
```tsx
<button onClick={handleSignupClick}>
  Get started for free
</button>
```

### What happens in the end?
All buttons that trigger the `handleSignupClick` function on click will inherit the best practices of "organic_lp" organic attribution, preserving the analytical health of your Google Analytics/Ads platforms.
