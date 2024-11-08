"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface InvoiceItem {
  description: string
  quantity: number
  price: number
}

interface InvoiceItemFormProps {
  item: InvoiceItem
  onUpdate: (item: InvoiceItem) => void
  onRemove: () => void
}

export function InvoiceItemForm({ item, onUpdate, onRemove }: InvoiceItemFormProps) {
  return (
    <div className="flex gap-4 items-start">
      <Input
        placeholder="Item description"
        value={item.description}
        onChange={(e) => onUpdate({ ...item, description: e.target.value })}
        className="flex-1"
      />
      <Input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => onUpdate({ ...item, quantity: parseInt(e.target.value) || 0 })}
        className="w-24"
      />
      <Input
        type="number"
        min="0"
        step="0.01"
        value={item.price}
        onChange={(e) => onUpdate({ ...item, price: parseFloat(e.target.value) || 0 })}
        className="w-32"
      />
      <Button variant="ghost" size="icon" onClick={onRemove}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}