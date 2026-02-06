'use client'
// import { CreatePostModal } from '@/components/shared/create-post'
// import { PostCard } from '@/components/shared/post-card'
import Header from './_components/header'


export default function HomePage() {


  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
   
      {/* <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        <div className="mb-6 flex justify-center">
          <CreatePostModal />
        </div>

  
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts yet. Create one to get started!</p>
          </div>
        )}
      </div> */}

    </main>
  )
}
