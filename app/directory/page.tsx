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
    checkedIn: true
  },
  { 
    id: 2,
    name: "Marcus Johnson", 
    property: "Millbrook Inn", 
    location: "Woodstock, NY",
    rooms: 12,
    specialty: "Farm-to-Table",
    image: "https://i.pravatar.cc/150?img=3",
    checkedIn: true
  },
  { 
    id: 3,
    name: "Emma Rodriguez", 
    property: "The Artist Loft", 
    location: "Beacon, NY",
    rooms: 6,
    specialty: "Creative Retreats",
    image: "https://i.pravatar.cc/150?img=5",
    checkedIn: false
  },
  { 
    id: 4,
    name: "David Park", 
    property: "Riverside Guest House", 
    location: "Cold Spring, NY",
    rooms: 4,
    specialty: "Wellness Focus",
    image: "https://i.pravatar.cc/150?img=4",
    checkedIn: true
  },
  { 
    id: 5,
    name: "Lisa Thompson", 
    property: "Mountain View Lodge", 
    location: "Phoenicia, NY",
    rooms: 10,
    specialty: "Adventure Tourism",
    image: "https://i.pravatar.cc/150?img=9",
    checkedIn: false
  },
  { 
    id: 6,
    name: "James Wilson", 
    property: "The Harbor Inn", 
    location: "Saugerties, NY",
    rooms: 7,
    specialty: "Waterfront Properties",
    image: "https://i.pravatar.cc/150?img=7",
    checkedIn: true
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header with Keychain Image */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <motion.h1 
              className="text-4xl font-bold mb-2"
              style={{ color: '#2d4d31' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Collective Directory
            </motion.h1>
            
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Connect with {attendees.length} independent hospitality operators
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 5 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="hidden md:block"
          >
            <Image 
              src="/keychain-mockup.png" 
              alt="Room keys"
              width={200}
              height={150}
              className="drop-shadow-lg"
            />
          </motion.div>
        </div>
        
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
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Check-in Status Badge */}
              {attendee.checkedIn && (
                <div className="absolute top-2 right-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  Checked In
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image 
                    src={attendee.image} 
                    alt={attendee.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: '#2d4d31' }}>
                      {attendee.name}
                    </h3>
                    <p className="text-sm text-gray-600">{attendee.property}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">📍</span> {attendee.location}</p>
                  <p><span className="font-medium">🏠</span> {attendee.rooms} rooms</p>
                  <p><span className="font-medium">✨</span> {attendee.specialty}</p>
                </div>
                
                <button 
                  className="w-full mt-4 py-2 rounded text-white font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: '#2d4d31' }}
                  onClick={() => setMessageTo(attendee.name)}
                >
                  Connect
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
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2d4d31' }}>
                Connect with {messageTo}
              </h3>
              
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
                    alert('Message sent! They will receive your note via the app.')
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