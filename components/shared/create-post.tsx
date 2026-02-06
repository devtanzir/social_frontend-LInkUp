/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef } from 'react'
import { ImageIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useApp } from '@/lib/context'
import type React from 'react'

export function CreatePostModal() {
  const { users, addPost } = useApp()
  const [open, setOpen] = useState(false)
  const [imagePreview, setImagePreview] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id || '')
  const imageInputRef = useRef<HTMLInputElement>(null)

  const currentUser = users.find(u => u.id === selectedUserId)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string
        setImageUrl(dataUrl)
        setImagePreview(dataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImageUrl('')
    setImagePreview('')
    if (imageInputRef.current) {
      imageInputRef.current.value = ''
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim() && selectedUserId) {
      addPost({
        userId: selectedUserId,
        content,
        imageUrl: imageUrl || undefined,
      })
      setContent('')
      setImageUrl('')
      setImagePreview('')
      setOpen(false)
    }
  }

  const isDisabled = !content.trim() || !selectedUserId

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'outline'} className='w-full rounded-full'>
          What&apos;s on your mind?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="user-select" className="text-sm font-medium text-foreground">
              Post as
            </Label>
            <Select value={selectedUserId} onValueChange={setSelectedUserId}>
              <SelectTrigger id="user-select" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {users.map(user => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {currentUser && (
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium text-foreground">{currentUser.name}</p>
            </div>
          )}

          <div>
            <Label htmlFor="content" className="text-sm font-medium text-foreground">
              What&apos;s on your mind? *
            </Label>
            <Textarea
              id="content"
              placeholder="Share your thoughts, photos, and ideas with LinkUp..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-2 resize-none min-h-24"
              required
            />
          </div>

          <div>
            <Label htmlFor="image" className="text-sm font-medium text-foreground">
              Image (optional)
            </Label>
            <div className="mt-2">
              <Input
                ref={imageInputRef}
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="cursor-pointer"
              />
            </div>
          </div>

          {imagePreview && (
            <div className="mt-4 flex flex-col items-center gap-3">
              <img
                src={imagePreview || "/placeholder.svg"}
                alt="Post preview"
                className="w-full h-48 rounded-lg object-cover border-2 border-border"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={removeImage}
                className="gap-2 cursor-pointer justify-center items-center"
              >
                <X className="h-4 w-4" />
                Remove
              </Button>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isDisabled} className="flex-1">
              Post
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
