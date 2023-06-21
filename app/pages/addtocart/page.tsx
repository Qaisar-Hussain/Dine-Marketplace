"use client";
// useTransition
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { myAction } from "../../serveraction/action";
import toast, { Toaster } from 'react-hot-toast';
import { useGlobalContext } from "../../context/store";


export default function Page({ searchParams }: any) {
  const { cartCount, setCartCount, data, setData,priceOfAllItems, setPriceOfAllItems } = useGlobalContext();
  
  // const handleAddToCart2 = async () => {
  //   setUserId(userId => userId + 1);
  // };

  // useEffect(() => {
  //   handleAddToCart();
  // }, []);
    // let countItem = setUserId(userId+1);
  //   setData([
  //     { firstName: 'Tim' }, 
  //     { firstName: 'Kyle' }, 
  //     { firstName: 'Michael' }
  //   ]);
  // }, [])
  let count = 0;
  
  
  let urlOfImage = searchParams.search;
  let nameOfProduct = searchParams.name;
  let priceOfProduct = searchParams.price;
  let idOfProduct = searchParams.product_id;
  const notify = () => toast.success('Added To Cart Successfully.');
 

  
   const handleAddToCart = async ()=>{
  
    fetchData();
    notify();
    // console.log(setUserId(userId+1))
  
    async function fetchData() {
      const user_id = await myAction();
      const res = await fetch("/api/testreq", {
        method: "POST",
        body: JSON.stringify({
          productId: idOfProduct,
          userId: user_id.value,
          productPrice: priceOfProduct,
          productName: nameOfProduct,
        ImageUrl:urlOfImage,
          quantity: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      // let count = result.legth
      // let count = 
      setCartCount(cartCount => cartCount + 1);
      console.log(priceOfAllItems,"before updating state")
      // setPriceOfAllItems(priceOfAllItems => priceOfAllItems+Number(priceOfProduct) )
      // setCartCount(count   
      console.log(cartCount)
       console.log(priceOfAllItems,"addtocart after updating state")
      // console.log(result.length);
      // console.log(result,user_id.value,"LLLLL");
      // console.log(user_id.value,"LLLLL")
    }
    console.log("clicked2")
    // setPriceOfAllItems(priceOfAllItems)
  }

  // useEffect(() => {
  //   handleAddToCart();
  // }, []);
  
  return (
    <>
      <div className="flex flex-row gap-4  max-lg:justify-items-center max-lg:flex-col border-2 border-black">
      <Toaster />
        <div className="max-lg:flex-col max-lg:items-center little flex items-end gap-4 flex-col w-[300px] max-lg:w-full max-lg:bg-black ">
          {/* <Image src="/all2-1.png" alt="img" height={100} width={100}></Image>
          <Image src="/all2-1.png" alt="img" height={100} width={100}></Image>
          <Image src="/all2-1.png" alt="img" height={100} width={100}></Image> */}
        </div>
        <div className="img w-[900px] max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center">
          <Image src={urlOfImage} alt="img" height={900} width={840}></Image>
        </div>
        <div className="detail mt-12 w-[300px]  max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center">
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
              // onClick={decrement}
              className="rounded-full bg-slate-400 border-red-100"
            >
              
              &nbsp;&nbsp;- &nbsp;&nbsp;
            </button>
            &nbsp; {count} &nbsp;
            <button
              // onClick={increment}
              className="rounded-full bg-slate-400 border-1 border-green-200"
            >
             
              &nbsp;&nbsp;+&nbsp;&nbsp;
            </button>
          </p>
          <br />
          <button
            onClick={handleAddToCart}
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
