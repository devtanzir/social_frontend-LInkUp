import { ThemeToggle } from "@/components/shared/theme-toggler";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header
      className="sticky top-0 z-50 border-b border-border/50 shadow-sm
  bg-white/60 dark:bg-gray-900/60
  backdrop-blur-sm"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
            <Link href={"/"}>
          <Image src={Logo} alt="LinkUp Logo" width={130} height={60} />
            </Link>

          <div className="flex items-center gap-2">
            <Link href="/users">
              <Button variant="outline" size="sm">
                Users
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
