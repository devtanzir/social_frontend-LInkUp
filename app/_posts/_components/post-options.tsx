"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useToggler from "@/hooks/useToggler";
import { Post } from "@/types/post";
import { MoreVertical } from "lucide-react";
import EditPostModal from "./edit-post-modal";
import DeletePost from "./delete-post";
const PostOptions = ({ post }: { post: Post }) => {
  const {
    isToggled: isEditOpen,
    open: openEdit,
    close: closeEdit,
    setIsToggled: setIsEditToggle,
  } = useToggler();
  const {
    isToggled: isDeleteOpen,
    open: openDelete,
    close: closeDelete,
    setIsToggled: setIsDeleteToggle,
  } = useToggler();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 cursor-pointer rounded-full"
            asChild
          >
            <MoreVertical className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={openEdit}
            className="cursor-pointer hover:bg-primary/10 focus:bg-primary/10 data-[state=open]:bg-primary/10"
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={openDelete}
            className="text-destructive cursor-pointer hover:bg-destructive/10 focus:bg-destructive/10 data-[state=open]:bg-destructive/10 hover:text-destructive "
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditPostModal
        post={post}
        close={closeEdit}
        open={isEditOpen}
        onOpenChange={setIsEditToggle}
      />
      <DeletePost
        post={post}
        open={isDeleteOpen}
        close={closeDelete}
        onOpenChange={setIsDeleteToggle}
      />
    </>
  );
};

export default PostOptions;
