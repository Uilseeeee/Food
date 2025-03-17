"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

type Category = {
  id: number;
  categoryName: string;
}

export default function Page() {
  const [category, setCategory] = useState<Category[]>([]);

  const getCategory = async () => {
try{
  const res = await axios.get("http://localhost:3000/foods/category");
  setCategory(res.data);
  console.log(res.data);
  
}catch{}
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div>
      <p>{category[0]?.categoryName}</p>
    </div>
  );
}
