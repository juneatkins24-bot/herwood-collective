# Deploying REMATCHED to Vercel

## Method 1: GitHub Desktop + Vercel Dashboard (EASIEST)

### Step 1: Push to GitHub
1. Open **GitHub Desktop**
2. Click **File** → **Add Local Repository**
3. Browse to your `rematched` folder
4. Click **Create Repository** (if prompted)
5. Add a commit message: "Initial commit - REMATCHED app"
6. Click **Commit to main**
7. Click **Publish repository**
8. Choose to keep it Private or Public
9. Click **Publish repository**

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** or **Log In** (use your GitHub account)
3. Click **Add New Project**
4. Select **Import Git Repository**
5. Find your **rematched** repo and click **Import**
6. Vercel will auto-detect Next.js settings
7. Click **Deploy**
8. Wait 1-2 minutes... 🚀
9. Click your deployment URL to see your site live!

---

## Method 2: Terminal (ALSO EASY)

### One-Time Setup
```bash
# Install Vercel CLI globally
npm i -g vercel

# Or if that fails:
npm i -g vercel --break-system-packages
```

### Deploy
```bash
# Navigate to project
cd rematched

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - What's your project's name? rematched
# - In which directory is your code located? ./
# - Want to modify settings? N

# You'll get a preview URL immediately!
```

### Deploy to Production
```bash
vercel --prod
```

---

## Method 3: Vercel CLI from GitHub Repo

If you've already pushed to GitHub:

```bash
vercel --repo https://github.com/YOUR_USERNAME/rematched
```

---

## After Deployment

### Your Live URLs
- **Preview**: `rematched-xxxxx.vercel.app`
- **Production**: `rematched.vercel.app` (or custom domain)

### Environment Variables
When you add real-time features, add these in Vercel Dashboard:
1. Go to your project on Vercel
2. Click **Settings** → **Environment Variables**
3. Add:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_PUSHER_KEY`
   - `PUSHER_SECRET`
   - `DATABASE_URL`
   - etc.

### Custom Domain
1. In Vercel Dashboard, click **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for DNS propagation (~15 min)

---

## Troubleshooting

### Build Fails?
- Check your terminal/Vercel logs for errors
- Make sure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Images Not Showing?
- Make sure images are in `/public/images/`
- Check file paths start with `/images/` not `./images/`

### Need Help?
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs

---

**EARN THAT DEPLOYMENT** 🎮
