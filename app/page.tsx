// import { CreatePostModal } from '@/components/shared/create-post'
// import { PostCard } from '@/components/shared/post-card'
import Header from './_components/header'
import NewsFeed from './_components/news-feed'


export default function HomePage() {


  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
   
       <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* <div className="mb-6 flex justify-center">
          <CreatePostModal />
        </div> */}
      {/* <NewsFeed /> */}
      <NewsFeed />
        </div> 


    </main>
  )
}
