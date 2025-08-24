# Deploy BellyFull to Vercel

## Prerequisites
- GitHub account (✅ You already have the repo: `Abhilash-0322/BellyFull`)
- MongoDB Atlas account (✅ You already have this configured)
- Vercel account (free)

## Step-by-Step Deployment

### 1. Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. This will automatically give Vercel access to your repositories

### 2. Deploy from GitHub Repository

#### Option A: Using Vercel Dashboard (Recommended)
1. **Login to Vercel Dashboard**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"

2. **Import Your Repository**
   - You'll see your GitHub repositories
   - Find and select `Abhilash-0322/BellyFull`
   - Click "Import"

3. **Configure Project Settings**
   - **Project Name**: `bellyfull` (or keep default)
   - **Framework Preset**: Other
   - **Root Directory**: `./` (default)
   - **Build Command**: Leave empty (not needed for Node.js)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   MONGODB_URI = mongodb+srv://mauryaabhi2003:dOdxjglh9zXK9fHP@cluster0.6fjjfwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   NODE_ENV = production
   APP_NAME = BellyFull
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)
   - You'll get a live URL like: `https://bellyfull-xxxxx.vercel.app`

#### Option B: Using Vercel CLI
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
   cd /home/abhilash/codespace/hungerproject
   vercel
   ```

4. **Follow the prompts:**
   ```
   ? Set up and deploy "~/codespace/hungerproject"? [Y/n] y
   ? Which scope do you want to deploy to? Your Account
   ? Link to existing project? [y/N] n
   ? What's your project's name? bellyfull
   ? In which directory is your code located? ./
   ```

5. **Set Environment Variables**
   ```bash
   vercel env add MONGODB_URI
   # Paste your MongoDB URI when prompted
   
   vercel env add NODE_ENV
   # Enter: production
   
   vercel env add APP_NAME
   # Enter: BellyFull
   ```

6. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### 3. Configuration Files Already Created

Your project already includes:
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ Proper folder structure
- ✅ MongoDB Atlas connection

### 4. Important Notes

#### Environment Variables Security
- ✅ Your `.env` file is in `.gitignore` (not pushed to GitHub)
- ✅ MongoDB URI will be securely stored in Vercel's environment variables

#### Database Connection
- ✅ MongoDB Atlas works perfectly with Vercel
- ✅ No additional configuration needed
- ✅ Automatic connection pooling handled by Mongoose

#### Domain and SSL
- ✅ Vercel provides HTTPS automatically
- ✅ Custom domain can be added later in Vercel dashboard

### 5. Post-Deployment Steps

1. **Test Your Deployed Application**
   - Visit your Vercel URL
   - Test all pages: Home, Mission, Vision, Form
   - Test form submission functionality

2. **Monitor Deployment**
   - Check Vercel dashboard for deployment logs
   - Monitor function logs for any errors

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### 6. Updating Your Deployment

After making changes to your code:

```bash
# Commit changes to GitHub
git add .
git commit -m "Update: description of changes"
git push origin main
```

Vercel will automatically:
- ✅ Detect the changes
- ✅ Build and deploy the new version
- ✅ Update your live URL

### 7. Troubleshooting

#### Common Issues and Solutions:

1. **Build Fails**
   - Check that all dependencies are in `package.json`
   - Ensure `vercel.json` is properly configured

2. **Database Connection Issues**
   - Verify MongoDB URI in Vercel environment variables
   - Check MongoDB Atlas network access (allow all IPs: 0.0.0.0/0)

3. **Static Files Not Loading**
   - Ensure `public` folder structure is correct
   - Check that CSS/image paths are relative

4. **Function Timeout**
   - Vercel free tier has 10s function timeout
   - Optimize database queries if needed

### 8. Vercel Dashboard Features

After deployment, you can:
- **Monitor Traffic**: View analytics and usage
- **View Logs**: Debug issues with function logs
- **Manage Domains**: Add custom domains
- **Environment Variables**: Update configuration
- **Deployment History**: Rollback to previous versions

### 9. Your Deployment URLs

Once deployed, your app will be available at:
- **Main URL**: `https://bellyfull-[unique-id].vercel.app`
- **Preview URLs**: For each deployment
- **Custom Domain**: (if configured)

### 10. Recommended Next Steps

1. **Deploy Now**: Follow Option A above
2. **Test Thoroughly**: Check all functionality
3. **Share the URL**: Your app will be live!
4. **Monitor**: Keep an eye on Vercel dashboard

---

## Quick Deploy Summary

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `Abhilash-0322/BellyFull`
3. Add environment variables (MONGODB_URI, NODE_ENV, APP_NAME)
4. Click Deploy
5. Your app is live! 🚀

Your BellyFull application is ready for production deployment on Vercel!
