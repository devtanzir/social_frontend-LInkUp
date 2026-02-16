"use client";

import PageLoader from "@/components/shared/page-loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { useUsers } from "@/hooks/users/useUsers";
import Link from "next/link";
import { toast } from "sonner";
import CreateUser from "./create-user";
import { User } from "@/types/user";

const UserList = () => {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return toast.error("Failed to load users. Please try again later.");
  }
  return (
    <>
      {users && users?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {users.map((user: User) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="block group"
            >
              <Card className="overflow-hidden border-0 bg-card shadow-sm hover:shadow-xl py-0 transition-shadow cursor-pointer rounded-t-md h-full">
                {/* Content */}
                <div className="pb-4">
                  {/* Avatar */}
                  <div className="flex justify-center mb-3 relative z-10">
                    <Avatar className="h-full! w-full! sm:h-28 sm:w-28 shadow-lg rounded-t-md rounded-b-none">
                      <AvatarImage
                        src={user.profileImage || "/placeholder.svg"}
                        alt={user.name}
                        className="object-cover"
                      />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <p className="font-semibold text-foreground text-sm sm:text-base truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      @{user.name.toLowerCase().replace(/\s+/g, "_")}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            No users yet. Create one to get started!
          </p>
          <CreateUser />
        </div>
      )}
    </>
  );
};

export default UserList;
