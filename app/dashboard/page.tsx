"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Compass,
  DollarSign,
  Rocket,
  Info,
} from "lucide-react";

export default function Dashboard() {
  const [userData, setUserData] = useState<{ name: string; role: string } | null>(null);
  const [userRole, setUserRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { authToken } = parseCookies();

    if (!authToken) {
      router.push("/auth/login");
    } else {
      // Fetch user data and role
      axios
        .get("/api/user/data", {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          setUserData(response.data);
          setUserRole(response.data.role);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          router.push("/auth/login");
        });
    }
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {userData.name}</h1>
      {/* Conditionally render features based on user role */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Compass className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Discover</h2>
          </div>
          <p className="text-muted-foreground mt-2">
            Explore opportunities tailored to your interests.
          </p>
          <Link href="/dashboard/discover">
            <Button variant="link" className="mt-4">
              Go to Discover
            </Button>
          </Link>
        </Card>

        {userRole === "investor" && (
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Invest</h2>
            </div>
            <p className="text-muted-foreground mt-2">
              Manage your investments and track performance.
            </p>
            <Link href="/dashboard/invest">
              <Button variant="link" className="mt-4">
                Go to Invest
              </Button>
            </Link>
          </Card>
        )}

        {userRole === "founder" && (
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <Rocket className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold">Raise</h2>
            </div>
            <p className="text-muted-foreground mt-2">
              Start a new fundraising campaign for your project.
            </p>
            <Link href="/dashboard/raise">
              <Button variant="link" className="mt-4">
                Go to Raise
              </Button>
            </Link>
          </Card>
        )}

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Info className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">About</h2>
          </div>
          <p className="text-muted-foreground mt-2">
            Learn more about our platform and mission.
          </p>
          <Link href="/dashboard/about">
            <Button variant="link" className="mt-4">
              Go to About
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}