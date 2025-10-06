'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlayCircleIcon, CameraIcon, DocumentTextIcon, SparklesIcon } from '@heroicons/react/24/outline'

const resources = {
  videos: [
    {
      id: 1,
      title: "Modern Airbnb Tour: Design That Converts",
      description: "See how this host uses simple iPhone videography to showcase their space",
      videoId: "Sd6JyvYpw_o",
      category: "Property Tours",
      duration: "0:58"
    },
    {
      id: 2,
      title: "DIY Photography: Natural Light Magic",
      description: "Transform your listing photos using just window light and a white sheet",
      videoId: "placeholder2",
      category: "Photography",
      duration: "12:34"
    },
    {
      id: 3,
      title: "Guest Experience Design Workshop",
      description: "Recording from our 2024 workshop on creating memorable moments",
      videoId: "placeholder3",
      category: "Workshops",
      duration: "45:20"
    }
  ],
  templates: [
    {
      id: 1,
      title: "Welcome Guide Template",
      description: "Customizable digital guide for your guests",
      type: "Canva Template"
    },
    {
      id: 2,
      title: "House Rules That Work",
      description: "Friendly but firm rules that guests actually read",
      type: "Word Doc"
    },
    {
      id: 3,
      title: "5-Star Review Request",
      description: "The perfect checkout message template",
      type: "Email Template"
    }
  ],
  vendors: [
    {
      id: 1,
      name: "Hudson Valley Films",
      service: "Property Videography",
      contact: "hello@hvfilms.com",
      special: "20% off for Collective members"
    },
    {
      id: 2,
      name: "Catskill Coffee Roasters",
      service: "Local Coffee Supplier",
      contact: "wholesale@catskillcoffee.com",
      special: "Free tasting kit"
    },
    {
      id: 3,
      name: "Mountain Massage Collective",
      service: "In-Room Wellness",
      contact: "book@mountainmassage.com",
      special: "Partner rates available"
    }
  ]
}

export default function Vault() {
  const [activeTab, setActiveTab] = useState('videos')
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#fff5ea' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        <motion.h1 
          className="text-4xl font-bold mb-2"
          style={{ color: '#2d4d31' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Resource Vault
        </motion.h1>
        
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Curated tools, templates, and connections to level up your property
        </motion.p>

        {/* Tab Navigation */}
        <motion.div 
          className="flex gap-2 mb-8 overflow-x-auto pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { id: 'videos', label: 'Videos', icon: PlayCircleIcon },
            { id: 'templates', label: 'Templates', icon: DocumentTextIcon },
            { id: 'vendors', label: 'Local Vendors', icon: SparklesIcon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all"
              style={{
                backgroundColor: activeTab === tab.id ? '#2d4d31' : 'white',
                color: activeTab === tab.id ? 'white' : '#2d4d31',
                border: '2px solid #2d4d31'
              }}
            >
              <tab.icon className="h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-48 bg-gray-200">
                  {playingVideo === video.videoId ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => setPlayingVideo(video.videoId)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                        <PlayCircleIcon className="h-16 w-16 text-white opacity-90" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100" style={{ color: '#2d4d31' }}>
                      {video.category}
                    </span>
                    <span className="text-xs text-gray-500">{video.duration}</span>
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: '#2d4d31' }}>
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.templates.map((template, index) => (
              <motion.div
                key={template.id}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <DocumentTextIcon className="h-12 w-12 mb-4" style={{ color: '#2d4d31' }} />
                <h3 className="font-semibold mb-2" style={{ color: '#2d4d31' }}>
                  {template.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {template.description}
                </p>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100" style={{ color: '#2d4d31' }}>
                  {template.type}
                </span>
                <button 
                  className="w-full mt-4 py-2 rounded text-white font-medium transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#2d4d31' }}
                >
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Vendors Tab */}
        {activeTab === 'vendors' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.vendors.map((vendor, index) => (
              <motion.div
                key={vendor.id}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-semibold text-lg mb-1" style={{ color: '#2d4d31' }}>
                  {vendor.name}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  {vendor.service}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">📧 {vendor.contact}</p>
                  <p className="font-medium" style={{ color: '#2d4d31' }}>
                    ⭐ {vendor.special}
                  </p>
                </div>
                <button 
                  className="w-full mt-4 py-2 rounded text-white font-medium transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#2d4d31' }}
                >
                  Contact
                </button>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}