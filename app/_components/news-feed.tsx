"use client"
import PageLoader from "@/components/shared/page-loader";
import { PostCard } from "@/app/_posts/_components/post-card";
import { useGetPosts } from "@/hooks/posts/useGetPosts";
import { Post } from "@/types/post";
import { notFound } from 'next/navigation'

const NewsFeed = () => {

      const { data: posts, isLoading: isPostsLoading, isError: isPostsError } = useGetPosts()

        if (isPostsError) {
            notFound()
        }
        if (isPostsLoading) {
            return <PageLoader />
        }

    
    return (
        <>
        {posts && posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts yet. Create one to get started!</p>
          </div>
        )}
        </>
    );
};

export default NewsFeed;