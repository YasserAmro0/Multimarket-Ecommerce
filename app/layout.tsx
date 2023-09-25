import { Footer, Navbar } from '@/components'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { AuthContext } from '@/context';


export const metadata: Metadata = {
  title: 'home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          {children}
        </AuthContext>
        
      </body>
    </html>
  )
}
