'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [showSignup, setShowSignup] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    location: '',
    rooms: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Welcome to the Collective, ${formData.name}! Check your email for next steps.`)
    setShowSignup(false)
    setFormData({ name: '', email: '', property: '', location: '', rooms: '' })
  }

  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#fff5ea' }}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Animated Logo - EXTRA LARGE */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/logo.png" 
            alt="The Herwood Collective" 
            width={800} 
            height={400}
            className="w-auto h-56 md:h-80 lg:h-96"
            priority
          />
        </motion.div>
        
        <motion.p 
          className="text-xl text-center mt-4 font-medium" 
          style={{ color: '#2d4d31' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Small Spaces. Bold Impact. Real Community.
        </motion.p>
        
        <motion.p
          className="text-center mt-2 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          An intimate gathering for independent inn owners, Airbnb hosts, and small hotel operators focused on designing memorable guest experiences.
        </motion.p>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { title: '75 Operators', desc: 'Intimate gathering of peers who get it' },
            { title: '$299 All-In', desc: '10x less cost, 10x more value' },
            { title: 'Real Properties', desc: 'Learn where you actually work' }
          ].map((card, index) => (
            <motion.div 
              key={card.title}
              className="bg-white p-6 rounded-lg shadow-md border-2" 
              style={{ borderColor: '#2d4d31' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-semibold mb-2" style={{ color: '#2d4d31' }}>
                {card.title}
              </h2>
              <p className="text-gray-600">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Image Section */}
        <motion.div 
          className="mt-16 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image 
              src="/hero-bathroom.jpg" 
              alt="Boutique hotel bathroom with hexagonal tiles"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Design That Inspires
                </h3>
                <p className="text-lg opacity-90">
                  Learn from real properties creating unforgettable guest experiences
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button 
            onClick={() => setShowSignup(true)}
            className="text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg cursor-pointer"
            style={{ backgroundColor: '#2d4d31' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Collective
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-4xl font-bold mb-4" style={{ color: '#2d4d31' }}>
            79% of hosts manage alone
          </p>
          <p className="text-lg text-gray-600">
            Its time for a community built for you
          </p>
        </motion.div>
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowSignup(false)}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold" style={{ color: '#2d4d31' }}>
                Join the Collective
              </h2>
              <button
                onClick={() => setShowSignup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Limited to 75 operators. Secure your spot for October 18-20, 2025.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#2d4d31' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border-2 rounded focus:outline-none focus:border-green-500"
                  style={{ borderColor: '#e5e7eb' }}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#2d4d31' }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border-2 rounded focus:outline-none focus:border-green-500"
                  style={{ borderColor: '#e5e7eb' }}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#2d4d31' }}>
                  Property Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border-2 rounded focus:outline-none focus:border-green-500"
                  style={{ borderColor: '#e5e7eb' }}
                  value={formData.property}
                  onChange={(e) => setFormData({...formData, property: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#2d4d31' }}>
                  Location
                </label>
                <input
                  type="text"
                  className="w-full p-2 border-2 rounded focus:outline-none focus:border-green-500"
                  style={{ borderColor: '#e5e7eb' }}
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#2d4d31' }}>
                  Number of Rooms
                </label>
                <input
                  type="number"
                  className="w-full p-2 border-2 rounded focus:outline-none focus:border-green-500"
                  style={{ borderColor: '#e5e7eb' }}
                  value={formData.rooms}
                  onChange={(e) => setFormData({...formData, rooms: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded text-white font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: '#2d4d31' }}
              >
                Reserve My Spot - $299
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Payment details will be sent via email. Cancel anytime before Sept 1 for full refund.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}