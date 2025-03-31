"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import { useState , useEffect } from "react";

export const FoodOrder = () => {
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      await axios.get("http://localhost:8000/foods");
    } catch (err) {
      console.error(err);
      setError("error occurred.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger
          className="absolute left-0 bottom-0 rounded-full w-9"
          asChild
        >
          <Button variant="outline">+</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <Image src="/spaghetti.png" alt="Logo" width={200} height={200} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
