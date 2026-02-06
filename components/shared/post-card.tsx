/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { useApp } from '@/lib/context'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Post } from '@/lib/context'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const { users } = useApp()
  const author = users.find((u: any) => u.id === post.userId)

  if (!author) return null

  return (
    <Card className="overflow-hidden border-0 bg-card shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Link href={`/users/${post.userId}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-1">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
              <AvatarImage src={author.profileImage || "/placeholder.svg"} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">{author.name}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{post.timestamp}</p>
            </div>
          </Link>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xl">•••</span>
          </button>
        </div>

        {/* Content */}
        <p className="text-sm sm:text-base text-foreground mb-4 leading-relaxed">{post.content}</p>

        {/* Image */}
        {post.imageUrl && (
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-muted">
            <img
              src={post.imageUrl || "/placeholder.svg"}
              alt="Post content"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground px-2 py-3 border-t border-b border-border mb-3">
          <span>{post.likes} likes</span>
          <span>{post.comments} comments</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-around gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline ml-2">Like</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline ml-2">Comment</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-muted-foreground hover:text-foreground hover:bg-muted/50"
          >
            <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline ml-2">Share</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
