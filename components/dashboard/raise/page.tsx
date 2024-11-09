"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Rocket } from "lucide-react";
import { withAuth } from '@/components/withAuth';

function RaisePage() {
  const router = useRouter();

  useEffect(() => {
    const { authToken } = parseCookies();

    if (!authToken) {
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <main className="container py-6 space-y-8">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold">Raise Capital for Your Startup</h1>
        <p className="text-muted-foreground">
          Connect with investors and raise the capital you need to grow your business.
        </p>
        <Button size="lg">Start Your Fundraising Journey</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 space-y-4">
          <Building2 className="h-8 w-8 text-primary" />
          <h3 className="font-semibold">Company Profile</h3>
          <p className="text-sm text-muted-foreground">
            Create a compelling profile that showcases your startup&#39;s potential.
          </p>
        </Card>

        <Card className="p-6 space-y-4">
          <Users className="h-8 w-8 text-primary" />
          <h3 className="font-semibold">Investor Network</h3>
          <p className="text-sm text-muted-foreground">
            Access our network of verified investors looking for opportunities.
          </p>
        </Card>

        <Card className="p-6 space-y-4">
          <Rocket className="h-8 w-8 text-primary" />
          <h3 className="font-semibold">Fundraising Tools</h3>
          <p className="text-sm text-muted-foreground">
            Use our suite of tools to manage your fundraising campaign effectively.
          </p>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="font-bold">1.</span>
              <div>
                <h3 className="font-medium">Create Your Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Set up your company profile with key metrics, team information, and growth potential.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">2.</span>
              <div>
                <h3 className="font-medium">Connect with Investors</h3>
                <p className="text-sm text-muted-foreground">
                  Engage with interested investors and schedule meetings through our platform.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">3.</span>
              <div>
                <h3 className="font-medium">Secure Funding</h3>
                <p className="text-sm text-muted-foreground">
                  Close deals and manage your investor relationships all in one place.
                </p>
              </div>
            </li>
          </ol>
        </Card>
      </div>
    </main>
  );
}

export default withAuth(RaisePage);