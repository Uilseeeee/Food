"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { FoodOrder } from "./foodOrder";
import axios from "axios";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";

type FoodType = {
  name: [];
  category: [];
};
export const FoodCard = () => {
  const [food, setFood] = useState<FoodType[]>([]);
  const [error, setError] = useState("");

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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="h-[450px] flex  justify-center">
        <div className="h-80 flex items-center">
          {food.slice(0, 5).map((food, index) => (
            <Dialog key={index}>
              <DialogTrigger className=" left-0 bottom-0 rounded-full w-9">
                <div className="flex flex-row w-100">
                  <div>
                    <Image
                      className="rounded-2xl"
                      src="/food2.png"
                      alt="Logo"
                      width={265}
                      height={200}
                    />
                    <Button className="rounded-full" variant="outline">
                      +
                    </Button>
                    <div className="text-[#EF4444] font-bold text-[18px]">
                      {" "}
                      {food.name}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <Image src="/food2.png" alt="Logo" width={200} height={200} />
                {food.name}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};
