import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'  // ← Import goes HERE at the TOP!

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Herwood Collective',
  description: 'Where independent hospitality operators thrive together',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={inter.className}>
        {children}
        <NavBar />
      </body>
    </html>
  )
}