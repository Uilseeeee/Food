import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { foodCard } from "@/components/foodCard";

export const Home = () => {
  return (
    <div className="flex flex-col bg-[#404040]">
      <Image src="/home.png" alt="Logo" width={2000} height={150} />
      <div className="w-screen h-28 flex justify-around flex-col">
        <div className="w-11/12 flex self-center">
          <p className="text-2xl text-white font-bold">Categories</p>
        </div>
        <div className="w-11/12 flex self-center justify-between">
          <Button className="bg-[#404040] border-[#404040]" variant="outline" size="icon">
            <ChevronLeft className="text-white"></ChevronLeft>
          </Button>
          <Button className="rounded-4xl text-black bg-white">
            Appetizers
          </Button>
          <Button className="rounded-4xl text-black bg-white">Salads</Button>
          <Button className="rounded-4xl text-black bg-white">Pizzas</Button>
          <Button className="rounded-4xl text-black bg-white">
            Lunch favorites
          </Button>
          <Button className="rounded-4xl text-black bg-white">
            Main dishes
          </Button>
          <Button className="rounded-4xl text-black bg-white">
            Fish & Sea food
          </Button>
          <Button className="rounded-4xl text-black bg-white">Side dish</Button>
          <Button className="rounded-4xl text-black bg-white">brunch</Button>
          <Button className="rounded-4xl text-black bg-white">Desserts</Button>
          <Button className="bg-[#404040] border-[#404040]" variant="outline" size="icon">
            <ChevronRight className="text-white"></ChevronRight>
          </Button>
        </div>
      </div>
    </div>
  );
};
