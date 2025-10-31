import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'REMATCHED - You\'re Too Good For Swiping',
  description: 'Four games. Real conversation. Winner decides if you\'re worth their time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
