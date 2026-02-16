import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateUser } from "@/hooks/users/useUpdateUser";
import { uploadToCloudinary } from "@/services/image-upload";
import { User } from "@/types/user";
import { SubmitEventHandler, useRef, useState } from "react";
import { toast } from "sonner";
import ImageInputGroup from "../../_components/image-input-group";
import DottedSeparator from "@/components/shared/dotted-separator";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const UpdateUserForm = ({ close, user }: { close: () => void; user: User }) => {


  const profileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: user.name,
    profileImage: user?.profileImage ? user.profileImage : (null as string | File | null),
    coverImage: user?.coverImage ? user.coverImage : (null as string | File | null),
  });
  const {mutate: updateUser, isPending} = useUpdateUser();
  const [loading, setLoading] = useState(false);

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, profileImage: file })
    }
  }
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, coverImage: file })
    }
  }

  const handleRemoveImage = (type: "profileImage" | "coverImage") => {
    setFormData({ ...formData, [type]: null });
    if (type === "profileImage" && profileInputRef.current) {
      profileInputRef.current.value = "";
    }
    if (type === "coverImage" && coverInputRef.current) {
      coverInputRef.current.value = "";
    }
  }
    

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!formData?.name.trim()) {
      toast.error("Name is required");
      return;
    }


    try {
      setLoading(true);
      let ProfileImageUrl = "";
      let CoverImageUrl = "";
      
            if (formData.profileImage && typeof formData.profileImage !== "string") {
              const ProfileImage = await uploadToCloudinary(formData.profileImage);
              ProfileImageUrl = ProfileImage.url;
            }

            if (formData.coverImage && typeof formData.coverImage !== "string") {
              const CoverImage = await uploadToCloudinary(formData.coverImage);
              CoverImageUrl = CoverImage.url;
            }

      updateUser({
        id: user.id,
        payload: {
          name: formData.name,
          profileImage: ProfileImageUrl || user.profileImage,
          coverImage: CoverImageUrl || user.coverImage,
        }
      });
  } catch (error) {
    toast.error("Failed to create user");
    console.error("Error setting loading state:", error);
  }finally{
    setLoading(false);
  }
  
      setFormData({
    name: "",
    profileImage: null as string | File | null,
    coverImage: null as string | File | null,
  });
    if (profileInputRef.current) {
      profileInputRef.current.value = "";
    }
    if (coverInputRef.current) {
      coverInputRef.current.value = "";
    }
    toast.success("User created successfully!");
    close();
  }
    return (
        <>
                 <div>
        <DialogHeader>
          <DialogTitle className="p-5">Update User</DialogTitle>
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

          <DottedSeparator className="py-2" />

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={close}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={loading || isPending}>
              {loading ? <Loader className='size-6 animate-spin text-muted-foreground'/> : "Update"}
            </Button>
          </div>
        </form>
      </div> 
        </>
    );
};

export default UpdateUserForm;