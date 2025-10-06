// app/components/NavBar.tsx
'use client'
import Link from 'next/link'
import { HomeIcon, UserGroupIcon, CalendarIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="grid grid-cols-4 py-2">
        <Link href="/" className="flex flex-col items-center p-2">
          <HomeIcon className="h-6 w-6 text-gray-700" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link href="/directory" className="flex flex-col items-center p-2">
          <UserGroupIcon className="h-6 w-6 text-gray-700" />
          <span className="text-xs mt-1">Directory</span>
        </Link>
        
        <Link href="/schedule" className="flex flex-col items-center p-2">
          <CalendarIcon className="h-6 w-6 text-gray-700" />
          <span className="text-xs mt-1">Schedule</span>
        </Link>
        
        <Link href="/vault" className="flex flex-col items-center p-2">
          <SparklesIcon className="h-6 w-6 text-gray-700" />
          <span className="text-xs mt-1">Vault</span>
        </Link>
      </div>
    </nav>
  )
}