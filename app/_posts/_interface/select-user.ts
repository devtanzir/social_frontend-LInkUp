import { User } from "@/types/user";

export interface SelectUserProps {
  users: User[];
  formData: {
    selectedUserId: string;
    content: string;
    image: string | File | null;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      selectedUserId: string;
      content: string;
      image: string | File | null;
    }>
  >;
}
