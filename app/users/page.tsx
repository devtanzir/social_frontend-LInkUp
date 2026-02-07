/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { User } from '@/lib/context'
import { useUsers } from '@/hooks/users/useUsers'
import UserHeader from './_components/user-header'
import { Card } from '@/components/ui/card'
import PageLoader from '@/components/shared/page-loader'

export default function UsersPage() {
  const { data: users, isLoading, isError } = useUsers()

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <div className="text-center py-12 text-red-500">Error loading users</div>
  }


  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <UserHeader />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Users Grid */}
        {users?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {users.map((user: User) => (
              <Link
                key={user.id}
                href={`/users/${user.id}`}
                className="block group"
              >
                <Card className="overflow-hidden border-0 bg-card shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                  {/* Cover Image */}
                  <div className="relative w-full h-24 sm:h-28 bg-muted overflow-hidden">
                    <img
                      src={user.coverImage || "/placeholder.svg"}
                      alt="Cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    {/* Avatar */}
                    <div className="flex justify-center -mt-12 mb-3 relative z-10">
                      <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border-4 border-card shadow-lg">
                        <AvatarImage src={user.profileImage || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <p className="font-semibold text-foreground text-sm sm:text-base truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">@user_{user.id}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No users yet. Create one to get started!</p>
            {/* <CreateUserModal /> */}
          </div>
        )}
      </div>
    </main>
  )
}
