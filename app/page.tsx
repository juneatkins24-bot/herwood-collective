'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#fff5ea' }}>
      {/* Hero Image Section */}
      <motion.div 
        className="relative h-[400px] md:h-[500px] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image 
          src="/hero-bathroom.jpg" 
          alt="Boutique hotel bathroom with hexagonal tiles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The Herwood Collective
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Small Spaces. Bold Impact. Real Community.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Rest of your existing content stays the same */}
        <motion.p
          className="text-center mt-8 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
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
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
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

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button 
            className="text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
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
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <p className="text-4xl font-bold mb-4" style={{ color: '#2d4d31' }}>
            79% of hosts manage alone
          </p>
          <p className="text-lg text-gray-600">
            Its time for a community built for you
          </p>
        </motion.div>
      </div>
    </main>
  )
}