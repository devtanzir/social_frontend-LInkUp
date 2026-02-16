"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDeletePost } from "@/hooks/posts/useDeletePost";
import { Post } from "@/types/post";
const DeletePost = ({
  open,
  close,
  onOpenChange,
  post,
}: {
  open: boolean;
  close: () => void;
  onOpenChange: (open: boolean) => void;
  post: Post;
}) => {
  const { mutate: deletePost } = useDeletePost();
  const handleDelete = () => {
    deletePost(post.id);
    close();
  };
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete Post</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this post? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>

          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="flex-1 cursor-pointer"
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeletePost;
