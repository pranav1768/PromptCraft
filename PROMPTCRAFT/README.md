# PromptCraft ✦

> AI-powered prompt engineering platform using Google Gemini


## 🚀 Features

- **AI-Powered Generation** - Uses Google Gemini 3 Flash for intelligent prompt creation
- **Customizable Options** - Choose tone, format, and complexity levels
- **Smart Analysis** - Get detailed breakdowns of your generated prompts
- **Clean UI** - Minimal, professional dark theme interface
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Easy to Use** - Simple configuration with instant results

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/promptcraft.git
   cd promptcraft
   ```

2. **Add your API key**
   - Open `js/config.js`
   - Replace `YOUR_API_KEY_HERE` with your Google Gemini API key:
   ```javascript
   GEMINI_API_KEY: 'your-actual-api-key-here'
   ```

3. **Run locally**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. **Access the app**
   - Open `http://localhost:8000` in your browser

## 📁 Project Structure

```
promptcraft/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── config.js       # API configuration
│   └── app.js          # React application
├── assets/
│   └── screenshot.png  # App screenshot (add yours)
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## ⚙️ Configuration

Edit `js/config.js` to customize:

```javascript
const CONFIG = {
    GEMINI_API_KEY: 'your-api-key-here',
    GEMINI_MODEL: 'gemini-3-flash-preview'  // Or 'gemini-pro'
};
```

## 🎯 Usage

1. **Describe your task** - What do you need the AI to do?
2. **Choose options** - Select tone, format, and complexity
3. **Generate** - Click "Generate Prompt"
4. **Copy & Use** - Copy the optimized prompt for your AI tools

## 🌐 Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "main" branch and "/ (root)" folder
4. Click "Save"
5. Your site will be live at `https://yourusername.github.io/promptcraft/`

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Click "Deploy site"

### Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Connect to your GitHub repository
5. Click "Deploy"

## 🔐 Security Note

⚠️ **Important:** Never commit your API key to public repositories!

- Use environment variables for production
- Keep `config.js` in `.gitignore` if sharing publicly
- For public repos, provide a `config.example.js` template

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 💡 Tips

- Use descriptive task descriptions for better prompts
- Experiment with different tones and formats
- The "Include Examples" option adds practical demonstrations
- Try different complexity levels based on your needs

## 🐛 Troubleshooting

**API Key Not Working?**
- Verify your key at [Google AI Studio](https://aistudio.google.com/app/apikey)
- Check if the key is correctly added to `config.js`
- Ensure you're not hitting rate limits (60 requests/min)

**Prompt Not Generating?**
- Check browser console (F12) for errors
- Verify internet connection
- Try a different Gemini model in config

**CORS Issues?**
- Use a local server instead of opening HTML directly
- Try: `python -m http.server` or `npx serve`

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Google Gemini](https://gemini.google.com/)
- Font: [Inter](https://fonts.google.com/specimen/Inter)

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/promptcraft](https://github.com/yourusername/promptcraft)

---

**Made with ✦ by developers, for developers**
