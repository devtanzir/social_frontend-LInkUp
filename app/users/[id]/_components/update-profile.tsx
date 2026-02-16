import { Button } from "@/components/ui/button";
import useToggler from "@/hooks/useToggler";
import UpdateUserModal from "./update-user";
import { User } from "@/types/user";
import DeleteUser from "../../_components/delete-user";

const UpdateProfile = ({ user }: { user: User }) => {
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
      <div className="flex items-center gap-2">
        <Button onClick={openDelete} variant={"destructive"}>Delete Profile</Button>
        <Button onClick={openEdit} variant={"outline"}>Update Profile</Button>
      </div>
      <UpdateUserModal user={user} isToggled={isEditOpen} setIsToggled={setIsEditToggle} close={closeEdit} />
        <DeleteUser
        user={user}
        open={isDeleteOpen}
        close={closeDelete}
        onOpenChange={setIsDeleteToggle}
      />
    </>
  );
};

export default UpdateProfile;
