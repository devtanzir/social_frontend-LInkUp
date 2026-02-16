import ResponsiveModal from "@/components/shared/responsive-modal";
import { EditPostModalProps } from "../_interface/edit-post-modal";
import EditPostForm from "./edit-post-form";

const EditPostModal = ({
  open,
  onOpenChange,
  close,
  post,
}: EditPostModalProps) => {
  return (
    <>
      <ResponsiveModal open={open} onOpenChange={onOpenChange}>
        <EditPostForm close={close} post={post} />
      </ResponsiveModal>
    </>
  );
};

export default EditPostModal;
