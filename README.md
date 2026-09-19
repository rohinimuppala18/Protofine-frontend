# FarmBridge

> "Your harvest shouldn't have to search for its market."

An interactive, responsive one-page product pitch built for the Protofine.ai Frontend Developer Intern practical task.

---

## One-line idea
FarmBridge connects farmers with verified buyers, transparent offers, and coordinated pickup—turning a fragmented selling journey into one clear path from harvest to buyer.

---

## Problem
Farmers with harvest ready to sell face an unpredictable and fragmented journey:
1. Inquiries are scattered across multiple manual phone calls.
2. Buyer identity and payment credibility are difficult to verify.
3. Pricing offers arrive without clear context (such as freight costs, pickup dates, or batch size requirements).
4. Transport and dock pickup are coordinated as a chaotic afterthought, frequently resulting in perishable crop deterioration.

---

## Solution
FarmBridge proposes a structured digital workflow:
- **01. List**: Log produce type, quantity, farm gate location, and availability date.
- **02. Match**: Reach verified regional commercial buyers actively seeking matching produce volume.
- **03. Connect**: Compare transparent unit pricing and volume side-by-side, confirm a deal, and lock in coordinated pickup logistics before dispatch.

---

## Target users
- **Farmers & Agricultural Producers**: Commercial and small-to-midscale growers seeking transparent price discovery, dependable buyers, and pre-arranged pickup.
- **Verified Buyers**: Institutional buyers, regional supermarket chains, and quick-commerce distribution hubs looking for reliable produce volume directly from source farms.

---

## Decision-maker
The page is tailored for a **product/investment decision-maker** evaluating whether FarmBridge deserves an initial pilot and seed resources for structured market validation.

---

## Key product decisions
1. **Disciplined Scope**: Zero speculative bloat (no artificial intelligence chatbots, fake crypto/escrow systems, or multi-role administrative dashboards).
2. **Responsible Positioning**: Avoids false claims of "eliminating all middlemen" or "guaranteeing maximum income". Instead emphasizes structured discovery, transparent terms, and coordinated transport.
3. **Hypothesis-Driven Pilot Roadmap**: Proposes a focused 5-step pilot (1 crop, 1 region, 30–50 farmers, 8–12 buyers) with explicit pilot metrics rather than fabricating historical traction.

---

## Why this design
- **Agricultural Tech Palette**: Deep forest greens (`#0F2D1F`, `#16432D`), warm off-white canvas (`#FAF9F5`), muted earth tones, and warm harvest amber accents (`#D97706`) create an authentic, grounded, and modern editorial aesthetic.
- **Visual Contrast**: Side-by-side comparison cards clearly illustrate today's fragmented selling journey versus FarmBridge's unified digital path.
- **Restraint & Dignity**: Employs generous whitespace, refined typography (Plus Jakarta Sans and Fraunces), subtle borders, and soft elevation instead of distracting neon gradients or floating blobs.

---

## Interactive experience
- **Hero Simulation**: Sequential Framer Motion lifecycle showing produce listing creation → buyer discovery → incoming offers → deal selection → coordinated pickup confirmation.
- **Interactive Marketplace Demo**:
  - Switch between harvest scenarios (e.g. Tomatoes in Hyderabad vs Red Onions in Nashik).
  - Simulate live matching with realistic state transitions.
  - Interactive buyer cards with selectable offers.
  - Dynamic deal value calculations (`Quantity × Price/kg`).
  - Readiness checkmarks for buyer verification, offer acceptance, and pickup scheduling.
- **Pilot Proposal Modal**: Accessible modal detailing the 90-day pilot execution blueprint, milestones, and success criteria.

---

## Technology
- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS with custom tokens and typography
- **Motion**: Framer Motion (respects `prefers-reduced-motion`)
- **Icons**: Lucide React
- **Architecture**: 100% client-side, zero backend dependencies, static deployment ready

---

## How to run this project on any system (Windows, macOS, Linux)

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher (`v20.x` LTS recommended). Download from [nodejs.org](https://nodejs.org/).
- **npm**: Comes bundled with Node.js (`v9.x` or `v10.x`).
- Works out-of-the-box on **Windows**, **macOS**, and **Linux**.

### 2. Copy/Transfer the project
- **If transferring as a ZIP file**: Extract the ZIP archive onto the target system (e.g. your Desktop or Documents folder).
- **If cloning via Git**:
  ```bash
  git clone <repository-url>
  cd Protofine_Rohini
  ```

### 3. Install dependencies
Open your terminal or command prompt (PowerShell, Command Prompt, macOS Terminal, or Linux Bash) inside the project folder:
```bash
npm install
```

### 4. Start development server
```bash
npm run dev
```
The terminal will display the local URL:
```text
  VITE v6.2.0  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
Open your browser and visit: **`http://localhost:5173`**

### 5. Production build & preview (Optional)
To verify the production compilation:
```bash
npm run build
npm run preview
```

### 6. Linting & Typecheck
```bash
npm run lint
```

---

### Troubleshooting Tips for Other Systems:
- **Node not found**: Ensure Node.js was added to your system PATH during installation. Run `node -v` to verify.
- **Port 5173 in use**: Vite will automatically offer port `5174` or you can specify: `npx vite --port 3000`.
- **Windows PowerShell execution policy**: If running `npm` commands is blocked, run PowerShell as Administrator and execute: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`.

---

## Demo data disclaimer
All buyer names (FreshMart Foods, UrbanGrocers, HarvestHub Retail), transaction figures, and produce quantities depicted on this page are **fictional and illustrative**. They demonstrate interface architecture, data hierarchy, and user flows. FarmBridge is presented as a product concept and is not currently operating as a licensed commercial intermediary.

---

## Accessibility
- **Semantic Structure**: Proper `header`, `main`, `section`, `footer`, and single `h1` hierarchy.
- **Keyboard Navigation**: All interactive elements (offer cards, tabs, buttons, modal) are fully focusable with visible focus indicators (`focus-visible:ring-2`).
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` by replacing animated sequences with instantaneous, accessible states.
- **Color Contrast**: Text and visual indicators exceed WCAG AA standards (4.5:1+ contrast on warm off-white and deep forest green backgrounds).
- **Responsive Layout**: Designed and verified across 320px, 375px, 768px, 1024px, 1280px, and 1440px viewports without horizontal page overflow.

---

## Deployment
FarmBridge is fully optimized for static deployment to Vercel, Netlify, or GitHub Pages:
1. Run `npm run build` to generate the static bundle in `/dist`.
2. Deploy the `/dist` directory to your host of choice.
3. No environment variables or server-side functions are required.

---

## Submission pitch

Decision-maker:
A product/investment decision-maker evaluating whether FarmBridge deserves an initial pilot.

Choice made to win them:
The page focuses the pitch on one measurable first step—proving better farmer-to-buyer discovery before attempting to digitize the entire agricultural supply chain.
