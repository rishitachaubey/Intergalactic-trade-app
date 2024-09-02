"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface Item {
    id: string;       
    quantity: string;  
}

export const addTrade = async (itemsData : any) => {
    const session = await auth();
    const userId = session?.user.id as string;

    try {
        await db.trade.create({
            data: {
              userId: userId,
              CargoItems: {
                create: itemsData.items.map((item : Item) => ({
                  itemId: item.id,
                  quantity: parseInt(item.quantity, 10),
                })),
              },
            },
          });
        revalidatePath("/profile");
        return {success : "Trade Initiated!"}
    } catch (error) {
        return {error : "Something went wrong!"}
    }
}

export const completeTrade = async (trade : any) => {
    const tradeId = trade.id;
    try {
        await db.trade.update({
            where : {id : tradeId},
            data : {status : "completed"}
        })
        revalidatePath("/profile");
        return {success : "Trade Completed!"}
    } catch (error) {
        return {error : "Something went wrong!"}
    }
}