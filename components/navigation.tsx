"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { parseCookies, destroyCookie } from "nookies";

const navigation = [
  { name: "Discover", href: "/dashboard/discover" },
  { name: "Invest", href: "/dashboard/invest" },
  { name: "Raise", href: "/dashboard/raise" },
  { name: "About", href: "/dashboard/about" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { authToken } = parseCookies();
    setIsAuthenticated(!!authToken);
  }, []);

  function handleLogout() {
    destroyCookie(null, "authToken");
    setIsAuthenticated(false);
    router.push("/auth/login");
  }

  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        {/* Add your logo here */}
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </Link>

      <nav className="hidden md:flex space-x-4">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button variant={pathname === item.href ? "default" : "ghost"}>
              {item.name}
            </Button>
          </Link>
        ))}

        {isAuthenticated ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={120} height={40} />
            </Link>
          </SheetTitle>
          <nav className="flex flex-col space-y-4 mt-6">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Button>
              </Link>
            ))}
            {isAuthenticated ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" onClick={() => setIsOpen(false)}>
                    Login
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button onClick={() => setIsOpen(false)}>Sign Up</Button>
                </Link>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}