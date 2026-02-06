export interface Post {
  id: string
  authorId: string
  authorName: string
  authorAvatar: string
  content: string
  imageUrl?: string
  timestamp: string
  likes: number
  comments: number
}

export interface User {
  id: string
  name: string
  avatar: string
  coverImage: string
  bio: string
  followers: number
  following: number
  posts: Post[]
}

export const mockUsers: Record<string, User> = {
  '1': {
    id: '1',
    name: 'Sarah Anderson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    bio: 'Designer & Creative Thinker | Coffee enthusiast ☕',
    followers: 2450,
    following: 340,
    posts: [],
  },
  '2': {
    id: '2',
    name: 'Marcus Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    bio: 'Tech enthusiast | Open source contributor 🚀',
    followers: 3120,
    following: 512,
    posts: [],
  },
  '3': {
    id: '3',
    name: 'Emma Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    bio: 'Photographer capturing life\'s moments 📸',
    followers: 5680,
    following: 421,
    posts: [],
  },
}

export const mockPosts: Post[] = [
  {
    id: '1',
    authorId: '1',
    authorName: 'Sarah Anderson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content: 'Just finished an amazing design workshop! Learning new perspectives on user-centered design has been incredibly inspiring. Can\'t wait to apply these insights to our upcoming projects. 🎨',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    timestamp: '2 hours ago',
    likes: 234,
    comments: 45,
  },
  {
    id: '2',
    authorId: '2',
    authorName: 'Marcus Johnson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    content: 'Excited to announce that our new open-source library just hit 10k stars on GitHub! 🌟 Thank you to the amazing community for the support and contributions. This is just the beginning!',
    timestamp: '4 hours ago',
    likes: 892,
    comments: 127,
  },
  {
    id: '3',
    authorId: '3',
    authorName: 'Emma Wilson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    content: 'Golden hour magic at the coastal cliffs. Nothing beats nature\'s natural lighting for photography!',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    timestamp: '6 hours ago',
    likes: 1203,
    comments: 89,
  },
  {
    id: '4',
    authorId: '1',
    authorName: 'Sarah Anderson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    content: 'Morning coffee runs hit different when you\'re working on something you\'re passionate about. What\'s your favorite productivity ritual? ☕',
    timestamp: '8 hours ago',
    likes: 456,
    comments: 78,
  },
  {
    id: '5',
    authorId: '2',
    authorName: 'Marcus Johnson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    content: 'Just deployed a major update to the framework. Performance improvements of 40% and a cleaner API. Check out the release notes for all the details!',
    timestamp: '10 hours ago',
    likes: 567,
    comments: 92,
  },
]

// Add posts to users
mockUsers['1'].posts = mockPosts.filter(post => post.authorId === '1')
mockUsers['2'].posts = mockPosts.filter(post => post.authorId === '2')
mockUsers['3'].posts = mockPosts.filter(post => post.authorId === '3')
