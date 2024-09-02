import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AddItemForm } from "@/components/forms/inventory"
  
export function AddItemDailog(){
    return(
        <Dialog>
            <DialogTrigger>
                <span className="text-2xl text-white bg-black px-2 pb-[1.5px] rounded-lg">+</span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Item to inventory</DialogTitle>
                </DialogHeader>
                <AddItemForm/>
            </DialogContent>
        </Dialog>
    )
}