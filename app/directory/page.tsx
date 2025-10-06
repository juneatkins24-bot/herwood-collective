'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const attendees = [
  { 
    id: 1,
    name: "Sarah Chen", 
    property: "The Ivy House", 
    location: "Hudson, NY",
    rooms: 8,
    specialty: "Historic Renovation",
    image: "https://i.pravatar.cc/150?img=1"
  },
  { 
    id: 2,
    name: "Marcus Johnson", 
    property: "Millbrook Inn", 
    location: "Woodstock, NY",
    rooms: 12,
    specialty: "Farm-to-Table",
    image: "https://i.pravatar.cc/150?img=3"
  },
  { 
    id: 3,
    name: "Emma Rodriguez", 
    property: "The Artist Loft", 
    location: "Beacon, NY",
    rooms: 6,
    specialty: "Creative Retreats",
    image: "https://i.pravatar.cc/150?img=5"
  },
  { 
    id: 4,
    name: "David Park", 
    property: "Riverside Guest House", 
    location: "Cold Spring, NY",
    rooms: 4,
    specialty: "Wellness Focus",
    image: "https://i.pravatar.cc/150?img=4"
  },
  { 
    id: 5,
    name: "Lisa Thompson", 
    property: "Mountain View Lodge", 
    location: "Phoenicia, NY",
    rooms: 10,
    specialty: "Adventure Tourism",
    image: "https://i.pravatar.cc/150?img=9"
  },
  { 
    id: 6,
    name: "James Wilson", 
    property: "The Harbor Inn", 
    location: "Saugerties, NY",
    rooms: 7,
    specialty: "Waterfront Properties",
    image: "https://i.pravatar.cc/150?img=7"
  }
]

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filtered = attendees.filter(person => 
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#fff5ea' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-2"
          style={{ color: '#2d4d31' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Collective Directory
        </motion.h1>
        
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Connect with {attendees.length} independent hospitality operators
        </motion.p>
        
        {/* Search Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
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

        {/* Results Count */}
        {searchTerm && (
          <p className="mb-4 text-sm" style={{ color: '#2d4d31' }}>
            Found {filtered.length} {filtered.length === 1 ? 'match' : 'matches'}
          </p>
        )}

        {/* Attendee Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((attendee, index) => (
            <motion.div 
              key={attendee.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={attendee.image} 
                    alt={attendee.name}
                    className="w-16 h-16 rounded-full mr-4"
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
                  className="w-full mt-4 py-2 rounded text-white font-medium transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#2d4d31' }}
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
      </div>
    </main>
  )
}