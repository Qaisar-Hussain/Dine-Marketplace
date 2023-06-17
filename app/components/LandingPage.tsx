"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
// import MyContext from "../../context/MyContext";

export default function LandingPage() {
  // const { name, age } = useContext(MyContext);

  return (
    <div className="left flex flex-row justify-evenly max-md:flex max-md:flex-col ">
      <div className=" max-md:ml-6">
        <div className="w-[8rem] flex justify-center items-center rounded-md h-[40px] bg-[#e1edff] text-[blue] my-12 font-semibold">
          Sale 70%  
        </div>
        <h1 className="text-6xl my-2 font-semibold line-height-12">
          An Industrial Take On <br /> Streetwear
        </h1>
        <p className="text-xl font-normal text-[#666] line-[24] my-12">
          Anyone can beat you but no one can beat your outfit as long <br />
          as you wear Dine outfits.
        </p>
        <Link href="/pages/all">
          {" "}
          <button className="w-64 h-16 font-semibold flex flex-row justify-center my-12 border-2 bg-black text-white border-gray-400 items-center">
            <Image
              src="/white-shopping-cart-icon-png-8.jpg"
              alt="cart"
              width={50}
              height={50}
              className="-my-4 bg-black  "
            ></Image>
            &nbsp;&nbsp;Start Shopping
          </button>
        </Link>
        <div className="my-24 flex flex-row justify-between flex-wrap ">
          <div>
            <Image src="/fst.webp" alt="img" width={100} height={100}></Image>
          </div>
          <div>
            <Image
              src="/second.webp"
              alt="img"
              width={100}
              height={100}
            ></Image>
          </div>
          <div>
            <Image src="/third.webp" alt="img" width={100} height={100}></Image>
          </div>
          <div>
            <Image
              src="/fourth.webp"
              alt="img"
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
      </div>
      <div className="max-md:w-full  ">
        <Image
          src="/header.webp"
          alt="img"
          width={700}
          height={700}
          className="bg-[#f3efe8f5] rounded-full "
        ></Image>
      </div>
    </div>
  );
}
