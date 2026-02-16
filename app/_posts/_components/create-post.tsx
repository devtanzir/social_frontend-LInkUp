"use client";

import ResponsiveModal from "@/components/shared/responsive-modal";
import { Button } from "@/components/ui/button";
import useToggler from "@/hooks/useToggler";
import CreatePostForm from "./create-post-form";

const CreatePost = () => {
  const { toggle, isToggled, setIsToggled, close } = useToggler();

  return (
    <>
      <Button
        onClick={toggle}
        variant={"outline"}
        className="w-full rounded-full"
      >
        What&apos;s on your mind?
      </Button>
      {/* Modal */}
      <ResponsiveModal open={isToggled} onOpenChange={setIsToggled}>
        <CreatePostForm close={close} />
      </ResponsiveModal>
    </>
  );
};

export default CreatePost;
