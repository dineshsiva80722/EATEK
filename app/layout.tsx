import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ErrorBoundary from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EATEK - Education, Art, Technology",
  description:
    "EATEK builds soulful systems at the intersection of Education, Art, and Technology to empower the next generation of creators and changemakers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
