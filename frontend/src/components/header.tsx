"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/authProvider";
import { FoodOrder } from "./foodOrder";
import { useState } from "react";
import { useCart } from "@/hooks/cartProvider";

export const Header = () => {
  const { cart } = useCart();

  const [order, setOrder] = useState(false);
  const handleOrder = () => {
    setOrder((prevstate) => !prevstate);
  };
  console.log(cart);

  const { token } = useAuth();
  return (
    <header className="flex bg-[#18181B] justify-between items-center p-4">
      <div className="flex flex-row justify-between">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </div>
      {!token && (
        <div className="gap-4 flex flex-row">
          <Button className="bg-[#F4F4F5] text-black rounded-4xl" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
          <Button className="bg-[#EF4444] rounded-4xl" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      )}
      {token && (
        <div>
          <div className="flex flex-row gap-4">
            <Image
              onClick={handleOrder}
              src="/shop.png"
              alt="Logo"
              width={35}
              height={200}
            />
            <Image src="/user.png" alt="logo" width={35} height={200} />
          </div>
          {order && (
            <div className="absolute right-0">
              <FoodOrder />
            </div>
          )}
        </div>
      )}
    </header>
  );
};
