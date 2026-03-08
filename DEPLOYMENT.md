# 🚀 Deployment Guide - Bini Hemodialysis Technology Website

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Vercel Deployment Steps](#vercel-deployment-steps)
- [Environment Variables](#environment-variables)
- [Custom Domain Setup](#custom-domain-setup)
- [Post-Deployment Checklist](#post-deployment-checklist)
- [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

### Required Accounts & Tools
- **Vercel Account**: [Sign up at vercel.com](https://vercel.com)
- **GitHub Account**: [Sign up at github.com](https://github.com)
- **Node.js**: Version 18+ installed locally
- **Git**: For version control

### Project Structure Check
Ensure your project has this structure:
```
bini-hemodialysis-technology-main/
├── public/
│   ├── product-jpeg.jpg
│   ├── s-l1200.jpg
│   ├── sitemap.xml
│   ├── robots.txt
│   └── manifest.json
├── src/
├── package.json
├── vite.config.js
└── index.html
```

## 🚀 Vercel Deployment Steps

### Step 1: Prepare Your Repository

1. **Initialize Git Repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Medical Technology Website"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name: `bini-hemodialysis-technology`
   - Description: `Professional biomedical engineering and hemodialysis technology website`
   - Set to Public or Private
   - Click "Create repository"

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/bini-hemodialysis-technology.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

#### Method A: GitHub Integration (Recommended)

1. **Connect Vercel to GitHub**
   - Login to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your `bini-hemodialysis-technology` repository
   - Click "Import"

2. **Configure Project Settings**
   ```json
   {
     "name": "bini-hemodialysis-technology",
     "framework": "vite",
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install"
   }
   ```

3. **Environment Variables** (if needed)
   - Add any environment variables in the deployment settings
   - Examples: `API_URL`, `CONTACT_EMAIL`, etc.

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be available at: `https://bini-hemodialysis-technology.vercel.app`

#### Method B: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   cd bini-hemodialysis-technology-main
   vercel --prod
   ```

4. **Follow Prompts**
   - Set up and link to your Vercel account
   - Confirm project settings
   - Deploy to production

### Step 3: Verify Deployment

1. **Check Live Site**
   - Visit your Vercel URL
   - Test all pages and functionality
   - Verify images load correctly

2. **Check Build Logs**
   - Go to Vercel Dashboard → Your Project
   - Review deployment logs for any errors

## ⚙️ Environment Variables

### Optional Variables for Production
```bash
# Contact Form (if implementing backend)
VITE_CONTACT_EMAIL=your-email@example.com
VITE_RECAPTCHA_SITE_KEY=your-recaptcha-key

# Analytics (if using)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_HOTJAR_ID=XXXXXX

# API Keys (if needed)
VITE_API_URL=https://api.yourdomain.com
```

### Setting Variables in Vercel
1. Go to Project Settings → Environment Variables
2. Add variable name and value
3. Select environments (Production, Preview, Development)
4. Save and redeploy

## 🌐 Custom Domain Setup

### Option 1: Vercel Subdomain
- Default: `your-project-name.vercel.app`
- Automatically configured

### Option 2: Custom Domain

1. **Purchase Domain** (if you don't have one)
   - Recommended registrars: Namecheap, GoDaddy, Cloudflare

2. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Click "Add" → Enter your domain (e.g., `bini-hemodialysis.com`)
   - Follow DNS instructions provided by Vercel

3. **Update DNS Records**
   - Vercel will provide specific DNS records
   - Add them to your domain registrar
   - Wait for propagation (usually 5-30 minutes)

4. **SSL Certificate**
   - Vercel automatically provides free SSL certificates
   - HTTPS will be enabled automatically

## ✅ Post-Deployment Checklist

### Performance & SEO
- [ ] Google PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] GTmetrix: [gtmetrix.com](https://gtmetrix.com)
- [ ] Google Search Console setup
- [ ] Submit sitemap to Google

### Functionality Testing
- [ ] All navigation links work
- [ ] Images load correctly
- [ ] Contact form functions (if implemented)
- [ ] Mobile responsive design
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

### SEO Verification
- [ ] Meta tags display correctly
- [ ] Open Graph tags work on social media
- [ ] Structured data validates: [richresults.test](https://richresults.test)
- [ ] robots.txt accessible: `yourdomain.com/robots.txt`
- [ ] sitemap.xml accessible: `yourdomain.com/sitemap.xml`

### Analytics Setup
- [ ] Google Analytics 4
- [ ] Vercel Analytics (built-in)
- [ ] Search Console integration

## 🛠️ Troubleshooting

### Common Issues & Solutions

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for missing dependencies
npm audit

# Local build test
npm run build
```

#### Image Loading Issues
- Verify image paths start with `/` (not `./` or absolute paths)
- Check case sensitivity in filenames
- Ensure images are in `public/` folder
- Verify file extensions are correct

#### Route Issues
- Ensure `vite.config.js` has correct base path if using subdirectory
- Check `index.html` has correct base href
- Verify all internal links use `#` for single-page routing

#### Performance Issues
- Optimize images (compress before upload)
- Enable Vercel Analytics for performance monitoring
- Check bundle size: `npm run build` and review dist folder

### Getting Help

#### Vercel Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Community Forum](https://github.com/vercel/vercel/discussions)

#### Project-Specific Resources
- This project uses: React 19 + Vite
- React Documentation: [react.dev](https://react.dev)
- Vite Documentation: [vitejs.dev](https://vitejs.dev)

## 🔄 Continuous Deployment

### Automatic Deployments
Vercel automatically deploys when you:
1. Push to `main` branch → Production
2. Push to other branches → Preview deployments
3. Create pull requests → Preview URLs

### Manual Deployments
```bash
# Deploy latest changes
vercel --prod

# Deploy specific commit
vercel --prod --commit <commit-hash>
```

## 📊 Monitoring & Maintenance

### Vercel Analytics
- Real-time performance metrics
- Visitor analytics
- Error tracking
- Core Web Vitals

### Regular Maintenance
- Update dependencies: `npm update`
- Monitor build times
- Check for security vulnerabilities: `npm audit`
- Backup your content regularly

## 🎉 Success Metrics

Your deployment is successful when:
- ✅ Site loads at your custom domain
- ✅ All pages and images display correctly
- ✅ Mobile version works properly
- ✅ SEO meta tags are present
- ✅ Performance score is 90+ on PageSpeed
- ✅ No console errors in browser

---

## 📞 Support

For project-specific issues:
1. Check this deployment guide first
2. Review Vercel deployment logs
3. Test locally: `npm run dev`
4. Check GitHub issues for similar problems

**Happy Deployment! 🚀**

*Last Updated: March 2026*
