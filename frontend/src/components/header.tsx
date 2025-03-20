import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="flex bg-[#18181B] justify-between items-center p-4">
      <div className="flex flex-row justify-between">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </div>
      <div className="gap-4 flex flex-row">
      <Button className="bg-[#F4F4F5] text-black rounded-4xl" asChild>
        <Link href="/signup">Sign up</Link>
      </Button>
      <Button className="bg-[#EF4444] rounded-4xl" asChild>
        <Link href="/login">Login</Link>
      </Button>
      </div>

    </header>
  );
};
