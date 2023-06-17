"use client";
import { db } from "@vercel/postgres";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { myAction } from "../../serveraction/action";
import  axios from 'axios'
// import PricingCard from '../../pricingCard'

export default async function Page({ searchParams }: any) 
 {
  const[prices,setPrices] = useState([])
  let totalQuantity = 1;

  useEffect(()=>{
    // fetchPrices();
  },[])
  const fetchPrices = async ()=>{
    const {data} = await axios.get('/api/checkout-session')
    setPrices(data)
    // console.log(data)
  }
  async function handl() {
    // useEffect(()=>{
    //   fetchData();
    // })
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
      console.log(result.length);
    }
  }
  async function handleClick(){
   
      const res = await fetch("/api/checkout-session", {
        method: "GET",
        // body: JSON.stringify({
          
        //   userId: user_id.value,
        
        // }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      console.log(result);
    }
    const checkOutHandle= async function(e:any){
      e.preventDefault();
      const {data} = await axios.post('/api/payment',{
        priceId:'price_1NJBuYApxDtiPM7t3caqsiFH'
      },
     
      {
      headers:{
        'content-type':'application/json'
      }
      }
      )
      window.location.assign(data)
      console.log(data)
    }
    // const Pricing =()=>{
    //   const[prices,setPrices] = useState([])
    //   const fetchPrices = async ()=>{
    //     const {data} = await axios.get('/api/checkout-session')
    //     setPrices(data)
    //     console.log(data)
    //   }
    // }
  // const [count, setCount] = useState(1);

  // let increment = () => {
  //   setCount(count + 1);
  // };
  // let decrement = () => {
  //   console.log("clicked")
  //   if (count >= 1) setCount(count - 1);
  // };

  return (
    <>
      <h1 className="font-bold text-2xl mt-24 ml-56">Shopping Cart</h1>
      {/* <PricingCard /> */}
      <button onClick={handl} className="border-sky-200 border-2 ml-56">Get your shopping data in console</button>
      <div className="justify-center flex items-center">
        <div className="w-4/5 flex  place-content-between mt-8">
          <div className="l w-1/2 mx-8 flex place-content-between">
            <div className="image flex">
              <Image 
              src="/all2-1.png"
                // src={urlOfImage}
                alt="img"
                width={246}
                height={190}
              ></Image>
              <div className="desc ml-6 text-[#212121] text-2xl mt-6">
                {/* <h1>{nameOfProduct}</h1> */}
                <h2 className="font-bold mt-8  text-xl">Delivery Estimation</h2>
                <h2 className="text-[#ffc700] font-semibold mt-8  text-xl">
                  5 Working Days
                </h2>
                {/* <h2 className="mt-8 font-bold  text-xl">${priceOfProduct}</h2> */}
              </div>
            </div>
            <div className="delete flex place-content-between flex-col my-4 ">
              <div className="deleteicon ml-8">
                {" "}
                <button>
                  <Image
                    src="/deleteicon.png"
                    alt="img"
                    width={50}
                    height={50}
                  ></Image>
                </button>
              </div>
              <div className="increment">
                {" "}
                <button
                  // onClick={decrement}
                  className=" py-1 px-1 rounded-full border-2 bg-slate-400 border-red-100"
                >
                  {" "}
                  &nbsp;&nbsp;- &nbsp;&nbsp;
                </button>{" "}
                {/* &nbsp;{count} &nbsp; */}
                <button
                  // onClick={increment}
                  className="rounded-full bg-slate-400 p-1 border-2 border-black-200"
                >
                  {" "}
                  &nbsp;&nbsp;+&nbsp;&nbsp;{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="right mx-8 w-1/4 bg-[#fbfcff] flex justify-center ">
            <div>
              <h1 className="text-xl font-bold mt-6 ">ORDER SUMMERY</h1>
              <div className="flex flex-center mt-4">
                <h2 className="mt-4"> Product Quantity </h2>
                <h2 className="ml-8 mt-4"> {totalQuantity} Product </h2>
              </div>
              <div className="flex place-content-between mt-4">
                <h2 className=" mt-4">Sub total</h2>
                <h2 className="ml-8 mt-4">$450</h2>
              </div>
              <button onClick={checkOutHandle}className="bg-black border-2 mt-8 border-gray-600 text-white py-2 px-8  font-semibold">
                Process To Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

