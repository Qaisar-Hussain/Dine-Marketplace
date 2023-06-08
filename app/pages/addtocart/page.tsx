"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import React from "react";
import { myAction } from "../../serveraction/page";
import toast, { Toaster } from 'react-hot-toast';
export default async function Page({ searchParams }: any) {
  let urlOfImage = searchParams.search;
  let nameOfProduct = searchParams.name;
  let priceOfProduct = searchParams.price;
  let idOfProduct = searchParams.product_id;
  const notify = () => toast.success('Added To Cart Successfully.');
  async function handleAddtoCart() {
    fetchData();
    notify();
  


    async function fetchData() {
      const user_id = await myAction();
      const res = await fetch("/api/testreq", {
        method: "POST",
        body: JSON.stringify({
          productId: idOfProduct,
          userId: user_id.value,
          productPrice: priceOfProduct,
          productName: nameOfProduct,
          quantity: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      console.log(result);
    }
  }
  const [count, setCount] = useState(1);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    if (count >= 1) setCount(count - 1);
  };
  return (
    <>
      <div className="flex flex-row gap-4">
      <Toaster />
        <div className="little flex items-end gap-4 flex-col w-[300px] ">
          {/* <Image src="/all2-1.png" alt="img" height={100} width={100}></Image>
          <Image src="/all2-1.png" alt="img" height={100} width={100}></Image>
          <Image src="/all2-1.png" alt="img" height={100} width={100}></Image> */}
        </div>
        <div className="img   w-[900px]">
          <Image src={urlOfImage} alt="img" height={900} width={840}></Image>
        </div>
        <div className="detail mt-12 w-[300px]  ">
          <h1 className="font-bold text-2xl text-[#212121]">{nameOfProduct}</h1>
          <br />
          <h3 className="font-semibold mt-12">SELECT SIZE</h3> <br />
          <button className="rounded-full mx-4 text-[#666666]">XS</button>
          <button className="rounded-full mx-4 text-[#666666]">S</button>
          <button className="rounded-full mx-4 text-[#666666]">M</button>
          <button className="rounded-full mx-4 text-[#666666]">L</button>
          <button className="rounded-full mx-4 text-[#666666]">XL</button>
          <br />
          <p className="mt-12 font-bold">
            Quantity:
            <button
              onClick={decrement}
              className="rounded-full bg-slate-400 border-red-100"
            >
              
              &nbsp;&nbsp;- &nbsp;&nbsp;
            </button>
            &nbsp; 1 &nbsp;
            <button
              onClick={increment}
              className="rounded-full bg-slate-400 border-1 border-green-200"
            >
             
              &nbsp;&nbsp;+&nbsp;&nbsp;
            </button>
          </p>
          <br />
          <button
            onClick={handleAddtoCart}
            className="ml-6  px-8 py-1 border-2 bg-black text-white border-gray-400 "
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="description  justify-center flex items-center">
        <div className="w-4/5">
          <h1 className=" font-bold text-2xl mt-20">Product Information</h1>
          <br />
          <br />
          <hr />
        </div>
      </div>
      <div className="description  justify-center flex items-center">
        <div className="w-4/5 flex ">
          <h1 className=" font-bold text-[#666666]text-xl mt-20 mr-20">
            PRODUCT DETAILS
          </h1>
          <p className="mt-20 ml-20 w-1/2 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>{" "}
      </div>
      <div className="description  justify-center flex items-center">
        <div className="w-4/5 flex ">
          <h1 className=" font-bold text-[#666666]text-xl mt-20 mr-24">
            PRODUCT CARE
          </h1>
          <ul className="mt-20 ml-20 w-1/2 font-semibold text-justify list-disc ">
            <li>Lorem Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
    </>
  );
}
