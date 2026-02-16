import { Post } from "@/types/post";

export interface EditPostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  close: () => void;
  post: Post;
}
