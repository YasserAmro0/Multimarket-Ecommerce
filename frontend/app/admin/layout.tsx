import { Sidebar } from '@/components'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
    title: 'dashboard',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex h-screen">
                <Sidebar/>
                    {children}
                </div>
            </body>
        </html>
    )
}

