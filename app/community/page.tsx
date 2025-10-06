'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrophyIcon, ChartBarIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const polls = [
  {
    id: 1,
    question: "What's your biggest operational challenge?",
    options: [
      { text: "Finding reliable cleaners", votes: 23 },
      { text: "Managing guest communications", votes: 18 },
      { text: "Pricing strategy", votes: 31 },
      { text: "Getting more bookings", votes: 28 }
    ],
    totalVotes: 100
  },
  {
    id: 2,
    question: "How many properties do you manage?",
    options: [
      { text: "Just 1", votes: 45 },
      { text: "2-3", votes: 32 },
      { text: "4-6", votes: 18 },
      { text: "7+", votes: 5 }
    ],
    totalVotes: 100
  }
]

const wins = [
  {
    id: 1,
    name: "Sarah Chen",
    property: "The Ivy House",
    win: "Hit 95% occupancy for 3 months straight!",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    property: "Millbrook Inn", 
    win: "Featured in Architectural Digest's 'Small Hotels to Watch'",
    date: "5 days ago"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    property: "The Artist Loft",
    win: "Launched weekend pottery workshops - sold out in 24hrs!",
    date: "1 week ago"
  }
]

export default function Community() {
  const [activeTab, setActiveTab] = useState('wins')
  const [votedPolls, setVotedPolls] = useState<number[]>([])
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: number}>({})

  const handleVote = (pollId: number, optionIndex: number) => {
    setSelectedOptions({...selectedOptions, [pollId]: optionIndex})
    setVotedPolls([...votedPolls, pollId])
  }

  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#fff5ea' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        <motion.h1 
          className="text-4xl font-bold mb-2"
          style={{ color: '#2d4d31' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Community Hub
        </motion.h1>
        
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Celebrate wins, share insights, and learn together
        </motion.p>

        {/* Tab Navigation */}
        <motion.div 
          className="flex gap-2 mb-8 overflow-x-auto pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { id: 'wins', label: 'Member Wins', icon: TrophyIcon },
            { id: 'polls', label: 'Quick Polls', icon: ChartBarIcon },
            { id: 'education', label: 'Education', icon: AcademicCapIcon }
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

        {/* Member Wins Tab */}
        {activeTab === 'wins' && (
          <div className="space-y-4">
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-md mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="font-semibold mb-3" style={{ color: '#2d4d31' }}>
                Share Your Win! 🎉
              </h3>
              <textarea
                className="w-full p-3 border-2 rounded mb-3 h-20 resize-none"
                style={{ borderColor: '#e5e7eb' }}
                placeholder="What's your latest victory? Big or small, we celebrate it all!"
              />
              <button 
                className="px-6 py-2 rounded text-white font-medium"
                style={{ backgroundColor: '#2d4d31' }}
              >
                Share Win
              </button>
            </motion.div>

            {wins.map((win, index) => (
              <motion.div
                key={win.id}
                className="bg-white rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 rounded-full p-3">
                    <TrophyIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold" style={{ color: '#2d4d31' }}>
                        {win.name}
                      </span>
                      <span className="text-sm text-gray-500">• {win.property}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{win.win}</p>
                    <span className="text-xs text-gray-500">{win.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Quick Polls Tab */}
        {activeTab === 'polls' && (
          <div className="grid md:grid-cols-2 gap-6">
            {polls.map((poll, index) => (
              <motion.div
                key={poll.id}
                className="bg-white rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <h3 className="font-semibold mb-4" style={{ color: '#2d4d31' }}>
                  {poll.question}
                </h3>
                
                <div className="space-y-2">
                  {poll.options.map((option, optionIndex) => {
                    const hasVoted = votedPolls.includes(poll.id)
                    const percentage = Math.round((option.votes / poll.totalVotes) * 100)
                    const isSelected = selectedOptions[poll.id] === optionIndex
                    
                    return (
                      <div key={optionIndex}>
                        {!hasVoted ? (
                          <button
                            className="w-full text-left p-3 rounded border-2 hover:bg-gray-50 transition-colors"
                            style={{ borderColor: '#e5e7eb' }}
                            onClick={() => handleVote(poll.id, optionIndex)}
                          >
                            {option.text}
                          </button>
                        ) : (
                          <div className="relative">
                            <div 
                              className="absolute inset-0 rounded opacity-20"
                              style={{ 
                                backgroundColor: isSelected ? '#2d4d31' : '#e5e7eb',
                                width: `${percentage}%`
                              }}
                            />
                            <div className="relative p-3 flex justify-between">
                              <span className={isSelected ? 'font-semibold' : ''}>
                                {option.text}
                              </span>
                              <span className="font-medium">
                                {percentage}%
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
                
                {votedPolls.includes(poll.id) && (
                  <p className="text-xs text-gray-500 mt-3">
                    {poll.totalVotes} votes
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Education Tab - For Your Course Content */}
        {activeTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <AcademicCapIcon className="h-16 w-16 mx-auto mb-4" style={{ color: '#2d4d31' }} />
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#2d4d31' }}>
                Hospitality Education Hub
              </h3>
              <p className="text-gray-600 mb-6">
                Coming Soon: In-depth guides, case studies, and strategies for small property success.
              </p>
              
              <div className="bg-green-50 rounded-lg p-6 text-left">
                <h4 className="font-semibold mb-3" style={{ color: '#2d4d31' }}>
                  Module 1: Creating Authentic Guest Experiences
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  [Your rhetoric course content will go here - exploring how small properties 
                  can use storytelling and authentic communication to compete with big hotels]
                </p>
                <button 
                  className="text-sm font-medium"
                  style={{ color: '#2d4d31' }}
                >
                  Preview Coming Soon →
                </button>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </main>
  )
}