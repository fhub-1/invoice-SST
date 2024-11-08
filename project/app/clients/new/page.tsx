"use client"

import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NewClientPage() {
  const router = useRouter()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">New Client</h1>
        <div className="space-x-4">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button>Create Client</Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="grid gap-6">
          <div>
            <Label htmlFor="name">Company Name</Label>
            <Input id="name" placeholder="Enter company name" />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email address" />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter phone number" />
          </div>
          
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" placeholder="Enter complete address" />
          </div>
        </div>
      </Card>
    </div>
  )
}