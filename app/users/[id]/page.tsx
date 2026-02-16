"use client";
import { useParams, notFound } from "next/navigation";
import { useSingleUser } from "@/hooks/users/useSingleUser";
import PageLoader from "@/components/shared/page-loader";
import Header from "@/app/_components/header";
import { ProfileHeader } from "./_components/profile-header";
import { useGetPostByUserId } from "@/hooks/users/useGetPostByUserId";
import { PostCard } from "@/app/_posts/_components/post-card";
import { Post } from "@/types/post";

export default function UserProfilePage() {
  const params = useParams();
  const id = params.id as string;

  const { data: user, isLoading, isError } = useSingleUser(+id);
  const {
    data: userPosts,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useGetPostByUserId(+id);

  if (isError || isPostsError) {
    notFound();
  }

  if (isLoading || isPostsLoading) {
    return <PageLoader />;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
        {/* Profile Header */}
        <ProfileHeader user={user} total={userPosts?.length || 0} />

        {/* User Posts */}
        {userPosts?.length > 0 ? (
          <div className="space-y-6">
            <div className="px-2">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Posts
              </h2>
            </div>
            {userPosts.map((post: Post) => (
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
  );
}
