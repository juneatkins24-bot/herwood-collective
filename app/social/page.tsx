'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HeartIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'

const posts = [
  {
    id: 1,
    image: "/social-post-1.jpg",
    caption: "79% of hosts manage alone. The other 21% found their people.",
    likes: 142,
    time: "2 hours ago"
  },
  {
    id: 2,
    image: "/social-post-2.jpg", 
    caption: "Your competition isn't Marriott. It's the Airbnb down the street.",
    likes: 89,
    time: "5 hours ago"
  },
  {
    id: 3,
    image: "/social-post-3.jpg",
    caption: "Small Spaces. Bold Impact. Real Community. October 18-20",
    likes: 234,
    time: "1 day ago"
  },
  // Add more posts as you create them
]

export default function Social() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const toggleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  return (
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#fff5ea' }}>
      <div className="max-w-md mx-auto bg-white min-h-screen">
        
        {/* Instagram-style Header */}
        <div className="sticky top-0 bg-white border-b z-10 px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">@theherwoodcollective</h1>
            <div className="flex gap-4">
              <PaperAirplaneIcon className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Stories Bar */}
        <div className="flex gap-3 p-4 border-b overflow-x-auto">
          {['Your Story', 'Sarah', 'Marcus', 'Emma', 'David'].map((name, i) => (
            <div key={i} className="flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-0.5">
                <div className="w-full h-full rounded-full bg-white p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-200"></div>
                </div>
              </div>
              <span className="text-xs mt-1">{name}</span>
            </div>
          ))}
        </div>

        {/* Posts Feed */}
        <div className="divide-y">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="pb-3"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                  <div>
                    <p className="text-sm font-semibold">theherwoodcollective</p>
                    <p className="text-xs text-gray-500">Woodstock, NY</p>
                  </div>
                </div>
                <button className="text-gray-700">•••</button>
              </div>

              {/* Post Image */}
              <div className="aspect-square bg-gray-100 relative">
                <img 
                  src={post.image} 
                  alt="Post"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-cream p-8">
                  <p className="text-center font-bold text-lg" style={{ color: '#2d4d31' }}>
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between p-3">
                <div className="flex gap-4">
                  <button onClick={() => toggleLike(post.id)}>
                    {likedPosts.includes(post.id) ? (
                      <HeartSolid className="h-6 w-6 text-red-500" />
                    ) : (
                      <HeartIcon className="h-6 w-6" />
                    )}
                  </button>
                  <ChatBubbleOvalLeftIcon className="h-6 w-6" />
                  <PaperAirplaneIcon className="h-6 w-6 -rotate-45" />
                </div>
                <BookmarkIcon className="h-6 w-6" />
              </div>

              {/* Likes and Caption */}
              <div className="px-3">
                <p className="font-semibold text-sm">
                  {likedPosts.includes(post.id) ? post.likes + 1 : post.likes} likes
                </p>
                <p className="text-sm mt-1">
                  <span className="font-semibold">theherwoodcollective</span> {post.caption}
                </p>
                <p className="text-xs text-gray-500 mt-2">{post.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}