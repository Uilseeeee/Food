"use client";

import React from "react";
import Image from "next/image";
import { FoodOrder } from "./foodOrder";

export const FoodCard = () => {
  return (
    <div>
        <div className="w-[265px] h-[200px] relative">
         <Image className="" src="/spaghetti.png" alt="Logo" width={265} height={200} />
         </div>
         <FoodOrder/>
      
    </div>
  );
};
