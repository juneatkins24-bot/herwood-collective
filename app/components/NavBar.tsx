'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, UserGroupIcon, CalendarIcon, SparklesIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  return (
    <>
      <style jsx>{`
        .nav-icon {
          transition: all 0.3s ease;
        }
        .nav-icon:hover {
          animation: dangle 0.5s ease-in-out;
        }
        @keyframes dangle {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          25% { transform: rotate(-8deg) translateY(-2px); }
          50% { transform: rotate(8deg) translateY(-2px); }
          75% { transform: rotate(-5deg) translateY(-1px); }
        }
      `}</style>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2" style={{ borderColor: '#2d4d31' }}>
        <div className="grid grid-cols-5 py-2">
          <Link href="/" className="flex flex-col items-center p-2 transition-colors">
            <HomeIcon 
              className="h-6 w-6 nav-icon" 
              style={{ color: isActive('/') ? '#2d4d31' : '#9ca3af' }}
            />
            <span 
              className="text-xs mt-1"
              style={{ color: isActive('/') ? '#2d4d31' : '#9ca3af' }}
            >
              Home
            </span>
          </Link>
          
          <Link href="/directory" className="flex flex-col items-center p-2 transition-colors">
            <UserGroupIcon 
              className="h-6 w-6 nav-icon"
              style={{ color: isActive('/directory') ? '#2d4d31' : '#9ca3af' }}
            />
            <span 
              className="text-xs mt-1"
              style={{ color: isActive('/directory') ? '#2d4d31' : '#9ca3af' }}
            >
              Directory
            </span>
          </Link>
          
          <Link href="/schedule" className="flex flex-col items-center p-2 transition-colors">
            <CalendarIcon 
              className="h-6 w-6 nav-icon"
              style={{ color: isActive('/schedule') ? '#2d4d31' : '#9ca3af' }}
            />
            <span 
              className="text-xs mt-1"
              style={{ color: isActive('/schedule') ? '#2d4d31' : '#9ca3af' }}
            >
              Schedule
            </span>
          </Link>
          
          <Link href="/vault" className="flex flex-col items-center p-2 transition-colors">
            <SparklesIcon 
              className="h-6 w-6 nav-icon"
              style={{ color: isActive('/vault') ? '#2d4d31' : '#9ca3af' }}
            />
            <span 
              className="text-xs mt-1"
              style={{ color: isActive('/vault') ? '#2d4d31' : '#9ca3af' }}
            >
              Vault
            </span>
          </Link>

          <Link href="/community" className="flex flex-col items-center p-2 transition-colors">
            <TrophyIcon 
              className="h-6 w-6 nav-icon"
              style={{ color: isActive('/community') ? '#2d4d31' : '#9ca3af' }}
            />
            <span 
              className="text-xs mt-1"
              style={{ color: isActive('/community') ? '#2d4d31' : '#9ca3af' }}
            >
              Community
            </span>
          </Link>
        </div>
      </nav>
    </>
  )
}