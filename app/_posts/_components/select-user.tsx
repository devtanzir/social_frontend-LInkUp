import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "@/types/user";
import { SelectUserProps } from "../_interface/select-user";

const SelectUser = ({ users, formData, setFormData }: SelectUserProps) => {
  return (
    <>
      <div>
        <Label
          htmlFor="user-select"
          className="text-sm font-medium text-foreground"
        >
          Post as
        </Label>
        <Select
          value={formData.selectedUserId}
          onValueChange={(value) =>
            setFormData({ ...formData, selectedUserId: value })
          }
        >
          <SelectTrigger id="user-select" className="mt-2 cursor-pointer">
            <SelectValue placeholder="Select a user" />
          </SelectTrigger>
          <SelectContent>
            {users.map(
              (user: User) =>
                user.id && (
                  <SelectItem
                    key={user.id}
                    value={String(user.id)}
                    className="cursor-pointer"
                  >
                    {user.name}
                  </SelectItem>
                ),
            )}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SelectUser;
