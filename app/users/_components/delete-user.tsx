"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDeleteUser } from "@/hooks/users/useDeleteUser";
import { User } from "@/types/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const DeleteUser = ({
  open,
  close,
  onOpenChange,
  user,
}: {
  open: boolean;
  close: () => void;
  onOpenChange: (open: boolean) => void;
  user: User;
}) => {
  const { mutate: deleteUser } = useDeleteUser();
  const router = useRouter();
  const handleDelete = () => {
    deleteUser(user.id);
    close();
    toast.success("User deleted successfully")
    router.push("/users")
  };
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this User? This action cannot be
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

export default DeleteUser;
