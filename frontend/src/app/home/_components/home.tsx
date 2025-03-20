import Image from "next/image";
import { Button } from "@/components/ui/button"

export const Home = () => {
  return (
    <div className="flex flex-col bg-[#404040]">
      <Image src="/home.png" alt="Logo" width={2000} height={150} />
      <div className="w-screen h-28 flex justify-around flex-col">
        <div className="w-11/12 flex self-center">
          <p className="text-2xl text-white font-bold">Categories</p>
        </div>
        <div className="w-11/12 flex self-center">
        <Button className="rounded-4xl">button</Button>
        </div>
      </div>
    </div>
  );
};
