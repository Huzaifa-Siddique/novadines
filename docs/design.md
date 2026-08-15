# Design System & Aesthetic Tokens (Novadines)

This document strictly defines the visual and interactive language of the Novadines portfolio. It contains no React or framework architecture.

## 1. Aesthetic Identity
- **Theme:** Dark Mode Only.
- **Vibe:** High-end hospitality, exclusive, engineered, ultra-modern.
- **Material Constraint:** Glassmorphism must be used for all elevated surfaces.

---

## 2. Global Tokens

### 2.1. Color Palette (HSL & Hex)
- **Background (`--bg-base`):** `#030303` / `hsl(0, 0%, 1%)` - Deep, almost-black.
- **Foreground (`--text-primary`):** `#FCFCFC` / `hsl(0, 0%, 99%)` - Crisp white for readability.
- **Text Secondary (`--text-muted`):** `#A1A1AA` / `hsl(240, 5%, 65%)` - Zinc-400 for subtext.
- **Accent Primary (`--gold-primary`):** `#D4AF37` / `hsl(46, 65%, 52%)` - Classic metallic gold.
- **Accent Light (`--gold-light`):** `#FBE7A1` / `hsl(47, 86%, 81%)` - Bright gold for highlights.
- **Accent Dark (`--gold-dark`):** `#8C6A15` / `hsl(43, 74%, 32%)` - Deep gold for shadows/gradients.

### 2.2. Typography Hierarchy
- **Primary / Body (`--font-sans`):** `Inter`. 
  - Weight: 400 (Regular) to 500 (Medium).
  - Base Size: `1rem` (16px).
- **Display / Headings (`--font-display`):** `Plus Jakarta Sans`. 
  - Weight: 700 (Bold) to 800 (ExtraBold).
  - Tracking: Tight (`-0.02em` to `-0.04em`).
  - H1 Size: `3.5rem` to `5rem` (Responsive).
  - H2 Size: `2.5rem` to `3.5rem`.

### 2.3. Spacing Scale (rem)
- We use a strict 4pt baseline grid (Tailwind default).
- `sm`: `0.5rem` (8px)
- `md`: `1rem` (16px) - Standard padding.
- `lg`: `2rem` (32px) - Component gaps.
- `xl`: `4rem` (64px) - Section padding.
- `2xl`: `8rem` (128px) - Massive hero breathing room.

---

## 3. Materials & Effects

### 3.1. The Glassmorphism Formula
All floating cards (Navbar, Pricing Tiers, Dialogs) MUST use this exact composition:
- **Background:** `rgba(255, 255, 255, 0.03)`
- **Border:** `1px solid rgba(255, 255, 255, 0.05)`
- **Backdrop Filter:** `blur(24px)`
- **Box Shadow:** `0 8px 32px 0 rgba(0, 0, 0, 0.37)`

### 3.2. The Gold Text Gradient
Used ONLY for key highlight words (e.g., "Revenue Engine").
- **CSS:** `linear-gradient(135deg, var(--gold-light) 0%, var(--gold-primary) 50%, var(--gold-dark) 100%)`
- **Clipping:** `text` (fill color transparent).

### 3.3. Atmospheric Glows (Background)
- Two massive, extremely faint radial gradients fixed in the background.
- Top Center: `radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 50%)`
- Bottom Right: `radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 50%)`

---

## 4. Interactive States (UX)

### 4.1. Buttons & CTAs
- **Rest:** Primary Gold background, black text.
- **Hover:** Background brightens by 10%, slight Y-axis translation (`-2px`), shadow intensity increases.
- **Active (Click):** Scale down (`0.98`), translation resets to `0px`.

### 4.2. Cards
- **Hover:** Border opacity increases from `0.05` to `0.15`. Subtle inner glow (`inset 0 0 20px rgba(212, 175, 55, 0.05)`).
