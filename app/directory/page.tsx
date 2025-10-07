'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const attendees = [
  { 
    id: 1,
    name: "Sarah Chen", 
    property: "The Ivy House", 
    location: "Hudson, NY",
    rooms: 8,
    specialty: "Historic Renovation",
    image: "https://i.pravatar.cc/150?img=1",
    checkedIn: true,
    roomKey: "101"
  },
  { 
    id: 2,
    name: "Marcus Johnson", 
    property: "Millbrook Inn", 
    location: "Woodstock, NY",
    rooms: 12,
    specialty: "Farm-to-Table",
    image: "https://i.pravatar.cc/150?img=3",
    checkedIn: true,
    roomKey: "204"
  },
  { 
    id: 3,
    name: "Emma Rodriguez", 
    property: "The Artist Loft", 
    location: "Beacon, NY",
    rooms: 6,
    specialty: "Creative Retreats",
    image: "https://i.pravatar.cc/150?img=5",
    checkedIn: false,
    roomKey: "305"
  },
  { 
    id: 4,
    name: "David Park", 
    property: "Riverside Guest House", 
    location: "Cold Spring, NY",
    rooms: 4,
    specialty: "Wellness Focus",
    image: "https://i.pravatar.cc/150?img=4",
    checkedIn: true,
    roomKey: "108"
  },
  { 
    id: 5,
    name: "Lisa Thompson", 
    property: "Mountain View Lodge", 
    location: "Phoenicia, NY",
    rooms: 10,
    specialty: "Adventure Tourism",
    image: "https://i.pravatar.cc/150?img=9",
    checkedIn: false,
    roomKey: "217"
  },
  { 
    id: 6,
    name: "James Wilson", 
    property: "The Harbor Inn", 
    location: "Saugerties, NY",
    rooms: 7,
    specialty: "Waterfront Properties",
    image: "https://i.pravatar.cc/150?img=7",
    checkedIn: true,
    roomKey: "402"
  }
]

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [messageTo, setMessageTo] = useState<string | null>(null)
  
  const filtered = attendees.filter(person => 
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#fff5ea' }}>
      {/* Full Width Hero Image */}
      <motion.div 
        className="relative w-full h-56 md:h-72"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image 
          src="/keychain-mockup.png" 
          alt="Room keys"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Title Below Image */}
      <div className="bg-white py-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ color: '#2d4d31' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Collective Directory
          </motion.h1>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Connect with {attendees.length} independent hospitality operators • Each key opens a new connection
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Search by name, property, or location..."
            className="w-full p-3 rounded-lg border-2 focus:outline-none"
            style={{ borderColor: '#2d4d31' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        {searchTerm && (
          <p className="mb-4 text-sm" style={{ color: '#2d4d31' }}>
            Found {filtered.length} {filtered.length === 1 ? 'match' : 'matches'}
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((attendee, index) => (
            <motion.div 
              key={attendee.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Room Key Tag */}
              <motion.div 
                className="absolute -top-2 -right-2 z-10"
                animate={{ 
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <div className="bg-yellow-600 rounded-full p-3 shadow-lg">
                  <div className="bg-white rounded px-2 py-1 text-xs font-bold" style={{ color: '#2d4d31' }}>
                    ROOM {attendee.roomKey}
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                    <div className="w-3 h-3 rounded-full border-2 border-yellow-600 bg-white"></div>
                  </div>
                </div>
              </motion.div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <Image 
                      src={attendee.image} 
                      alt={attendee.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    {attendee.checkedIn && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg" style={{ color: '#2d4d31' }}>
                      {attendee.name}
                    </h3>
                    <p className="text-sm text-gray-600">{attendee.property}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm mb-4">
                  <p><span className="font-medium">📍</span> {attendee.location}</p>
                  <p><span className="font-medium">🏠</span> {attendee.rooms} rooms</p>
                  <p><span className="font-medium">✨</span> {attendee.specialty}</p>
                </div>

                {/* Key-themed Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: attendee.checkedIn ? '#e8f5e9' : '#fafafa',
                      color: attendee.checkedIn ? '#2d4d31' : '#9ca3af'
                    }}>
                    {attendee.checkedIn ? '🔑 Keys Collected' : '🔒 Not Arrived'}
                  </span>
                </div>
                
                <button 
                  className="w-full py-2 rounded text-white font-medium transition-all hover:opacity-90 group-hover:shadow-lg"
                  style={{ backgroundColor: '#2d4d31' }}
                  onClick={() => setMessageTo(attendee.name)}
                >
                  Unlock Connection
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No matches found</p>
            <p className="text-sm text-gray-400 mt-2">Try a different search term</p>
          </div>
        )}

        {/* Message Modal */}
        {messageTo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setMessageTo(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-600 rounded-full p-2">
                  <span className="text-white text-xs font-bold">🔑</span>
                </div>
                <h3 className="text-xl font-bold" style={{ color: '#2d4d31' }}>
                  Connect with {messageTo}
                </h3>
              </div>
              
              <textarea
                className="w-full p-3 border-2 rounded mb-4 h-32 focus:outline-none resize-none"
                style={{ borderColor: '#2d4d31' }}
                placeholder="Hi! I'd love to connect about..."
                defaultValue="Hi! I saw you're attending The Herwood Collective. I'd love to chat about your experience with "
              />
              
              <div className="flex gap-2">
                <button 
                  className="flex-1 py-2 rounded text-white font-medium transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#2d4d31' }}
                  onClick={() => {
                    alert('Connection unlocked! They will receive your message.')
                    setMessageTo(null)
                  }}
                >
                  Send Message
                </button>
                <button 
                  className="flex-1 py-2 rounded border-2 font-medium transition-colors hover:bg-gray-50"
                  style={{ borderColor: '#2d4d31', color: '#2d4d31' }}
                  onClick={() => setMessageTo(null)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  )
}