import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/types/user";

const CurrentUser = ({ currentUser }: { currentUser: User | undefined }) => {
  if (!currentUser) return null;
  return (
    <>
      <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarImage
            className="object-cover"
            src={currentUser.profileImage || "/placeholder.svg"}
            alt={currentUser.name}
          />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium text-foreground">
          {currentUser.name}
        </p>
      </div>
    </>
  );
};

export default CurrentUser;
