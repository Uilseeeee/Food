"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";

type FoodType = {
  name: string;
  category: string;
  price: number;
};

export const FoodCard = () => {
  const [food, setFood] = useState<FoodType[]>([]);
  const [error, setError] = useState("");
  const [order, setOrder] = useState(false);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleOrder = () => {
    setOrder((prevstate) => !prevstate);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/foods");
      setFood(response.data);
    } catch (err) {
      console.log(err);
      setError("Error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const increaseQuantity = (index: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: (prevQuantities[index] || 0) + 1,
    }));
  };

  const decreaseQuantity = (index: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: Math.max((prevQuantities[index] || 1) - 1, 1), 
    }));
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="h-full flex bg- justify-center bg-[#404040]">
        <div className="h-80 flex items-center">
          {food.slice(0, 5).map((food, index) => (
            <Dialog key={index}>
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
                  <div className="text-[#EF4444] font-semibold">
                    {food.name}
                  </div>
                  <div>
                    <div>Total price</div>
                    <div>${food.price * (quantities[index] || 1)}</div>
                    <div className="flex flex-row">
                      <Button
                        className="rounded-full  bg-white border-dashed border-black"
                        onClick={() => decreaseQuantity(index)}
                      >
                        <Minus className="text-black" />
                      </Button>
                      <div className="">{quantities[index] || 1}</div>
                      <Button
                        className="rounded-full bg-white border-black"
                        onClick={() => increaseQuantity(index)}
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
          ))}
        </div>
      </div>
    </div>
  );
};
