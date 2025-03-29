"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
 
function Footer() {
  type Category = {
    id: number;
    categoryName: string;
  };
 
  const [catergories, setCatergories] = useState<Category[]>([]);
 
  const getCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8000/foods/category");
      setCatergories(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    getCategory();
  }, []);
 
  return (
    <div className="bg-black h-[755px] pt-[60px]">
      <div className="bg-red-500 h-[92px] flex items-center gap-[32px] ">
        <h2 className="text-white font-semibold text-xl w-[300px]">
          Fresh fast delivered
        </h2>
        <h2 className="text-white font-semibold text-xl w-[300px]">
          Fresh fast delivered
        </h2>
        <h2 className="text-white font-semibold text-xl w-[300px]">
          Fresh fast delivered
        </h2>
        <h2 className="text-white font-semibold text-xl w-[300px]">
          Fresh fast delivered
        </h2>
        <h2 className="text-white font-semibold text-xl w-[300px]">
          Fresh fast delivered
        </h2>
        <h2 className="text-white font-semibold text-xl w-[300px]">
          Fresh fast delivered
        </h2>
        <h2 className="text-white font-semibold text-xl w-[300px]">
          Fresh fast delivered
        </h2>
      </div>
      <div className=" mt-[76px] flex justify-center gap-[220px]">
        <div className="flex flex-col items-center">
          <div className="w-[46px] h-[38px]">
            <Image src="/hand.png" alt="logo" width={1000} height={1000} />
          </div>
          <div>
            <div className="flex">
              <p className="text-white text-xl font-semibol">Nom</p>
              <p className="text-red-600 text-xl font-semibold">Nom</p>
            </div>
            <p className="text-[12px] text-white font-normal">Swift delivery</p>
          </div>
        </div>
 
        <div className=" w-[788px] flex justify-between">
          <div className="flex flex-col gap-y-6">
            <div className="text-[16px] text-gray-500">NOMNOM</div>
            <div className="text-white flex flex-col gap-4">
              <p>Home</p>
              <p>Contact us</p>
              <p>Delivery zone</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="text-[16px] text-gray-500">MENU</div>
            <div className="flex w-[320px] justify-between">
              <div className=" w-[132px] h-[228x] text-[16px] text-white font-normal flex flex-col gap-4">
                {catergories.slice(0, 5).map((category, index) => (
                  <div key={index}>{category.categoryName}</div>
                ))}
              </div>
              <div className=" w-[132px] h-[228x] text-[16px] text-white font-normal flex flex-col gap-4">
                {catergories.slice(5, 10).map((category, index) => (
                  <div key={index}>{category.categoryName}</div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-[16px] text-gray-500">FOLLOW US</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-white border-t-[1px] mt-[100px] w-[1264px] h-[84px] flex gap-[48px] items-center">
          <p className="font-normal text-[14px] text-gray-400">
            Copy right 2024 © Nomnom LLC
          </p>
          <p className="font-normal text-[14px] text-gray-400">
            Privacy policy
          </p>
          <p className="font-normal text-[14px] text-gray-400">
            Terms and conditoin
          </p>
          <p className="font-normal text-[14px] text-gray-400">Cookie policy</p>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;