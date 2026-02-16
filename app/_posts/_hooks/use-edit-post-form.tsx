import { useUpdatePost } from "@/hooks/posts/useUpdatePost";
import { useUsers } from "@/hooks/users/useUsers";
import { uploadToCloudinary } from "@/services/image-upload";
import { Post } from "@/types/post";
import { User } from "@/types/user";
import { SubmitEventHandler, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const useEditPostForm = (post: Post, close: () => void) => {
  const { data: users, isLoading, isError } = useUsers();
  const { mutate: updatePost, isPending } = useUpdatePost();

  const [formData, setFormData] = useState({
    selectedUserId: String(post.userId),
    content: post.content,
    image: post?.image ? post.image : (null as string | File | null),
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

      if (formData.image && typeof formData.image !== "string") {
        const postImage = await uploadToCloudinary(formData.image);
        imageUrl = postImage.url;
      }

      updatePost(
        {
          id: post.id,
          payload: {
            userId: Number(formData.selectedUserId),
            content: formData.content,
            image: imageUrl || post.image,
          },
        },
        {
          onSuccess: () => {
            toast.success("Post updated!");

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
            toast.error("Failed to update post");
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
    imageInputRef,
    handleImageChange,
    handleRemoveImage,
    handleSubmit,
    users,
    loading,
    isPending,
    isLoading,
    currentUser,
  };
};

export default useEditPostForm;
