# PromptCraft ✦ v2

AI-powered prompt engineering platform using Google Gemini — now with a beautiful moon-lit landing screen, history, favorites, export, and deep customization.

## ✨ Features

- **Ruixen Moon Chat landing page** — stunning background, quick-action pills, auto-transitions to PromptCraft
- **Live Quality Meter** — real-time task scoring as you type
- **8 built-in templates** — Code Review, Blog Post, Data Analysis, Email, Learning Plan, Marketing, API Docs, Brainstorm
- **History** — last 30 prompts saved locally, click any to restore
- **Favorites** — star prompts and access them instantly
- **Export** — copy, download as `.txt` or `.md`
- **7 tones / 6 formats / 4 complexity levels / 4 lengths**
- **Include toggles** — Role, Examples, Constraints, Output Format
- **4 Gemini models** — 2.0 Flash, 1.5 Flash, 1.5 Pro, 1.0 Pro

## 🛠 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Get a free Gemini API key

Visit [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) → Create API Key

### 3. Run locally

```bash
npm run dev
# http://localhost:5173
```

Click ⚙ Settings → paste your Gemini key → start generating.

## 🚀 Deploy

### Netlify (recommended)

1. Push to GitHub
2. [app.netlify.com](https://app.netlify.com) → Add new site → Import from GitHub
3. Auto-detected: build command `npm run build`, publish dir `dist`
4. Deploy ✓

### Vercel

1. Push to GitHub
2. [vercel.com](https://vercel.com) → Import → auto-detects Vite → Deploy ✓

## 📁 Structure

```
promptcraft/
├── tailwind.config.js     ← Tailwind (preflight disabled)
├── postcss.config.js
├── vite.config.js         ← @ alias for /src
└── src/
    ├── App.jsx            ← Landing → PromptCraft flow
    ├── index.css          ← Tailwind + custom design tokens
    ├── lib/utils.js       ← cn() helper
    ├── components/
    │   ├── ui/
    │   │   ├── ruixen-moon-chat.jsx  ← Landing screen
    │   │   ├── button.jsx            ← shadcn Button
    │   │   └── textarea.jsx          ← shadcn Textarea
    │   ├── Header, Sidebar, PromptForm, PromptOutput ...
    ├── hooks/  useHistory · useFavorites · useToast
    ├── services/gemini.js
    └── data/options.js
```

---

Made by Pranav Karke — PromptCraft v2
