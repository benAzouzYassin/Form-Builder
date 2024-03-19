import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'



export const metadata: Metadata = {
  title: 'Form builder',
  description: 'Build and customize your own form !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  >
        <ClerkProvider >
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
