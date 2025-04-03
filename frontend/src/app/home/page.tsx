import React from "react";
import { Home } from "./_components/home";
import { FoodCardList } from "@/components/foodCardList";

function Page() {
  return (
    <div>
      <Home />
      <FoodCardList />
    </div>
  );
}

export default Page;
