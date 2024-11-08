"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NewInvoicePage() {
  const router = useRouter()
  const [items, setItems] = useState([{ description: "", quantity: 1, price: 0 }])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">New Invoice</h1>
        <div className="space-x-4">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button>Create Invoice</Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="grid gap-6">
          <div>
            <Label htmlFor="client">Client</Label>
            <Input id="client" placeholder="Select client" />
          </div>
          
          <div>
            <Label>Items</Label>
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 mt-2">
                <div className="col-span-6">
                  <Input 
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => {
                      const newItems = [...items]
                      newItems[index].description = e.target.value
                      setItems(newItems)
                    }}
                  />
                </div>
                <div className="col-span-2">
                  <Input 
                    type="number"
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={(e) => {
                      const newItems = [...items]
                      newItems[index].quantity = Number(e.target.value)
                      setItems(newItems)
                    }}
                  />
                </div>
                <div className="col-span-3">
                  <Input 
                    type="number"
                    placeholder="Price"
                    value={item.price}
                    onChange={(e) => {
                      const newItems = [...items]
                      newItems[index].price = Number(e.target.value)
                      setItems(newItems)
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <Button 
                    variant="ghost"
                    onClick={() => {
                      setItems(items.filter((_, i) => i !== index))
                    }}
                  >
                    ×
                  </Button>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              className="mt-4"
              onClick={() => setItems([...items, { description: "", quantity: 1, price: 0 }])}
            >
              Add Item
            </Button>
          </div>

          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Add any notes or payment instructions..." />
          </div>
        </div>
      </Card>
    </div>
  )
}