"use server";

import * as z from "zod";

import { signIn } from "@/auth";

import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success){
        return {error : "Invalid Credentials"}
    }

    const { username, password } = validatedFields.data;

    // return {error : "Invalid Credentials"}

    try {
        await signIn
        ("credentials", {
            username, password, 
            redirectTo : DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError){
            switch (error.type) {
                case "CredentialsSignin":
                    return {error : "Invalid Credentials!"}
                default:
                    return {error : "Something went wrong!"}
            }
        }

        throw error;
    }
}