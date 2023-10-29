import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider, UserButton } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider >
          <ThemeProvider>

            <nav className='flex fixed w-full bg-background  shadow-md shadow-muted h-[8vh] overflow-hidden px-14'>
              <img className='w-64  mt-1 ml-3' src="/logo.svg" alt="Form Builder logo" />
              <ThemeSwitcher />
              <div className='h-fit my-auto ml-[-10px] scale-125 pr-5 hover:scale-[135%] transition-transform '>
                <UserButton afterSignOutUrl='/signin' />
              </div>
            </nav>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
