import { ThemeToggle } from "@/components/shared/theme-toggler";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import CreateUser from "./create-user";

const UserHeader = () => {
  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-border/50 shadow-sm
        bg-white/60 dark:bg-gray-900/60
        backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back</span>
            </Button>
          </Link>
          <Link className="hidden sm:block" href={"/"}>
            <Image src={Logo} alt="LinkUp Logo" width={130} height={60} />
          </Link>
          <div className="flex items-center gap-2">
            <CreateUser />
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
