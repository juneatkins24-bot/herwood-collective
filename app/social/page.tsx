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
  {
    id: 4,
    image: "/social-post-4.jpg",
    caption: "Stop googling your problems at 2am. Ask someone who's been there.",
    likes: 178,
    time: "2 days ago"
  },
  {
    id: 5,
    image: "/social-post-5.jpg",
    caption: "$3,000 conferences → Convention centers / $299 gathering → Actual boutique hotels",
    likes: 301,
    time: "3 days ago"
  }
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
    <main className="min-h-screen pb-20" style={{ backgroundColor: '#000' }}>
      <div className="max-w-md mx-auto bg-black min-h-screen">
        
        {/* Instagram Header */}
        <div className="sticky top-0 bg-black text-white border-b border-gray-800 z-10 px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">theherwoodcollective</h1>
            <PaperAirplaneIcon className="h-6 w-6 -rotate-12" />
          </div>
        </div>

        {/* Posts Feed */}
        <div className="divide-y divide-gray-800">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="pb-3 bg-black"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 p-0.5">
                    <div className="w-full h-full rounded-full bg-black p-0.5">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-green-500 to-green-700"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">theherwoodcollective</p>
                    <p className="text-xs text-gray-400">Woodstock, NY</p>
                  </div>
                </div>
                <button className="text-gray-400">•••</button>
              </div>

              {/* Post Image - 4:5 Ratio */}
              <div className="relative bg-gray-900" style={{ aspectRatio: '4/5' }}>
                <img 
                  src={post.image} 
                  alt="Post"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center p-8" 
                  style={{ backgroundColor: '#fff5ea' }}>
                  <p className="text-center font-bold text-xl" style={{ color: '#2d4d31' }}>
                    {post.caption}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between p-3">
                <div className="flex gap-4">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className="transition-transform active:scale-125"
                  >
                    {likedPosts.includes(post.id) ? (
                      <HeartSolid className="h-7 w-7 text-red-500" />
                    ) : (
                      <HeartIcon className="h-7 w-7 text-white" />
                    )}
                  </button>
                  <ChatBubbleOvalLeftIcon className="h-7 w-7 text-white" />
                  <PaperAirplaneIcon className="h-7 w-7 text-white -rotate-45" />
                </div>
                <BookmarkIcon className="h-7 w-7 text-white" />
              </div>

              {/* Likes and Caption */}
              <div className="px-3">
                <p className="font-semibold text-sm text-white">
                  {likedPosts.includes(post.id) ? post.likes + 1 : post.likes} likes
                </p>
                <p className="text-sm mt-1 text-white">
                  <span className="font-semibold">theherwoodcollective</span> {post.caption}
                </p>
                <p className="text-xs text-gray-400 mt-2">{post.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}