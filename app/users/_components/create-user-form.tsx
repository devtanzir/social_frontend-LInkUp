"use client"
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCreateUserForm from "../_hooks/useCreateUserForm";
import ImageInputGroup from "./image-input-group";

interface CreateUserFormProps {
  close: () => void;
}
const CreateUserForm = ({ close }: CreateUserFormProps) => {
  const {coverInputRef, profileInputRef, formData, handleProfileChange, handleFormChange, handleRemoveImage, handleCoverChange, handleSubmit, loading} = useCreateUserForm(close);
  return (
    <>
      <div>
        <DialogHeader>
          <DialogTitle className="p-5">Create New User</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div>
            <Label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter user name"
              value={formData.name}
              onChange={(e) => handleFormChange(e)}
              className="mt-2"
              name="name"
              required
            />
          </div>

          <ImageInputGroup
          name={"Profile Image"}
          inputRef={profileInputRef as React.RefObject<HTMLInputElement>}
          id={"profileImage"}
          handleChange={handleProfileChange}
          previewImage={formData.profileImage}
          width={96}
          height={96}
          handleRemoveImage={handleRemoveImage}
          />

          <ImageInputGroup
          name={"Cover Image"}
          inputRef={coverInputRef as React.RefObject<HTMLInputElement>}
          id={"coverImage"}
          handleChange={handleCoverChange}
          previewImage={formData.coverImage}
          width={300}
          height={128}
          handleRemoveImage={handleRemoveImage}
          />

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={close}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={loading}>
              Create
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUserForm;
