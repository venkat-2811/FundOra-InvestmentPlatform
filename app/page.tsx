import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-orange-50 to-white dark:from-orange-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empower Innovation Through Investment
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect with groundbreaking startups and visionary investors. Make data-driven decisions with our AI-powered insights.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/auth/signup">
                    Start Investing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="p-6 space-y-4">
                <Shield className="h-12 w-12 text-orange-600" />
                <h3 className="text-xl font-bold">Secure Investment</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Industry-leading security measures to protect your investments and data.
                </p>
              </Card>
              <Card className="p-6 space-y-4">
                <TrendingUp className="h-12 w-12 text-orange-600" />
                <h3 className="text-xl font-bold">Smart Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  AI-powered insights to help you make informed investment decisions.
                </p>
              </Card>
              <Card className="p-6 space-y-4">
                <Users className="h-12 w-12 text-orange-600" />
                <h3 className="text-xl font-bold">Global Network</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with investors and founders from around the world.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}