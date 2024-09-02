import { auth } from "@/auth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { TradesTab } from "@/components/tabs/trades"
import { InventoryTab } from "@/components/tabs/inventory"

export default async function ProfilePage(){
    const session = await auth()
    return(
        <div className="container pt-6">
            <Tabs defaultValue="stations">
                <TabsList className="bg-black text-white">
                    <TabsTrigger value="stations">Inventory</TabsTrigger>
                    <TabsTrigger value="trades">Trades</TabsTrigger>
                </TabsList>
                <TabsContent value="stations"><InventoryTab/></TabsContent>
                <TabsContent value="trades"><TradesTab/></TabsContent>
            </Tabs>
        </div>
    )
}