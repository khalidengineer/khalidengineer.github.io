# MD.KHALID — Luxury Dark Developer Portfolio

An ultra-premium, dark luxury developer portfolio website recreated in **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **Three.js / React Three Fiber** with 99%+ visual fidelity to the original reference design.

![Portfolio Preview](/images/profile/hero-portrait.webp)

---

## 🌟 Key Features

- **Pixel-Perfect Visual Fidelity**: Exact reproduction of the reference dark luxury aesthetic:
  - Deep dark surfaces (`#070706`, `#11110E`, `#141410`)
  - Brushed gold highlights (`#F4B83F`, `#FFC95A`)
  - Precise 1220px container hierarchy, rounded card contours, and typography balance
- **Cinematic 3D WebGL Layer**:
  - React Three Fiber (`@react-three/fiber` & Three.js)
  - 3D Gold Orbital Ring tilted behind the hero portrait with dynamic emissive lighting
  - Floating 3D golden particle cloud responding subtly to mouse movement
  - Full pointer-events passthrough to avoid obstructing interactive UI elements
- **Smooth Momentum Scrolling**:
  - Global integration with [Lenis](https://lenis.darkroom.engineering/) for cinematic wheel and touch physics
  - Smooth scroll-to-top button in footer
- **Interactive Micro-Interactions**:
  - Custom desktop gold trailing cursor with magnetic expansion on interactive links & buttons
  - Spring-physics `MagneticButton` for primary CTA triggers
  - `TiltCard` with cursor glare and 3D angle response
  - Subtle gold border illumination and scale-up on card hover
- **Complete Working Multi-Page Experience**:
  - `/` (Comprehensive single-page experience containing all major sections)
  - `/about` (In-depth biography, photo, signature, principles, and resume download)
  - `/skills` (Interactive tech arsenal with category filtering and animated proficiency gauges)
  - `/services` (Detailed capability matrix and deliverables for all 4 core services)
  - `/projects` (Project gallery)
  - `/projects/[slug]` (Case study pages for Analytics Dashboard, SaaS Landing Page, E-Commerce Platform)
  - `/experience` (Horizontal interactive timeline on desktop, vertical on mobile)
  - `/testimonials` (Client feedback cards with 5-star ratings and carousel navigation)
  - `/contact` (Interactive validated form with idle, loading, error, and confetti success states)
  - `/privacy` & `/terms` (Polished legal documentation)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Motion**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Celebration FX**: Canvas Confetti

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                # Root layout with Lenis, CustomCursor, and Noise texture
│   ├── page.tsx                  # Home page assembling all major sections
│   ├── globals.css               # Cinematic gradients, glassmorphism, and Lenis styles
│   ├── loading.tsx               # Minimalist gold logo progress screen
│   ├── not-found.tsx             # 404 handler
│   ├── error.tsx                 # Error boundary
│   ├── about/page.tsx            # Dedicated About page
│   ├── skills/page.tsx           # Skills & Stack page with category filters
│   ├── services/page.tsx         # Comprehensive services breakdown
│   ├── projects/
│   │   ├── page.tsx              # Projects gallery
│   │   └── [slug]/page.tsx       # Dynamic case study pages
│   ├── experience/page.tsx       # Career timeline page
│   ├── testimonials/page.tsx     # Client endorsements page
│   ├── contact/page.tsx          # Dedicated contact page
│   ├── privacy/page.tsx          # Privacy policy
│   └── terms/page.tsx            # Terms of service
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Fixed glass navbar with gold active dot & mobile drawer
│   │   └── Footer.tsx            # Legal links, copyright, and Lenis scroll-to-top
│   ├── hero/
│   │   ├── Hero.tsx              # Hero container matching reference composition
│   │   ├── AvailabilityBadge.tsx # Glowing green pulse badge
│   │   └── StatsCard.tsx         # Floating 3-metric glass card
│   ├── about/
│   │   └── AboutSection.tsx      # About card with photo, gold signature & CV button
│   ├── skills/
│   │   ├── SkillsSection.tsx     # 15 tech cards + learning badge
│   │   └── SkillCard.tsx         # Tech card with authentic brand logos
│   ├── services/
│   │   ├── ServicesSection.tsx   # 4 services cards
│   │   └── ServiceCard.tsx       # Service card with icon and learn more link
│   ├── projects/
│   │   ├── ProjectsSection.tsx   # 3 featured projects
│   │   └── ProjectCard.tsx       # Interactive card with image zoom and link
│   ├── experience/
│   │   ├── ExperienceSection.tsx # Milestone section
│   │   └── ExperienceTimeline.tsx# Horizontal desktop & vertical mobile timeline
│   ├── testimonials/
│   │   ├── TestimonialsSection.tsx # Testimonials with carousel arrows
│   │   └── TestimonialCard.tsx   # Client quote card with 5 gold stars
│   ├── contact/
│   │   ├── ContactSection.tsx    # 3-column contact layout
│   │   └── ContactForm.tsx       # Form with validation and confetti
│   ├── 3d/
│   │   ├── HeroCanvas.tsx        # Isolated dynamic R3F Canvas
│   │   ├── GoldOrbitalRing.tsx   # 3D torus orbit ring with emissive gold material
│   │   └── FloatingParticles.tsx # Floating particles cloud
│   └── ui/
│       ├── MagneticButton.tsx    # Spring physics button interaction
│       ├── CustomCursor.tsx      # Desktop gold dot and trailing ring cursor
│       ├── TiltCard.tsx          # 3D subtle tilt card wrapper
│       ├── SectionHeader.tsx     # Numbered pill badge
│       └── SmoothScroll.tsx      # Lenis smooth scroll provider
├── lib/
│   ├── data.ts                   # Central typed portfolio data store
│   ├── animations.ts             # Framer motion variants
│   └── utils.ts                  # ClassName helper
└── public/
    └── images/                   # Pixel-perfect extracted and upscaled assets
```

---

## 📄 License
© 2024 MD Khalid. All rights reserved.
