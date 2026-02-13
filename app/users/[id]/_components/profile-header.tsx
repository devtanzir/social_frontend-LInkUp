'use client'

import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { type User } from '@/lib/context'
import Image from 'next/image'

interface ProfileHeaderProps {
  user: User
  total?: number
}

export function ProfileHeader({ user, total }: ProfileHeaderProps) {

  return (
    <Card className="overflow-hidden border-0 bg-card shadow-sm mb-6 pt-0 rounded-t-none">
      {/* Cover Image */}
      <div className="relative w-full h-40 sm:h-48 bg-muted overflow-hidden">
        <Image
          src={user.coverImage || "/placeholder.svg"}
          alt="Cover"
          width={1200}
          height={480}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Content */}
      <div className="px-4 sm:px-6 pb-6">
        {/* Avatar and Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-16 mb-4 relative z-10">
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-card shadow-lg shrink-0">
            <AvatarImage className=' object-cover' src={user.profileImage || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{user.name}</h1>

            {/* Stats */}
            <div className="flex gap-6 text-sm">
              <div>
                <p className="font-semibold text-foreground">{total} . <span className="text-muted-foreground">Posts</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
