import { db } from "@/lib/db";
import { auth } from "@/auth";
import React from "react";
import { AddTradeDailog } from "../modals/trade";
import { CompleteTradeForm } from "../forms/completeTrade";

export async function TradesTab(){
    const session = await auth();
    const trades = await db.trade.findMany({
        where : {userId : session?.user.id},
        orderBy : {createdAt : "desc"}
    })
    return(
        <div className="pt-6">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold">My Trades</h1>
                <AddTradeDailog/>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-7">
                <div className="font-bold">S.No.</div>
                <div className="font-bold">Trade ID</div>
                <div className="font-bold">Status</div>
                <div className="font-bold">Actions</div>
                {trades.map((trade : any, index : number) => (
                    <React.Fragment key={index}>
                        <div className="font-bold">{index+1}</div>
                        <div>{trade.id}</div>
                        <div>{trade.status}</div>
                        <CompleteTradeForm trade={trade}/>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}