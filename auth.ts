import NextAuth from "next-auth"
import authConfig from "@/auth.config"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { findUserById } from "@/data"

import { db } from "./lib/db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks : {

    async session({ token, session }){
      if (token.sub && session.user){
        session.user.id = token.sub;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;
      const existing_user = await findUserById(token.sub);
      if (!existing_user) return token;

      return token;
    }
    
  },
  
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})