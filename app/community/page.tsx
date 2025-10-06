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
    win: "Just bought this 1890s Victorian! Ready to bring her back to life.",
    date: "2 days ago",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop"
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
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "David Park",
    property: "Riverside Guest House",
    win: "Hit 95% occupancy for 3 months straight!",
    date: "2 weeks ago"
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
                  <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
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
                    {win.image && (
                      <img 
                        src={win.image} 
                        alt="Win celebration"
                        className="rounded-lg mb-2 w-full max-w-md h-48 object-cover"
                      />
                    )}
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

        {/* Education Tab - Brand and Breakfast */}
        {activeTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#2d4d31' }}>
                  Brand and Breakfast
                </h3>
                <p className="text-lg font-medium text-gray-700">
                  A 10-Week Course for Hosts Who Want Their Space to Mean Something
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You know that magical feeling when everything just clicks? When your guests post about you 
                  without being asked, when local businesses want to partner with you, when your bookings come 
                  from word-of-mouth?
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  That's what we created at The Herwood Inn, and honestly, it came from treating every part 
                  of the experience: design, content, community, operations like they all mattered equally.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm breaking it all down in a 10-week course: the creative decisions, the relationship-building, 
                  the small touches that turned guests into friends and followers into a real community (10k strong!).
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                  This is for hosts who want their space to mean something. Let's build something beautiful together! 💛
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-3" style={{ color: '#2d4d31' }}>
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Creating a brand story that guests want to be part of</li>
                    <li>✓ Design decisions that photograph beautifully (on any budget)</li>
                    <li>✓ Building genuine partnerships with local businesses</li>
                    <li>✓ Content creation that feels authentic, not salesy</li>
                    <li>✓ Operations that scale without losing the personal touch</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <button 
                    className="px-8 py-3 rounded-full text-white font-medium text-lg shadow-lg"
                    style={{ backgroundColor: '#2d4d31' }}
                  >
                    Coming Soon - Join the Waitlist
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </main>
  )
}