"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp } from "lucide-react";
import { withAuth } from '@/components/withAuth';

function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    const { authToken } = parseCookies();

    if (!authToken) {
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <main className="container py-6 space-y-12">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold">About CrowdVest</h1>
        <p className="text-xl text-muted-foreground">
          Empowering the future of investment through technology and community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="p-6 space-y-4">
          <Shield className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            To democratize investment opportunities and make startup funding accessible to everyone.
          </p>
        </Card>

        <Card className="p-6 space-y-4">
          <Users className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Our Community</h2>
          <p className="text-muted-foreground">
            A diverse network of investors and founders working together to build the future.
          </p>
        </Card>

        <Card className="p-6 space-y-4">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Our Impact</h2>
          <p className="text-muted-foreground">
            Facilitating millions in investments and helping startups achieve their goals.
          </p>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2024, FundOra emerged from a simple idea: make startup investment accessible to everyone while providing founders with the resources they need to succeed.
            </p>
            <p>
              Today, we&apos;re proud to have helped numerous startups raise capital and connect with strategic investors who believe in their vision.
            </p>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <div className="space-x-4">
          <Button size="lg">Join as Investor</Button>
          <Button size="lg" variant="outline">Raise Capital</Button>
        </div>
      </div>
    </main>
  );
}

export default withAuth(AboutPage);