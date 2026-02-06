"use client";

import ResponsiveModal from "@/components/shared/responsive-modal";
import { Button } from "@/components/ui/button";
import useToggler from "@/hooks/useToggler";

import CreateUserForm from "./create-user-form";

const CreateUser = () => {

  const { toggle, isToggled, setIsToggled, close } = useToggler();

  return (
    <>
      <Button onClick={toggle} size="sm">
        Create User
      </Button>
      <ResponsiveModal open={isToggled} onOpenChange={setIsToggled}>
        <CreateUserForm close={close}/>
      </ResponsiveModal>
    </>
  );
};

export default CreateUser;
