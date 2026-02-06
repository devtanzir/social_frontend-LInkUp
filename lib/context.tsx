'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface User {
  id: string
  name: string
  profileImage: string
  coverImage: string
}

export interface Post {
  id: string
  userId: string
  content: string
  imageUrl?: string
  timestamp: string
}

interface AppContextType {
  users: User[]
  posts: Post[]
  addUser: (user: Omit<User, 'id'>) => void
  addPost: (post: Omit<Post, 'id' | 'timestamp'>) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const initialUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Anderson',
    profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  },
]

const initialPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    content: 'Just finished an amazing design workshop! Learning new perspectives on user-centered design has been incredibly inspiring. Can\'t wait to apply these insights to our upcoming projects.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    userId: '2',
    content: 'Excited to announce that our new open-source library just hit 10k stars on GitHub! Thank you to the amazing community for the support and contributions. This is just the beginning!',
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    userId: '3',
    content: 'Golden hour magic at the coastal cliffs. Nothing beats nature\'s natural lighting for photography!',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    timestamp: '6 hours ago',
  },
  {
    id: '4',
    userId: '1',
    content: 'Morning coffee runs hit different when you\'re working on something you\'re passionate about. What\'s your favorite productivity ritual?',
    timestamp: '8 hours ago',
  },
  {
    id: '5',
    userId: '2',
    content: 'Just deployed a major update to the framework. Performance improvements of 40% and a cleaner API. Check out the release notes for all the details!',
    timestamp: '10 hours ago',
  },
]

export function AppProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  const addUser = (newUser: Omit<User, 'id'>) => {
    const id = String(Math.max(...users.map(u => parseInt(u.id)), 0) + 1)
    setUsers([...users, { ...newUser, id }])
  }

  const addPost = (newPost: Omit<Post, 'id' | 'timestamp'>) => {
    const id = String(Math.max(...posts.map(p => parseInt(p.id)), 0) + 1)
    setPosts([
      {
        ...newPost,
        id,
        timestamp: 'just now',
      },
      ...posts,
    ])
  }

  return (
    <AppContext.Provider value={{ users, posts, addUser, addPost }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
