import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="FundOra Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg text-orange-600">FundOra</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            Sign out
          </Button>
        </div>
      </div>
    </header>
  )
}