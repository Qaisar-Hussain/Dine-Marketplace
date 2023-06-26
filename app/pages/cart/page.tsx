"use client";
import { db } from "@vercel/postgres";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { myAction } from "../../serveraction/action";
import axios from "axios";
import { useGlobalContext } from "../../context/store";
import { toast } from "react-hot-toast";
import Cartitems from "../../components/Cartitems";

const notify = () => toast.success('Deleted From Cart Successfully.');

export default function Page({ searchParams }: any) {


  const { cartCount, setCartCount, data, setData,priceOfAllItems, setPriceOfAllItems,cartItems, setCartItems} = useGlobalContext();
  const [prices, setPrices] = useState([]);
  console.log(cartItems,"normal")
  
  
  const fetchPrices = async () => {
    const { data } = await axios.get("/api/checkout-session");
    
  };
 
  async function handl() {
    
    fetchData();
    async function fetchData() {
      const user_id = await myAction();
      const res = await fetch("/api/getdata", {
        method: "POST",
        body: JSON.stringify({
          userId: user_id.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      let itemsCount = result.length;
      console.log(result,"result items");
      setCartCount(itemsCount);
      setCartItems(result);
     let priceOfItems =0.00
      const allCartItems:any =  result.map((item: any) => {

        priceOfItems += Number(item.price);
      })
      console.log(priceOfAllItems, "before updating")
      setPriceOfAllItems(priceOfItems)
      console.log(priceOfAllItems, "after  updating")
      
    }
  }
 
  const checkOutHandle = async function (e: any) {
    e.preventDefault();
    const itemNames = cartItems.map((item)=>item.product_name);
    const productData = {
   
      name: itemNames.join(", "), 
      image: ["/Logo.webp"],
      description: "All Products You Are Purchasing ... ",
      total:priceOfAllItems,
      
    };
    const { data } = await axios.post(
      "/api/payment",
      {
        
        product_data:productData,
        
      },

      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    window.location.assign(data);
    
  };
  
  useEffect(() => {
    handl();
  },[priceOfAllItems])

  return (
    <>
      <h1 className="font-bold text-2xl mt-24 ml-56 max-md:ml-12">Shopping Cart</h1>
   
      <div className="justify-center flex items-center">
        <div className="w-4/5 flex  place-content-between mt-8 max-md:flex-col-reverse max-md:w-full">
          <div className="w-4/5 flex flex-col place-content-between mt-8 max-md:flex-col max-md:w-full">
         <Cartitems  />
          </div>
          <div className="right mx-8 w-1/4 bg-[#fbfcff] flex justify-center border-2  max-h-80  max-md:w-full max-md:ml-0 max-md:mx-0 max-md:pb-6">
            <div>
              <h1 className="text-xl font-bold mt-6 ">ORDER SUMMERY</h1>
              <div className="flex flex-center mt-4">
                <h2 className="mt-4"> Product Quantity </h2>
                <h2 className="ml-8 mt-4">{cartCount}  Product </h2>
              </div>
              <div className="flex place-content-between mt-4">
                <h2 className=" mt-4">Sub total</h2>
                <h3 className="ml-8 mt-4">$ {priceOfAllItems} </h3>
              </div>
              <button
                onClick={checkOutHandle}
                className="bg-black border-2 mt-8 border-gray-600 text-white py-2 px-8  font-semibold"
              >
                Process To Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
