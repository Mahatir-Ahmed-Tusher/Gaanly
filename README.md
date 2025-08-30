# 🎵 Gaanly - Premium Music Streaming Platform


[![Live Demo](https://img.shields.io/badge/Live%20Demo-Gaanly.live-8B5CF6?style=for-the-badge&logo=vercel)](https://gaanly.live/)
[![GitHub Stars](https://img.shields.io/github/stars/Mahatir-Ahmed-Tusher/Gaanly?style=for-the-badge&logo=github)](https://github.com/Mahatir-Ahmed-Tusher/Gaanly)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

## About Gaanly

**Gaanly** is a cutting-edge, enterprise-grade music streaming platform that revolutionizes the way users discover, stream, and interact with music. Built with modern web technologies and powered by advanced APIs, Gaanly delivers an unparalleled music listening experience that combines innovation with user-centric design.

### Our Mission

At Gaanly, we believe music is a universal language that transcends boundaries and connects people across cultures. Our mission is to democratize music access by providing a seamless, feature-rich platform where music enthusiasts can explore, create, and share their musical journey without limitations.

### Key Features

#### 🎧 **Core Functionality**
- **High-Quality Streaming**: Crystal-clear audio streaming with adaptive bitrate
- **Intelligent Search**: Advanced search algorithms for precise music discovery
- **Personalized Experience**: AI-driven recommendations based on listening patterns
- **Cross-Platform Access**: Seamless experience across all devices and browsers

#### 🎵 **Music Management**
- **Smart Playlists**: Create and manage personalized playlists with ease
- **Favorites System**: Build your music library with one-click favorites
- **Queue Management**: Intelligent auto-queue with similar song suggestions
- **Offline Capabilities**: Download and listen to music without internet

#### **Global Reach**
- **Multi-Language Support**: Localized experience in multiple languages
- **Regional Content**: Curated music from around the world
- **Cultural Integration**: Respect for diverse musical traditions and preferences

#### 🔒 **Enterprise Features**
- **User Authentication**: Secure login with Google OAuth integration
- **Data Privacy**: GDPR-compliant data handling and user privacy
- **Scalable Architecture**: Built for high-performance and reliability
- **API Integration**: Robust backend with RESTful API endpoints

## Technology Stack

### **Frontend**
- **Next.js 14.2.1** - React framework with server-side rendering
- **Tailwind CSS** - Utility-first CSS framework for modern design
- **Redux Toolkit** - State management for complex application logic
- **React Icons** - Comprehensive icon library for enhanced UX

### **Backend**
- **Node.js** - Server-side JavaScript runtime
- **MongoDB** - NoSQL database for scalable data storage
- **Mongoose** - MongoDB object modeling for Node.js
- **NextAuth.js** - Complete authentication solution

### **Infrastructure**
- **Vercel** - Global deployment and hosting platform
- **MongoDB Atlas** - Cloud database service
- **Google Cloud** - OAuth and authentication services
- **SMTP Services** - Email delivery and notifications

## Screenshots

### **Home Dashboard**
![Gaanly Home Dashboard](https://github.com/himanshu8443/gaanly/assets/99420590/158bc035-463e-4ecc-93d1-e79edadf19ed.png)

### **Music Player Interface**
![Gaanly Music Player](https://github.com/himanshu8443/gaanly/assets/99420590/864aec2b-8d60-4278-a475-9f7ee6ae7680.png)

## Getting Started

### **Prerequisites**
- Node.js 18.0 or higher
- npm or yarn package manager
- MongoDB database (local or Atlas)
- Google OAuth credentials

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Mahatir-Ahmed-Tusher/Gaanly.git
   cd Gaanly
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database Configuration
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net
   DB_NAME=gaanly_database
   
   # Authentication
   JWT_SECRET=your-super-secret-jwt-key
   NEXTAUTH_URL=http://localhost:3000
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # Email Services
   MAIL_HOST=smtp.gmail.com
   MAIL_USER=your-email@gmail.com
   MAIL_PASS=your-app-password
   
   # External APIs
   NEXT_PUBLIC_SAAVN_API=https://saavn.dev
   ```

4. **Database Setup**
   - Ensure MongoDB is running
   - Create necessary collections and indexes
   - Configure user permissions and access

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Access Application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

### **Production Deployment**

1. **Build the Application**
   ```bash
   npm run build
   npm start
   ```

2. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

## 🔧 Configuration

### **Customization Options**
- **Theme Colors**: Modify Tailwind CSS variables in `tailwind.config.js`
- **API Endpoints**: Configure external service URLs in environment variables
- **Authentication**: Customize OAuth providers and user management
- **Content Filtering**: Implement region-specific content restrictions

### **Performance Optimization**
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Dynamic imports for better loading performance
- **Caching Strategies**: Implement Redis for session and data caching
- **CDN Integration**: Global content delivery for faster access

## 📊 API Documentation

### **Authentication Endpoints**
- `POST /api/auth/signin` - User login
- `POST /api/auth/signup` - User registration
- `GET /api/auth/session` - Session validation

### **Music Management**
- `GET /api/search/[query]` - Search music content
- `POST /api/favourite` - Add/remove favorites
- `GET /api/userPlaylists` - User playlist management

### **User Data**
- `GET /api/userInfo` - User profile information
- `PUT /api/forgotPassword` - Password reset functionality

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines:

1. **Fork the Repository**
2. **Create a Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit Changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow ESLint and Prettier configurations
- Write comprehensive tests for new features
- Maintain consistent code style and documentation
- Ensure accessibility and responsive design

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



### **Contact Information**
- **Email**: [mahatirtusher@gmail.com](mailto:mahatirtusher@gmail.com)
- **GitHub**: [@Mahatir-Ahmed-Tusher](https://github.com/Mahatir-Ahmed-Tusher)
- **Project**: [Gaanly Repository](https://github.com/Mahatir-Ahmed-Tusher/Gaanly)

## Acknowledgments

- **Unofficial Saavn API** - Music content and streaming infrastructure
- **Next.js Team** - Exceptional React framework and documentation
- **MongoDB** - Robust database solutions and cloud services
- **Open Source Community** - Continuous improvement and innovation

## 📈 Roadmap

### **Phase 1 (Current)**
- ✅ Core music streaming functionality
- ✅ User authentication and management
- ✅ Playlist and favorites system
- ✅ Multi-language support

### **Phase 2 (Q2 2024)**
- 🔄 Advanced recommendation algorithms
- 🔄 Social features and sharing
- 🔄 Mobile application development
- 🔄 Premium subscription tiers

### **Phase 3 (Q3 2024)**
- 📱 iOS and Android apps
- 🎧 Offline listening capabilities
- 🌍 Global content partnerships
- 🔒 Enterprise security features


---

<div align="center">

**Made with ❤️ by the Gaanly Team**

[![Gaanly](https://img.shields.io/badge/Gaanly-Music%20Streaming-8B5CF6?style=for-the-badge)](https://gaanly.live/)

*Empowering music lovers worldwide through innovative technology*

</div>


