import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import dbConnect from "@/utils/dbconnect";
import GoogleProvider from "next-auth/providers/google";
import UserData from "@/models/UserData";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          await dbConnect();
          console.log("credentials");
          const { email, password } = credentials;
          const user = await User.findOne({ email });
          if (user && (await bcrypt.compare(password, user.password))) {
            return user;
          }
          return null;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",

  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.userName = token.userName;
        session.user.imageUrl = token.imageUrl;
        session.user.isVerified = token.isVerified;
      }
      return session;
    },

    async jwt({ token, user, account, profile }) {
      if (user) {
        token.userName = user.userName;
        token.imageUrl = user.imageUrl;
        token.isVerified = user.isVerified;
      }
      return token;
    },

    async signIn({ account, profile }) {
      if (account.provider === "google") {
        try {
          await dbConnect();
          const { name, email, picture } = profile;
          const userDB = await User.findOne({ email });
          if (!userDB) {
            const userData = await UserData.create({});
            const newUser = await User.create({
              userName: name,
              email,
              imageUrl: picture,
              userData: userData._id,
              isVerified: profile.email_verified,
            });
            return newUser;
          }
          return userDB;
        } catch (e) {
          console.error(e);
          return null;
        }
      }
      return true;
    },
  },
};

const handler = (req, res) => NextAuth(req, res, options);
export { handler as GET, handler as POST };
