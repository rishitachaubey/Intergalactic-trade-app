import Credentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth"

import bcrypt from "bcryptjs";

import { LoginSchema } from "@/schemas";
import { findIfUserExists } from "@/data";
 
export default { 
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {

                    let { username, password } = validatedFields.data;
                    const existing_user = await findIfUserExists(username);
                    if (!existing_user){
                        return null;
                    } else {
                        username = existing_user.email;
                    }

                    if (!existing_user || !existing_user.password) return null;

                    const password_match = await bcrypt.compare(password, existing_user.password);
                    if (password_match){
                        return existing_user;
                    }
                }

                return null;
            }
        })
    ] 
} satisfies NextAuthConfig