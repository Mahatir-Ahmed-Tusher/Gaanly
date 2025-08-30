# 🚀 Vercel Environment Variables Checklist for Gaanly

## **🔑 MANDATORY Environment Variables**

### **Authentication**
```env
NEXTAUTH_SECRET=nXaGgadJGXsqUvJGVg8xGgkx7isScduZEClSRDj/3yE=
NEXTAUTH_URL=https://your-domain.vercel.app
JWT_SECRET=another-secure-random-string-here
```

### **Database**
```env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/gaanly
DB_NAME=gaanly_database
```

### **Google OAuth**
```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### **Email (Gmail SMTP)**
```env
MAIL_HOST=smtp.gmail.com
MAIL_USER=mahatirtusher@gmail.com
MAIL_PASS=kmopkigchgndtstq
```

### **External API**
```env
NEXT_PUBLIC_SAAVN_API=https://saavn.dev
```

## **📋 How to Add in Vercel Dashboard**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **Gaanly project**
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in left sidebar
5. **Add each variable one by one**
6. Set **Environment** to **"Production"** (and optionally "Preview" & "Development")
7. Click **"Save"**

## **✅ Verification Steps**

### **After Adding Variables:**
1. **Redeploy** your app
2. **Check deployment logs** for any errors
3. **Test authentication** on live site
4. **Verify user image** appears in sidebar
5. **Check personalized greetings** work

### **Common Issues:**
- ❌ **"Environment variable not found"** → Variable not added to Vercel
- ❌ **"Authentication failed"** → Check NEXTAUTH_SECRET and JWT_SECRET
- ❌ **"Database connection failed"** → Verify MONGODB_URL
- ❌ **"Email not sending"** → Check MAIL_PASS has no spaces
- ❌ **"User image not showing"** → Session callback fixed in code

## **🔧 Recent Fixes Applied**

1. ✅ **Fixed session callback** in NextAuth config
2. ✅ **Updated JWT secret references** across all API routes
3. ✅ **Fixed Profile component** to use correct session structure
4. ✅ **Ensured consistent secret usage** (NEXTAUTH_SECRET || JWT_SECRET)

## **🚨 Important Notes**

- **Environment variables in Vercel are separate** from local `.env.local`
- **Must add manually** in Vercel dashboard
- **Redeploy required** after adding variables
- **Check deployment logs** for any errors
- **Test on live site** after deployment

## **📞 Support**

If authentication still doesn't work after following this checklist:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Ensure Google OAuth credentials are correct
4. Test database connection
5. Check email SMTP settings
