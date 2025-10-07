'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, UserGroupIcon, CalendarIcon, SparklesIcon, TrophyIcon, CameraIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path

  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/directory', icon: UserGroupIcon, label: 'Directory' },
    { path: '/schedule', icon: CalendarIcon, label: 'Schedule' },
    { path: '/vault', icon: SparklesIcon, label: 'Vault' },
    { path: '/community', icon: TrophyIcon, label: 'Community' },
    { path: '/social', icon: CameraIcon, label: 'Social' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 z-40" style={{ borderColor: '#2d4d31' }}>
      <div className="flex overflow-x-auto py-2 px-2">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            href={item.path} 
            className="flex flex-col items-center p-2 transition-colors min-w-[60px] flex-shrink-0"
          >
            <item.icon 
              className="h-6 w-6 transition-transform hover:animate-dangle" 
              style={{ color: isActive(item.path) ? '#2d4d31' : '#9ca3af' }}
            />
            <span 
              className="text-xs mt-1"
              style={{ color: isActive(item.path) ? '#2d4d31' : '#9ca3af' }}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
