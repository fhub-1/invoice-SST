import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/invoices">
          <Card className="p-6 hover:bg-accent transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Invoices</h2>
                <p className="text-muted-foreground">Manage your invoices</p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/clients">
          <Card className="p-6 hover:bg-accent transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Clients</h2>
                <p className="text-muted-foreground">Manage your clients</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  )
}