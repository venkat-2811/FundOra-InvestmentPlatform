import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { ApolloWrapper } from "@/components/apollo-wrapper"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FundOra - Empowering Innovation Through Investment',
  description: 'Connect with investors and founders to create opportunities for growth and innovation.',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ApolloWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}