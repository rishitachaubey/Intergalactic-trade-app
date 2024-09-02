"use client";

import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { completeTrade } from "@/actions/trade";

export function CompleteTradeForm({trade} : {trade : any}){
    const [isPending, startTransition] = useTransition();

    const onSubmit = (event : React.FormEvent) => {
        event.preventDefault();
        startTransition(() => {
            completeTrade(trade);
            console.log(trade);
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <Button className="w-fit" disabled={(trade.status=="completed") || isPending}>Complete</Button>
        </form>
    )

}