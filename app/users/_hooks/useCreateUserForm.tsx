"use client"

import { useCreateUser } from "@/hooks/users/useCreateUser";
import { uploadToCloudinary } from "@/services/image-upload";
import { SubmitEventHandler, useRef, useState } from "react";
import { toast } from "sonner";

const useCreateUserForm = (close: () => void) => {

  const initialData = {
    name: "",
    profileImage: null as null | File,
    coverImage: null as null | File,
  };
  const profileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({ ...initialData });
  const {mutate} = useCreateUser();
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

    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (formData.profileImage && !(formData.profileImage instanceof File)) {
      toast.error("Invalid profile image");
      return;
    }

    if (formData.coverImage && !(formData.coverImage instanceof File)) {
      toast.error("Invalid cover image");
      return;
    }

    try {
      setLoading(true);
      const avatar = await uploadToCloudinary(formData.profileImage!);

      const cover = await uploadToCloudinary(formData.coverImage!);

      mutate({
        name: formData.name,
        profileImage: avatar.url,
        coverImage: cover.url,
      });
  } catch (error) {
    toast.error("Failed to create user");
    console.error("Error setting loading state:", error);
  }finally{
    setLoading(false);
  }
  
    setFormData({ ...initialData });
    if (profileInputRef.current) {
      profileInputRef.current.value = "";
    }
    if (coverInputRef.current) {
      coverInputRef.current.value = "";
    }
    toast.success("User created successfully!");
    close();
  }

    return {
    profileInputRef,
    coverInputRef,
    formData,
    handleProfileChange,
    handleCoverChange,
    handleFormChange,
    handleRemoveImage,
    handleSubmit,
    loading
  }
};

export default useCreateUserForm;