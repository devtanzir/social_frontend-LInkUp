import { useCreatePost } from "@/hooks/posts/useCreatePost";
import { useUsers } from "@/hooks/users/useUsers";
import { uploadToCloudinary } from "@/services/image-upload";
import { User } from "@/types/user";
import { SubmitEventHandler, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const usePostForm = ( close : () => void) => {

      const { data: users, isLoading, isError } = useUsers();
  const { mutate, isPending } = useCreatePost();

  const [formData, setFormData] = useState({
    selectedUserId: "",
    content: "",
    image: null as File | null,
  });
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };
  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null });
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!formData.content.trim()) {
      toast.error("Content is required");
      return;
    }

    try {
      setLoading(true);
      let imageUrl = "";

      if (formData.image) {
        const postImage = await uploadToCloudinary(formData.image);
        imageUrl = postImage.url;
      }

      mutate(
        {
          userId: Number(formData.selectedUserId),
          content: formData.content,
          image: imageUrl,
        },
        {
          onSuccess: () => {
            toast.success("Post created!");

            setFormData({
              selectedUserId: String(users?.[0]?.id) || "",
              content: "",
              image: null,
            });

            if (imageInputRef.current) {
              imageInputRef.current.value = "";
            }

            close();
          },
          onError: () => {
            toast.error("Failed to create post");
          },
        },
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load users");
    }
  }, [isError]);

  const currentUser = users?.find(
    (u: User) => String(u.id) === formData.selectedUserId,
  );

    return {
      formData,
      setFormData,
      handleImageChange,
      handleRemoveImage,
      handleSubmit,
      imageInputRef,
      currentUser,
      users,
      loading,
      isPending,
      isLoading,
    };
};

export default usePostForm;