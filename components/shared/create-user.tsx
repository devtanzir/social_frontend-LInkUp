/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef } from 'react'
import { X, } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
// import { useApp } from '@/lib/context'
import type React from 'react'

export function CreateUserModal() {
  // const { addUser } = useApp()
  const [open, setOpen] = useState(false)
  const [profilePreview, setProfilePreview] = useState('')
  const [coverPreview, setCoverPreview] = useState('')
  const profileInputRef = useRef<HTMLInputElement>(null)
  const coverInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    profileImage: '',
    coverImage: '',
  })

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string
        setFormData({ ...formData, profileImage: dataUrl })
        setProfilePreview(dataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string
        setFormData({ ...formData, coverImage: dataUrl })
        setCoverPreview(dataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeProfileImage = () => {
    setFormData({ ...formData, profileImage: '' })
    setProfilePreview('')
    if (profileInputRef.current) {
      profileInputRef.current.value = ''
    }
  }

  const removeCoverImage = () => {
    setFormData({ ...formData, coverImage: '' })
    setCoverPreview('')
    if (coverInputRef.current) {
      coverInputRef.current.value = ''
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // if (formData.name.trim()) {
    //   addUser({
    //     name: formData.name,
    //     profileImage: formData.profileImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`,
    //     coverImage: formData.coverImage || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
    //   })
    //   setFormData({ name: '', profileImage: '', coverImage: '' })
    //   setProfilePreview('')
    //   setCoverPreview('')
    //   setOpen(false)
    // }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Create User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter user name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="profileImage" className="text-sm font-medium text-foreground">
              Profile Image
            </Label>
            <div className="mt-2">
              <Input
                ref={profileInputRef}
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleProfileImageChange}
                className="cursor-pointer"
              />
            </div>
            {profilePreview && (
              <div className="mt-4 flex flex-col items-center gap-3">
                <img
                  src={profilePreview || "/placeholder.svg"}
                  alt="Profile preview"
                  className="h-24 w-24 rounded-full object-cover border-2 border-border"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={removeProfileImage}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Remove
                </Button>
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="coverImage" className="text-sm font-medium text-foreground">
              Cover Image
            </Label>
            <div className="mt-2">
              <Input
                ref={coverInputRef}
                id="coverImage"
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
                className="cursor-pointer"
              />
            </div>
            {coverPreview && (
              <div className="mt-4 flex flex-col items-center gap-3">
                <img
                  src={coverPreview || "/placeholder.svg"}
                  alt="Cover preview"
                  className="w-full h-32 rounded-lg object-cover border-2 border-border"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={removeCoverImage}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Remove
                </Button>
              </div>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
