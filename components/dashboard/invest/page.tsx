"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Wallet } from "lucide-react";
import { withAuth } from '@/components/withAuth';

function InvestPage() {
  const router = useRouter();

  useEffect(() => {
    const { authToken } = parseCookies();

    if (!authToken) {
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <main className="container py-6 space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Wallet className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Portfolio Overview</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Invested</span>
              <span className="font-medium">$50,000</span>
            </div>
            <div className="flex justify-between">
              <span>Active Investments</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span>Returns (YTD)</span>
              <span className="font-medium text-green-600">+15.4%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <LineChart className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Performance</h2>
          </div>
          <div className="h-[200px] flex items-center justify-center text-muted-foreground">
            Chart placeholder
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Active Investments</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Investment {i}</h3>
                  <p className="text-sm text-muted-foreground">Tech Startup</p>
                </div>
                <Button variant="outline">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

export default withAuth(InvestPage);