import { Avatar } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    type: "investment",
    title: "New Investment",
    description: "Invested $10,000 in Tech Startup A",
    time: "2 hours ago",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=1",
  },
  {
    id: 2,
    type: "update",
    title: "Portfolio Update",
    description: "Tech Startup B raised additional funding",
    time: "5 hours ago",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=2",
  },
  {
    id: 3,
    type: "milestone",
    title: "Milestone Reached",
    description: "Investment in Project C reached 2x returns",
    time: "1 day ago",
    image: "https://api.dicebear.com/7.x/avatars/svg?seed=3",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src={activity.image} alt={activity.title} />
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">{activity.title}</p>
            <p className="text-sm text-muted-foreground">
              {activity.description}
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}