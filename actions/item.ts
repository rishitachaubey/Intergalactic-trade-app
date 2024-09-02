"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { ItemSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export const addItem = async (values : z.infer<typeof ItemSchema>) => {
    const session = await auth();
    const userId = session?.user.id as string
    const { name, quantity } = values;
    try {
        await db.item.create({
            data : {
                name : name, quantity : quantity,
                user : {connect : {id : userId}}
            }
        })
        revalidatePath("/profile");
        return {success : "Item added to inventory!"}
    } catch (error) {
        return {error : "Something went wrong!"}
    }
}