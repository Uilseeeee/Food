"use client";

import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// export const FoodOrder = () => {
//   const [error, setError] = useState("");

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/foods");
//     } catch (err) {
//       console.error(err);
//       setError("error occurred.");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }


export const FoodOrder = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Card</TabsTrigger>
        <TabsTrigger value="password">Order</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>My cart</CardTitle>
            <CardDescription>
              Make changes to your order here. Click add food when youre done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="h-48"></div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add food</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Order history</CardTitle>
            <CardDescription>
              There is no return !
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 h-52">
              
            </div>
            
          </CardContent>
          <CardFooter>
            <Button>Thanks</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
