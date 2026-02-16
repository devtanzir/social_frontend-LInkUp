import { ChangeEvent, RefObject } from "react";

export interface PostImageProps {
  formData: {
    image: File | string | null;
  };
  imageInputRef: RefObject<HTMLInputElement | null>;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: () => void;
}