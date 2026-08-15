# Technical Requirements Document (TRD)

**Project:** Novadines Portfolio (Scratch Rebuild)
**Stack:** Next.js 14 (App Router), Tailwind CSS, Framer Motion, TypeScript.

This document dictates the architectural boundaries, component hierarchies, and strict CSS safety rules to prevent the catastrophic bugs (hydration mismatches, iOS Safari compositor crashes) of the previous iteration.

---

## 1. Architectural Boundaries (The Client/Server Split)

Next.js App Router aggressively defaults to Server Components. Framer Motion requires the `window` object and thus must be a Client Component.

### 1.1. The Strict Isolation Rule
- **Pages (`page.tsx`) MUST be Server Components.** Do not put `'use client'` at the top of a page route. This destroys SEO and performance.
- **Animations MUST be wrapped.** Create dedicated Client Components in `src/components/animations/` (e.g., `<FadeIn>`, `<StaggerContainer>`).
- **Data Fetching:** Any dynamic data (e.g., pulling live demo URLs) must happen on the Server and be passed to Client Components as props.

### 1.2. Directory Structure
```text
src/
├── app/
│   ├── layout.tsx         (Server Component - Global HTML/Body)
│   ├── page.tsx           (Server Component - Home Route)
│   └── globals.css        (Tailwind + ALDP Safari Fixes)
├── components/
│   ├── layout/            (Navbar, Footer)
│   ├── sections/          (HeroSection, DemoSection)
│   └── ui/                (Buttons, Cards - Reusable atoms)
├── lib/
│   └── utils.ts           (Tailwind merge/clsx utilities)
```

---

## 2. The ALDP Safari Protocol (CSS Constraints)

The previous build crashed on iOS Safari due to exceeding WebKit GPU compositor limits. You are legally bound to follow these CSS constraints:

### 2.1. The `backdrop-filter` Ban
- **Rule:** You MUST NOT combine `backdrop-filter: blur(...)` with `transform` (e.g., `translate`, `scale`, `rotate`) or `opacity` animations on the *same DOM node*.
- **Fix:** If a Glassmorphism card needs to animate in, the animation (`framer-motion`) happens on a parent `<div>`, and the `backdrop-filter` happens on a static child `<div>`.

### 2.2. The `overflow` Ban
- **Rule:** Deeply nested `overflow-x: hidden` or `overflow: clip` on elements with `border-radius` causes Safari to force software rendering, tanking FPS.
- **Fix:** Apply `overflow-x: clip` ONLY to the root `<main>` or `<body>` element. Do not use it on individual sections unless absolutely necessary for a carousel.

### 2.3. Z-Index Stacking Context Hierarchy
Hardcode these into your Tailwind config or strictly follow them via utility classes:
- `z-[-1]`: Atmospheric background glows.
- `z-[1]`: Base page content.
- `z-[40]`: Sticky headers / Navbars.
- `z-[50]`: Modals / Dialog overlays.
- `z-[100]`: Toast notifications / Errors.

---

## 3. Hydration Safety Guardrails

- **Rule:** Never use `typeof window !== 'undefined'` to conditionally render JSX in a layout or page. This guarantees a hydration mismatch (Server sends null, Client renders div).
- **Fix:** If you need client-only rendering (e.g., for `localStorage` checks or specific browser APIs), you MUST use a `useEffect` hook to set an `isMounted` state to `true` before returning the JSX.

---

## 4. Animation Strategy (Framer Motion)

- **Scroll Triggers:** Use `whileInView` with `viewport={{ once: true, margin: "-100px" }}` to ensure animations trigger only when the user actually sees them, saving GPU memory.
- **Will-Change:** Do NOT preemptively apply `will-change: transform` to every element. Only apply it to the specific floating Wagyu dish or heavy interactive elements. Let Framer Motion handle optimization automatically.
