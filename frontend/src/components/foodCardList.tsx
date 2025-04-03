"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FoodCard } from "./foodCard";

export type FoodType = {
  _id: string;
  name: string;
  category: string;
  price: number;
};

export const FoodCardList = () => {
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
      <div className="h-full flex bg- justify-center bg-[#404040]">
        <div className="h-80 flex items-center">
          {food.slice(0, 5).map((food, index) => (
            <FoodCard key={index} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};
