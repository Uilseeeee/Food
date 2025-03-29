import React from "react";
import { Home } from "./_components/home";
import { FoodCard } from "@/components/foodCard";

function Page() {
  return (
    <div>
      <Home />
      <FoodCard />
    </div>
  );
}

export default Page;