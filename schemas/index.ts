import * as z from "zod";

export const LoginSchema = z.object({
    username : z.string().min(1, {message : "Invalid Email or Phone"}),
    password : z.string().min(1, {message : "Password is required"}),
})

export const RegisterSchema = z.object({
    name : z.string().min(1, { message : "Name is required" }),
    email : z.string().email({message : "Invalid Email"}), 
    planet : z.string().min(1, { message : "Planet is required" }),
    password : z.string().min(8, { message : "Minimum 8 charectors required" })
})

export const ItemSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    quantity: z.preprocess((val) => Number(val), z.number().positive({ message: "Quantity must be a positive number" }))
});