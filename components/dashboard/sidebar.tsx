import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Compass,
  DollarSign,
  Rocket,
  Info,
  Settings,
} from "lucide-react";

type SidebarProps = {
  userRole: string;
};

export function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();

  const commonNavigation = [
    {
      name: "Discover",
      href: "/dashboard/discover",
      icon: Compass,
    },
    {
      name: "About",
      href: "/dashboard/about",
      icon: Info,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const investorNavigation = [
    {
      name: "Invest",
      href: "/dashboard/invest",
      icon: DollarSign,
    },
  ];

  const founderNavigation = [
    {
      name: "Raise",
      href: "/dashboard/raise",
      icon: Rocket,
    },
  ];

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    ...commonNavigation,
    ...(userRole === "investor" ? investorNavigation : []),
    ...(userRole === "founder" ? founderNavigation : []),
  ];

  return (
    <nav className="flex flex-col space-y-2">
      {navigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link key={item.name} href={item.href}>
            <Button variant={isActive ? "default" : "ghost"} className="w-full justify-start">
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}