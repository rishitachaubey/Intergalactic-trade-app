import { db } from "@/lib/db";
import { AddItemDailog } from "../modals/item";
import { auth } from "@/auth";
import React from "react";

export async function InventoryTab(){
    const session = await auth();
    const inventory = await db.item.findMany({
        where : {userId : session?.user.id},
        orderBy : {createdAt : "desc"}
    })
    return(
        <div className="pt-6">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold">My Inventory</h1>
                <AddItemDailog/>
            </div>
            <div className="grid grid-cols-5 gap-4 pt-7">
                <div className="font-bold">S.No.</div>
                <div className="font-bold col-span-2">Item ID</div>
                <div className="font-bold">Item Name</div>
                <div className="font-bold">Quantity</div>
                {inventory.map((item : any, index : number) => (
                    <React.Fragment key={index}>
                        <div className="font-bold">{index+1}</div>
                        <div className="col-span-2">{item.id}</div>
                        <div>{item.name}</div>
                        <div>{item.quantity}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}