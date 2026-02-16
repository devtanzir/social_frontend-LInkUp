import ResponsiveModal from "@/components/shared/responsive-modal";
import React from "react";
import UpdateUserForm from "./update-user-form";
import { User } from "@/types/user";

const UpdateUserModal = ({
  user,
  isToggled,
  setIsToggled,
  close,
}: {
  user: User;
  isToggled: boolean;
  setIsToggled: (value: boolean) => void;
  close: () => void;
}) => {
  return (
    <>
      <ResponsiveModal open={isToggled} onOpenChange={setIsToggled}>
        <UpdateUserForm user={user} close={close} />
      </ResponsiveModal>
    </>
  );
};

export default UpdateUserModal;
