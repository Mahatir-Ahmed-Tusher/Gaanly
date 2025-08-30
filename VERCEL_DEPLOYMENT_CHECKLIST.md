# 🚀 Vercel Deployment Checklist for Gaanly

## ✅ **Pre-Deployment Fixes Applied**

1. **✅ Fixed NextAuth Secret Consistency**: All routes now use `NEXTAUTH_SECRET` only
2. **✅ Removed Mixed Authentication**: Eliminated conflicts between NextAuth and custom JWT
3. **✅ Updated API Routes**: All authentication routes now use consistent token verification

## 🔑 **Required Environment Variables**

### **Add these in Vercel Dashboard → Settings → Environment Variables:**

```env
# Authentication
NEXTAUTH_SECRET=your-32-character-secret-here
NEXTAUTH_URL=https://your-domain.vercel.app

# Database
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/gaanly
DB_NAME=gaanly_database

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email (Gmail SMTP)
MAIL_HOST=smtp.gmail.com
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password

# External API
NEXT_PUBLIC_SAAVN_API=https://saavn.dev
```

## 🔧 **Google OAuth Setup**

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Select your project**
3. **Go to APIs & Services → Credentials**
4. **Edit your OAuth 2.0 Client ID**
5. **Add Authorized redirect URIs:**
   - `https://your-domain.vercel.app/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/google` (for local testing)

## 🗄️ **MongoDB Atlas Setup**

1. **Go to [MongoDB Atlas](https://cloud.mongodb.com/)**
2. **Select your cluster**
3. **Go to Network Access**
4. **Add IP Address:**
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - This allows Vercel to connect

## 📋 **Deployment Steps**

### **1. Push to GitHub**
```bash
git add .
git commit -m "Fix authentication for Vercel deployment"
git push origin main
```

### **2. Deploy on Vercel**
1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Import your GitHub repository**
3. **Configure project settings:**
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `.next`

### **3. Add Environment Variables**
1. **In Vercel project dashboard**
2. **Go to Settings → Environment Variables**
3. **Add each variable from the list above**
4. **Set Environment to "Production"**
5. **Click "Save"**

### **4. Redeploy**
1. **Go to Deployments tab**
2. **Click "Redeploy" on latest deployment**
3. **Wait for build to complete**

## ✅ **Post-Deployment Verification**

### **Test These Features:**

1. **✅ User Registration**
   - Go to `/signup`
   - Create new account
   - Verify email confirmation

2. **✅ User Login**
   - Go to `/login`
   - Login with credentials
   - Check session persistence

3. **✅ Google OAuth**
   - Click "Sign in with Google"
   - Complete OAuth flow
   - Verify user creation

4. **✅ User Profile**
   - Check user image appears in sidebar
   - Verify username and email display
   - Test logout functionality

5. **✅ Favourites System**
   - Add songs to favourites
   - Check favourites page
   - Verify data persistence

6. **✅ API Routes**
   - Test `/api/userInfo`
   - Test `/api/favourite`
   - Check for authentication errors

## 🚨 **Common Issues & Solutions**

### **Issue: "Environment variable not found"**
**Solution:** Double-check all environment variables are added to Vercel

### **Issue: "Google OAuth redirect URI mismatch"**
**Solution:** Update Google Console with correct Vercel domain

### **Issue: "Database connection failed"**
**Solution:** Check MongoDB Atlas Network Access settings

### **Issue: "Authentication failed"**
**Solution:** Verify NEXTAUTH_SECRET is properly set

### **Issue: "User image not showing"**
**Solution:** Check session callback in NextAuth config

## 📞 **Debugging Steps**

1. **Check Vercel deployment logs** for errors
2. **Verify environment variables** are set correctly
3. **Test database connection** from Vercel functions
4. **Check Google OAuth** redirect URIs
5. **Verify session cookies** are being set

## 🎯 **Expected Result**

After following this checklist, your authentication should work perfectly on Vercel with:
- ✅ User registration and login
- ✅ Google OAuth integration
- ✅ Session management
- ✅ User profile display
- ✅ Favourites system
- ✅ Secure API routes

---

**Need Help?** Check Vercel deployment logs and ensure all environment variables are properly configured.
