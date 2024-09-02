import NextAuth, { type DefaultSession } from "next-auth"

export type ExtendedUser = DefaultSession["user"] & {
    username : string,
    name : string,
    email : string,
    phone : string, 
    address : string, 
}

declare module "next-auth" {
    interface Session {
      user: ExtendedUser
    }
  }