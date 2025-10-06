'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ClockIcon, MapPinIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const scheduleData = [
  {
    day: "Friday, Oct 18",
    date: "Day 1",
    events: [
      {
        id: 1,
        time: "4:00 PM - 5:30 PM",
        title: "Check-In & Welcome Reception",
        location: "The Herwood Inn",
        type: "Social",
        description: "Meet your fellow operators, grab a drink, and settle in"
      },
      {
        id: 2,
        time: "5:30 PM - 7:00 PM",
        title: "Opening Keynote: Small Spaces, Big Impact",
        location: "The Herwood Inn - Main Hall",
        type: "Keynote",
        speaker: "Sarah Chen, The Ivy House"
      },
      {
        id: 3,
        time: "7:00 PM - 9:00 PM",
        title: "Farm-to-Table Dinner by Local Partners",
        location: "Woodstock Way Hotel",
        type: "Meal",
        description: "Experience what great partnerships look like"
      }
    ]
  },
  {
    day: "Saturday, Oct 19",
    date: "Day 2",
    events: [
      {
        id: 4,
        time: "8:00 AM - 9:00 AM",
        title: "Coffee & Networking",
        location: "Inn on Millstream",
        type: "Social",
        description: "Fuel up with local roasters"
      },
      {
        id: 5,
        time: "9:00 AM - 10:30 AM",
        title: "Workshop: Photography That Sells",
        location: "The Artist Loft, Beacon",
        type: "Workshop",
        description: "iPhone photography tricks + lighting on a budget"
      },
      {
        id: 6,
        time: "10:45 AM - 12:15 PM",
        title: "Speed Consulting Sessions",
        location: "Multiple Properties",
        type: "Consulting",
        description: "Book your 15-min 1:1 sessions with peers",
        bookable: true
      },
      {
        id: 7,
        time: "12:30 PM - 2:00 PM",
        title: "Lunch & Partner Playground",
        location: "Hotel Dylan",
        type: "Meal",
        description: "Try local products, test amenities, meet vendors"
      },
      {
        id: 8,
        time: "2:00 PM - 3:30 PM",
        title: "Workshop: Guest Experience Design",
        location: "Riverside Guest House",
        type: "Workshop",
        description: "From check-in to check-out: creating memorable moments"
      },
      {
        id: 9,
        time: "3:45 PM - 5:15 PM",
        title: "Speed Consulting Sessions - Round 2",
        location: "Multiple Properties",
        type: "Consulting",
        description: "More 15-min sessions available",
        bookable: true
      },
      {
        id: 10,
        time: "6:00 PM - 8:00 PM",
        title: "Wellness Hour: Massage & Meditation",
        location: "Mountain View Lodge",
        type: "Wellness",
        description: "15-min massage demos by local therapists"
      },
      {
        id: 11,
        time: "8:00 PM - Late",
        title: "Bonfire & S'mores Social",
        location: "Mountain View Lodge",
        type: "Social",
        description: "Unwind, connect, share stories"
      }
    ]
  },
  {
    day: "Sunday, Oct 20",
    date: "Day 3",
    events: [
      {
        id: 12,
        time: "9:00 AM - 10:00 AM",
        title: "Breakfast & Reflection",
        location: "The Herwood Inn",
        type: "Meal",
        description: ""
      },
      {
        id: 13,
        time: "10:00 AM - 11:30 AM",
        title: "Pricing & Revenue Workshop",
        location: "The Herwood Inn",
        type: "Workshop",
        description: "Stop undercharging: data-driven pricing strategies"
      },
      {
        id: 14,
        time: "11:45 AM - 12:30 PM",
        title: "Closing Circle & Next Steps",
        location: "The Herwood Inn",
        type: "Keynote",
        description: "Where do we go from here? Building the year-round community"
      }
    ]
  }
]

