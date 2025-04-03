import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { FoodType } from "./foodCardList";
import { useState } from "react";
import { useCart } from "@/hooks/cartProvider";

export const FoodCard = (props: { food: FoodType }) => {
  const { food } = props;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(0);

  const handleOrder = () => {
    addToCart(food._id, quantity);
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <Dialog>
      <DialogTrigger className="left-0 bottom-0 rounded-full w-full">
        <div className="flex flex-row w-100 justify-center">
          <div className="h-60 w-72 bg-white flex items-center justify-center flex-col rounded-2xl">
            <div className="relative">
              <Image
                className="rounded-2xl"
                src="/food2.png"
                alt="Logo"
                width={265}
                height={200}
              />
            </div>

            <div className="flex flex-row items-center w-64 justify-between">
              <div className="text-[#EF4444] font-semibold text-[18px]">
                {food.name}
              </div>
              <div>${food.price}</div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-row">
        <Image src="/food2.png" alt="Logo" width={200} height={200} />

        <div className="">
          <div className="text-[#EF4444] font-semibold">{food.name}</div>
          <div>
            <div>Total price</div>
            <div>${food.price * quantity}</div>
            <div className="flex flex-row w-28 items-center justify-between">
              <Button
                className="rounded-full  bg-white border-dashed border-black"
                onClick={decreaseQuantity}
              >
                <Minus className="text-black" />
              </Button>
              <div className="">{quantity}</div>
              <Button
                className="rounded-full bg-white border-black"
                onClick={increaseQuantity}
              >
                <Plus className="text-black" />
              </Button>
            </div>
          </div>
          <Button onClick={handleOrder} className="w-44 mt-10">
            Add to cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
