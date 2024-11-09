import { Card } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

const metrics = [
  {
    title: "Total Invested",
    value: "$125,000",
    change: "+12.5%",
    icon: DollarSign,
  },
  {
    title: "Active Investments",
    value: "15",
    change: "+2",
    icon: Activity,
  },
  {
    title: "Portfolio Growth",
    value: "23.5%",
    change: "+5.2%",
    icon: TrendingUp,
  },
  {
    title: "Network Size",
    value: "234",
    change: "+12",
    icon: Users,
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </p>
                <h3 className="text-2xl font-bold mt-2">{metric.value}</h3>
                <p className="text-sm text-green-600 mt-1">
                  {metric.change}
                </p>
              </div>
              <Icon className="h-8 w-8 text-muted-foreground" />
            </div>
          </Card>
        )
      })}
    </div>
  )
}