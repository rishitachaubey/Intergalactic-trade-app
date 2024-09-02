import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AddTradeForm } from "../forms/trade"

export function AddTradeDailog(){
    return(
        <Dialog>
            <DialogTrigger>
                <span className="text-2xl text-white bg-black px-2 pb-[1.5px] rounded-lg">+</span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a trade transaction</DialogTitle>
                </DialogHeader>
                <AddTradeForm/>
            </DialogContent>
        </Dialog>
    )
}