const consultingSlots = [
  { id: 1, time: "10:45 AM", expert: "Sarah Chen", specialty: "Historic Renovations", available: true },
  { id: 2, time: "11:00 AM", expert: "Marcus Johnson", specialty: "Farm-to-Table Partnerships", available: true },
  { id: 3, time: "11:15 AM", expert: "Emma Rodriguez", specialty: "Creative Retreats & Marketing", available: false },
  { id: 4, time: "11:30 AM", expert: "David Park", specialty: "Wellness Programming", available: true },
  { id: 5, time: "11:45 AM", expert: "Lisa Thompson", specialty: "Adventure Tourism", available: true },
  { id: 6, time: "12:00 PM", expert: "James Wilson", specialty: "Waterfront Properties", available: true },
]

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Day 1")
  const [showBooking, setShowBooking] = useState(false)
  const [bookedSlots, setBookedSlots] = useState<number[]>([])
  const [filterType, setFilterType] = useState("All")

  const uniqueDays = scheduleData.map(d => d.date)
  const eventTypes = ["All", "Workshop", "Social", "Consulting", "Meal", "Wellness", "Keynote"]

  const filteredData = scheduleData.filter(day => 
    selectedDay === "All" || day.date === selectedDay
  )

  const handleBookSlot = (slotId: number) => {
    if (!bookedSlots.includes(slotId)) {
      setBookedSlots([...bookedSlots, slotId])
    }
  }

  const getTypeColor = (type: string) => {
    switch(type) {
      case "Workshop": return "#2d4d31"
      case "Social": return "#8b4513"
      case "Consulting": return "#1e40af"
      case "Meal": return "#059669"
      case "Wellness": return "#7c3aed"
      case "Keynote": return "#dc2626"
      default: return "#2d4d31"
    }
  }

  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#fff5ea' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#2d4d31' }}>
            Event Schedule
          </h1>
          <p className="text-gray-600 mb-6">
            October 18-20, 2025 • Woodstock, NY Area
          </p>
        </motion.div>

        {/* Day Selector */}
        <motion.div 
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setSelectedDay("All")}
            className="px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all"
            style={{
              backgroundColor: selectedDay === "All" ? '#2d4d31' : 'white',
              color: selectedDay === "All" ? 'white' : '#2d4d31',
              border: '2px solid #2d4d31'
            }}
          >
            All Days
          </button>
          {uniqueDays.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className="px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all"
              style={{
                backgroundColor: selectedDay === day ? '#2d4d31' : 'white',
                color: selectedDay === day ? 'white' : '#2d4d31',
                border: '2px solid #2d4d31'
              }}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Type Filter */}
        <motion.div
          className="flex gap-2 mb-8 overflow-x-auto pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className="px-3 py-1 rounded-full text-sm whitespace-nowrap transition-all"
              style={{
                backgroundColor: filterType === type ? '#2d4d31' : 'white',
                color: filterType === type ? 'white' : '#666',
                border: '1px solid #ddd'
              }}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Schedule Display */}
        {filteredData.map((dayData, dayIndex) => (
          <motion.div
            key={dayData.day}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + dayIndex * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#2d4d31' }}>
              {dayData.day}
            </h2>

            <div className="space-y-4">
              {dayData.events
                .filter(event => filterType === "All" || event.type === filterType)
                .map((event, eventIndex) => (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md p-5 border-l-4"
                  style={{ borderColor: getTypeColor(event.type) }}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + eventIndex * 0.05 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          className="px-2 py-1 rounded text-xs font-medium text-white"
                          style={{ backgroundColor: getTypeColor(event.type) }}
                        >
                          {event.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#2d4d31' }}>
                        {event.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {event.description && event.description.length > 0 && (
                        <p className="text-gray-600 text-sm mb-2">
                          {event.description}
                        </p>
                      )}

                      {'speaker' in event && event.speaker && (
                        <div className="flex items-center gap-1 text-sm">
                          <UserGroupIcon className="h-4 w-4" style={{ color: '#2d4d31' }} />
                          <span style={{ color: '#2d4d31' }} className="font-medium">
                            {event.speaker}
                          </span>
                        </div>
                      )}

                      {'bookable' in event && event.bookable && (
                        <button
                          onClick={() => setShowBooking(true)}
                          className="mt-3 px-4 py-2 rounded text-white font-medium text-sm transition-all hover:opacity-90"
                          style={{ backgroundColor: '#2d4d31' }}
                        >
                          Book Your 15-Min Session
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Booking Modal */}
        {showBooking && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowBooking(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#2d4d31' }}>
                Book Your Speed Consulting Session
              </h2>
              
              <p className="text-gray-600 mb-6">
                Choose a 15-minute session with an expert who can help with your specific challenge.
              </p>

              <div className="space-y-3">
                {consultingSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className="border-2 rounded-lg p-4 flex items-center justify-between"
                    style={{ 
                      borderColor: bookedSlots.includes(slot.id) ? '#2d4d31' : '#e5e7eb',
                      backgroundColor: bookedSlots.includes(slot.id) ? '#f0f9f4' : 'white'
                    }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <ClockIcon className="h-4 w-4" style={{ color: '#2d4d31' }} />
                        <span className="font-semibold">{slot.time}</span>
                      </div>
                      <p className="font-medium" style={{ color: '#2d4d31' }}>
                        {slot.expert}
                      </p>
                      <p className="text-sm text-gray-600">{slot.specialty}</p>
                    </div>

                    {bookedSlots.includes(slot.id) ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircleIcon className="h-6 w-6" />
                        <span className="font-medium">Booked</span>
                      </div>
                    ) : slot.available ? (
                      <button
                        onClick={() => handleBookSlot(slot.id)}
                        className="px-4 py-2 rounded text-white font-medium transition-all hover:opacity-90"
                        style={{ backgroundColor: '#2d4d31' }}
                      >
                        Book
                      </button>
                    ) : (
                      <span className="text-gray-400 font-medium">Full</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowBooking(false)}
                  className="px-6 py-2 rounded font-medium"
                  style={{ 
                    backgroundColor: '#2d4d31',
                    color: 'white'
                  }}
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </main>
  )
}