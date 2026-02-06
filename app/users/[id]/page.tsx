'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/lib/context'
import { ThemeToggle } from '@/components/shared/theme-toggler'
import { ProfileHeader } from '@/components/shared/profile-header'
import { PostCard } from '@/components/shared/post-card'


export default function UserProfilePage() {
  const params = useParams()
  const id = params.id as string
  // const { users, posts } = useApp()

  const user = users.find(u => u.id === id)

  if (!user) {
    notFound()
  }

  const userPosts = posts.filter(p => p.userId === user.id)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back</span>
            </Button>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{user.name}</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Profile Header */}
        <ProfileHeader user={user} />

        {/* User Posts */}
        {userPosts.length > 0 ? (
          <div className="space-y-6">
            <div className="px-2">
              <h2 className="text-lg font-semibold text-foreground mb-4">Posts</h2>
            </div>
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts yet</p>
          </div>
        )}
      </div>
    </main>
  )
}
