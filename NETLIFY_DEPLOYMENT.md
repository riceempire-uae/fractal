# Fractal dApp - Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

### Option 1: One-Click Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/fractal-dapp)

### Option 2: Manual Deployment

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) installed
- Netlify account ([Sign up here](https://app.netlify.com/signup))

## 🛠️ Build Configuration

### 1. Create `netlify.toml` file

Create a `netlify.toml` file in your project root:

```toml
[build]
  publish = "out"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 2. Update `package.json`

Ensure your `package.json` has the correct build scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  }
}
```

### 3. Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_APP_NAME=Fractal dApp
NEXT_PUBLIC_APP_VERSION=1.0.0
```

For production, add these in Netlify dashboard under Site Settings > Environment Variables.

## 🚀 Deployment Steps

### Method 1: Git-based Deployment (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Initial commit for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "New site from Git"
   - Choose your Git provider
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

### Method 2: Drag & Drop Deployment

1. **Build the project locally**
   ```bash
   npm install
   npm run build
   npm run export
   ```

2. **Deploy to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Drag and drop the `out` folder to the deploy area
   - Your site will be live in minutes!

### Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=out
   ```

## ⚙️ Configuration

### Build Settings

In your Netlify dashboard, go to Site Settings > Build & Deploy > Build Settings:

- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: `18`

### Environment Variables

Add these in Site Settings > Environment Variables:

```
NODE_VERSION=18
NEXT_PUBLIC_APP_NAME=Fractal dApp
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Custom Domain (Optional)

1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Configure DNS settings as instructed
4. Enable HTTPS (automatic with Netlify)

## 🔧 Troubleshooting

### Common Issues

#### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Styled Components Hydration Error
Add to `next.config.js`:
```javascript
module.exports = {
  compiler: {
    styledComponents: true,
  },
}
```

#### 404 Errors on Refresh
Ensure you have the redirect rule in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Performance Optimization

1. **Enable Build Plugins**
   - Go to Site Settings > Build & Deploy > Build plugins
   - Add "Next.js Cache" plugin

2. **Optimize Images**
   - Use Next.js Image component
   - Enable WebP format

3. **Enable Compression**
   - Add to `netlify.toml`:
   ```toml
   [[headers]]
     for = "/*"
     [headers.values]
       Content-Encoding = "gzip"
   ```

## 📊 Monitoring

### Analytics
- Enable Netlify Analytics in Site Settings
- Monitor page views, unique visitors, and performance

### Functions (if needed)
- Go to Functions tab in Netlify dashboard
- Deploy serverless functions if required

## 🔒 Security

### Headers Configuration
The `netlify.toml` includes security headers:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### HTTPS
- Automatically enabled by Netlify
- Free SSL certificate provided

## 🚀 Continuous Deployment

### Automatic Deploys
- Every push to main branch triggers a new deployment
- Preview deployments for pull requests
- Branch-specific deployments

### Deploy Hooks
Create deploy hooks for manual deployments:
1. Go to Site Settings > Build & Deploy > Deploy hooks
2. Create a new hook
3. Use the URL to trigger deployments

## 📱 Mobile Optimization

Your dApp is already optimized for mobile with:
- Responsive design
- Touch-friendly interface
- Fast loading times
- PWA capabilities (if implemented)

## 🌐 Global CDN

Netlify provides:
- Global CDN for fast loading worldwide
- Edge caching
- Automatic image optimization
- Form handling

## 📈 Performance Metrics

Monitor these metrics in Netlify:
- Build time
- Deploy time
- Page load speed
- Core Web Vitals
- Bandwidth usage

## 🔄 Updates and Maintenance

### Updating the Site
1. Make changes to your code
2. Push to Git repository
3. Netlify automatically builds and deploys
4. Changes go live in 1-2 minutes

### Rollback
- Go to Deploys tab
- Click "Trigger deploy" on a previous deployment
- Site rolls back instantly

## 📞 Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Fractal dApp Issues](https://github.com/yourusername/fractal-dapp/issues)

## 🎉 Success!

Your Fractal dApp is now live on Netlify! 

**Next Steps:**
1. Test all functionality
2. Set up custom domain (optional)
3. Configure analytics
4. Monitor performance
5. Set up continuous deployment

---

**Deployment URL**: `https://your-site-name.netlify.app`

**Admin URL**: `https://app.netlify.com/sites/your-site-name`
