"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { withAuth } from '@/components/withAuth';

function DiscoverPage() {
  const router = useRouter();

  useEffect(() => {
    const { authToken } = parseCookies();

    if (!authToken) {
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <main className="container py-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Discover Opportunities</h1>
        <Button>Filter Results</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Tech Startup {i}</h3>
                <p className="text-sm text-muted-foreground">AI & Machine Learning</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovative AI-powered solution revolutionizing the way businesses handle data analytics.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Raised</span>
                <span className="font-medium">$1.2M / $2M</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "60%" }} />
              </div>
            </div>
            <Button className="w-full">View Details</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default withAuth(DiscoverPage);