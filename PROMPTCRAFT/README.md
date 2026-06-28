# PromptCraft ✦ v2

AI-powered prompt engineering platform using Google Gemini — enhanced with history, favorites, export, and deep customization.

## ✨ What's new in v2

- **Live Quality Meter** — real-time scoring as you type your task description
- **8 built-in templates** — Code Review, Blog Post, Data Analysis, Email, Learning Plan, Marketing, API Docs, Brainstorm
- **Prompt history** — last 30 prompts saved locally, click to restore any
- **Favorites** — star your best prompts and access them instantly
- **Export** — copy to clipboard, download as `.txt` or `.md`
- **7 tone options** — Professional, Casual, Technical, Creative, Academic, Persuasive, Friendly
- **6 output formats** — Paragraph, Bullet Points, Step-by-Step, Chain of Thought, Few-Shot, Structured Sections
- **4 complexity levels** — Basic → Intermediate → Advanced → Expert
- **Include toggles** — Role/Context, Examples, Constraints, Output Format spec
- **4 Gemini models** — 2.0 Flash, 1.5 Flash, 1.5 Pro, 1.0 Pro
- **Proper Vite build** — fast, deployable to Netlify/Vercel in one click

## 🛠 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Get a Gemini API key

1. Visit [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Click **Create API Key** (free tier available)
3. Copy the key

### 3. Add the API key

Open the app and click ⚙ Settings in the top-right. Paste your key there.

Your key is saved to `localStorage` only — it never leaves your browser.

### 4. Run locally

```bash
npm run dev
```

Then open `http://localhost:5173`

## 🚀 Deploy to Netlify (recommended)

1. Push this folder to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Connect your GitHub repo
4. Netlify auto-detects Vite — build command `npm run build`, publish dir `dist`
5. Click **Deploy**

Your site is live at `https://your-site.netlify.app`

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select the repo — Vercel auto-detects Vite
4. Click **Deploy**

## 📁 Project structure

```
promptcraft/
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Header.jsx
    │   ├── Sidebar.jsx
    │   ├── TemplatesPanel.jsx
    │   ├── HistoryPanel.jsx
    │   ├── FavoritesPanel.jsx
    │   ├── PromptForm.jsx
    │   ├── QualityMeter.jsx
    │   ├── PromptOutput.jsx
    │   ├── SettingsModal.jsx
    │   └── Toast.jsx
    ├── hooks/
    │   ├── useHistory.js
    │   ├── useFavorites.js
    │   └── useToast.js
    ├── services/
    │   └── gemini.js
    └── data/
        └── options.js
```

## 🔐 Security

Your API key is stored in `localStorage` only. For public deployments, consider adding a backend proxy so the key never ships in the client bundle.

---

Made by Pranav Karke — PromptCraft v2
