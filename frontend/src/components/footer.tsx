"use client";

import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-screen h-fit bg-black flex flex-col justify-center">
      <div className="w-full h-60 flex justify-center items-center">
        <Image src="/footer.png" alt="Logo" width={1500} height={200} />
      </div>
      <div className="w-11/12 bg-black flex self-center justify-between">
        <Image src="/footerLogo.png" alt="Logo" width={100} height={100} />
        <div className="flex flex-col">
          <h4 className="text-[#71717A]">NOMNOM</h4>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[#71717A]">MENU</h4>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[#71717A]">NOMNOM</h4>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[#71717A]">NOMNOM</h4>
        </div>
      </div>
    </footer>
  );
};
