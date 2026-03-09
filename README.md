# Sobinesh S — Personal Blog (Next.js 14)

A dark, editorial-style personal blog and portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
sobinesh-blog/
├── app/
│   ├── globals.css       # Global styles, animations, custom cursor
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (composes all sections)
├── components/
│   ├── Cursor.tsx        # Custom animated cursor (client)
│   ├── Navbar.tsx        # Fixed top navigation
│   ├── Hero.tsx          # Hero section with terminal + stats
│   ├── Ticker.tsx        # Scrolling skills ticker
│   ├── FeaturedPost.tsx  # Featured article with arch diagram
│   ├── RecentPosts.tsx   # 6-post grid (client, scroll animations)
│   ├── Stack.tsx         # Tech stack icons (client, scroll animations)
│   ├── About.tsx         # Bio, experience, achievements
│   ├── Newsletter.tsx    # Email signup form (client)
│   └── Footer.tsx        # Footer with links
├── data/
│   └── content.ts        # ✏️  All your content — edit this file!
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ Customising Your Content

**All content lives in `data/content.ts`** — edit that single file to update:

- Your name, bio, email, phone, LinkedIn
- Stats (years experience, etc.)
- Ticker items (your tech stack keywords)
- Featured post
- Blog post cards (title, excerpt, tag, date)
- Stack icons
- Work experience
- Achievements & certifications

---

## 🎨 Design Features

- **Dark editorial aesthetic** with `#0d0d0d` background
- **Custom cursor** with a lagging ring effect
- **Animated ticker** scrolling your tech stack
- **Terminal animation** in hero showing your stack commands
- **Scroll-triggered fade-ins** on post cards and stack items
- **Architecture diagram** in featured post
- **Noise texture overlay** for depth
- Google Fonts: **DM Mono** (mono) + **Fraunces** (serif) + **Syne** (sans)

---

## 🚢 Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.
