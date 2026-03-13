# Project Cleanup & Optimization Log

This document details the cleanup and optimization steps performed to localize the project to English and remove unnecessary debt.

## 1. Removed Unused Files & Directories

The following elements were identified as unnecessary for the landing page functionality and were removed:

| Item | Reason for Removal |
| :--- | :--- |
| `dist/` | Stale build artifacts with old Portuguese paths. |
| `hooks/useScrollEffect.ts` | Not imported or used by any component. |
| `hooks/` | Empty directory after removing internal hooks. |
| `lib/` | Empty directory. |
| `components/ui/` | Empty directory. |
| `metadata.json` | Leftover AI template file not used by the build or app logic. |
| `.env.local` | Contained a placeholder `GEMINI_API_KEY` not referenced by components. |
| `GUIA_UTM.md` | Outdated Portuguese guide with incorrect base URL references. |
| `components/LanguageSelector.tsx` | Removed to streamline the English-only version of the landing page. |
| `hooks/useTranslation.ts` | Removed along with the Language Selector as part of the English-only transition. |

## 2. Configuration Improvements

### `vite.config.ts` Simplification
- **Removed Gemini API Key Injection**: The `define` block for `process.env.GEMINI_API_KEY` was removed as no components were using it, improving security and reducing build-time noise.
- **Cleaned Imports**: Removed `loadEnv` and the environment variable loading logic.
- **Simplified Export**: The configuration export was simplified from a function to a standard object.
- **Updated Base Path**: The project now correctly uses `/sales-platform/`.

## 3. Dependency Cleanup

The following dependencies were installed in `package.json` but never imported in the source code (`.tsx` or `.ts` files). They were uninstalled to reduce `node_modules` size and improve install times:

- **`framer-motion`**: Animations are handled via native CSS and the custom `ScrollSection.tsx` Intersection Observer logic.
- **`clsx`**: Standard template literals or simple string concatenation are used for class names.
- **`tailwind-merge`**: No complex Tailwind class merging requirements were found in the current component architecture.

---
*Last Updated: 2026-03-13*
