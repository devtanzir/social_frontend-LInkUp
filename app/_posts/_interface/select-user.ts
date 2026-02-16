import { User } from "@/types/user";

export interface SelectUserProps {
  users: User[];
  formData: {
    selectedUserId: string;
    content: string;
    image: File | null;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      selectedUserId: string;
      content: string;
      image: File | null;
    }>
  >;
}
