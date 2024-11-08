import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function InvoiceStatus({ status }: { status: string }) {
  return (
    <Badge
      className={cn(
        "capitalize",
        status === "paid" && "bg-green-500/10 text-green-500 hover:bg-green-500/10",
        status === "pending" && "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10",
        status === "overdue" && "bg-red-500/10 text-red-500 hover:bg-red-500/10"
      )}
    >
      {status}
    </Badge>
  )
}