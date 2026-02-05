# 🚀 GitHub Deployment Guide

## Step-by-Step: Push to GitHub

### Prerequisites
- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- GitHub account ([Sign up](https://github.com/signup))

---

## 📝 Step 1: Create GitHub Repository

1. **Go to GitHub**
   - Visit [github.com](https://github.com)
   - Click the **"+"** icon (top right)
   - Select **"New repository"**

2. **Configure Repository**
   - **Repository name:** `promptcraft`
   - **Description:** "AI-powered prompt engineering platform using Google Gemini"
   - **Visibility:** Choose Public or Private
   - ❌ **DO NOT** check "Add a README file" (we already have one)
   - Click **"Create repository"**

---

## 💻 Step 2: Prepare Your Project

1. **Open Terminal/Command Prompt**
   - **Windows:** Press `Win + R`, type `cmd`, press Enter
   - **Mac:** Press `Cmd + Space`, type `terminal`, press Enter
   - **Linux:** Press `Ctrl + Alt + T`

2. **Navigate to Your Project Folder**
   ```bash
   cd path/to/PROMPTCRAFT-GITHUB
   ```
   
   Example:
   ```bash
   # Windows
   cd C:\Users\YourName\Desktop\PROMPTCRAFT-GITHUB
   
   # Mac/Linux
   cd ~/Desktop/PROMPTCRAFT-GITHUB
   ```

---

## 🔧 Step 3: Initialize Git

Run these commands **one by one**:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: PromptCraft v1.0"

# Rename branch to main (if needed)
git branch -M main
```

---

## 🌐 Step 4: Connect to GitHub

**Replace `yourusername` with your actual GitHub username:**

```bash
git remote add origin https://github.com/yourusername/promptcraft.git
```

**Example:**
```bash
git remote add origin https://github.com/john-doe/promptcraft.git
```

---

## ⬆️ Step 5: Push to GitHub

```bash
git push -u origin main
```

**If asked for credentials:**
- **Username:** Your GitHub username
- **Password:** Your GitHub Personal Access Token ([Create one here](https://github.com/settings/tokens))

---

## ✅ Step 6: Verify Upload

1. Go to your GitHub repository: `https://github.com/yourusername/promptcraft`
2. You should see all your files!

---

## 🌍 Bonus: Deploy to GitHub Pages

### Enable GitHub Pages:

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes
7. Your site will be live at: `https://yourusername.github.io/promptcraft/`

---

## 🔄 Future Updates

When you make changes to your code:

```bash
# Check what changed
git status

# Add changes
git add .

# Commit with a message
git commit -m "Description of what you changed"

# Push to GitHub
git push
```

---

## 🆘 Common Issues

### Issue 1: "git: command not found"
**Solution:** Install Git from [git-scm.com](https://git-scm.com/downloads)

### Issue 2: "Permission denied"
**Solution:** Create a Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name and select "repo" scope
4. Copy the token and use it as your password

### Issue 3: "Repository not found"
**Solution:** Double-check your repository name and username in the remote URL

### Issue 4: "Failed to push"
**Solution:** Pull first, then push:
```bash
git pull origin main --rebase
git push
```

---

## 📋 Quick Reference

### Clone your repository (on another computer):
```bash
git clone https://github.com/yourusername/promptcraft.git
cd promptcraft
```

### Create a new branch:
```bash
git checkout -b feature-name
```

### Switch branches:
```bash
git checkout main
```

### View commit history:
```bash
git log --oneline
```

---

## 🎉 You're Done!

Your project is now on GitHub! 🎊

