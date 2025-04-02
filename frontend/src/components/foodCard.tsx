"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { FoodOrder } from "./foodOrder";
import axios from "axios";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";

type  FoodType ={
  name: string
  
}
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
      <div className="h-80 flex items-center relative">
        <div className="h-80 flex items-center">
          <Dialog>
            <DialogTrigger className="absolute left-0 bottom-0 rounded-full w-9">
              <div>
                {food.slice(0, 5).map((food, index) => (
                  <div key={index}>
                    <Image
                      className="rounded-2xl"
                      src="/food2.png"
                      alt="Logo"
                      width={265}
                      height={200}
                    />
                    <Button className="rounded-full" variant="outline">+</Button>
                    {food.name}
                  </div>
                ))}
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                  <Image src="/food2.png" alt="Logo" width={200} height={200} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
