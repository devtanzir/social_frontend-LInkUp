/* eslint-disable @next/next/no-img-element */
'use client'

import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useApp, type User } from '@/lib/context'

interface ProfileHeaderProps {
  user: User
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const { posts } = useApp()
  const userPosts = posts.filter(p => p.userId === user.id)

  return (
    <Card className="overflow-hidden border-0 bg-card shadow-sm mb-6">
      {/* Cover Image */}
      <div className="relative w-full h-40 sm:h-48 bg-muted overflow-hidden">
        <img
          src={user.coverImage || "/placeholder.svg"}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Content */}
      <div className="px-4 sm:px-6 pb-6">
        {/* Avatar and Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 mb-4 relative z-10">
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-card shadow-lg shrink-0">
            <AvatarImage src={user.profileImage || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{user.name}</h1>

            {/* Stats */}
            <div className="flex gap-6 text-sm">
              <div>
                <p className="font-semibold text-foreground">{userPosts.length}</p>
                <p className="text-muted-foreground">Posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
