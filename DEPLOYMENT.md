# 🚀 Deployment Guide for itzmrz.xyz

## Option 1: Vercel (Recommended)

### Step 1: Prepare for Deployment
```bash
# Make sure you're in the project root
cd "C:\Users\mahar\Downloads\Retro CRT Terminal Website"

# Build the project
npm run build
```

### Step 2: Deploy with Vercel
```bash
# Login to Vercel (will open browser)
vercel login

# Deploy the project
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your personal account
# - Link to existing project? No
# - Project name? retro-crt-terminal or whatever you prefer
# - Directory? ./ (current directory)
# - Override settings? No
```

### Step 3: Add Custom Domain
```bash
# After successful deployment, add your domain
vercel domains add itzmrz.xyz
vercel alias [your-deployment-url] itzmrz.xyz
```

---

## Option 2: Netlify (Alternative)

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Deploy
```bash
# Build first
npm run build

# Login and deploy
netlify login
netlify deploy --prod --dir=build
```

### Step 3: Configure Domain
- Go to Netlify dashboard
- Add custom domain: itzmrz.xyz
- Follow DNS configuration instructions

---

## Option 3: GitHub Pages

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/retro-crt-terminal.git
git push -u origin main
```

### Step 2: Configure GitHub Pages
1. Go to repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: main / build folder
4. Add custom domain: itzmrz.xyz

---

## Option 4: Traditional Web Hosting

### Step 1: Build the project
```bash
npm run build
```

### Step 2: Upload build folder
1. Connect to your web hosting via FTP/SFTP
2. Upload everything inside the `build/` folder to your domain's public_html folder
3. Ensure index.html is in the root

---

## DNS Configuration

Regardless of the platform, you'll need to configure DNS:

### For Vercel/Netlify:
- Add CNAME record: `www` → `your-deployment-url`
- Add A record: `@` → Platform's IP addresses

### For Traditional Hosting:
- Point A record to your hosting provider's IP
- Add CNAME for www subdomain

---

## Quick Start (Recommended: Vercel)

Run these commands in order:
```bash
cd "C:\Users\mahar\Downloads\Retro CRT Terminal Website"
npm run build
vercel login
vercel
```

Then add your custom domain in the Vercel dashboard!
