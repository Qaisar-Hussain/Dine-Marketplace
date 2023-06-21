'use client'
import Image from "next/image";
import React from "react";

export default function Promotions() {
  return (
    <><div className="max-md:mt-80 max-md:bg-black ">
      <div className="bg-black flex justify-center text-[blue] my-6 font-semibold ">
        PROMOTIONS
      </div>
      <div className="flex justify-center ">
        <h1 className="text-3xl my-2 font-bold line-height-12 tracking-wider">
          Our Promotion Events
        </h1>
      </div>
      <div className="flex space-x-4 my-6 justify-center   max-[1200px]:flex-col">
        <div className="left w-[800px]  2xl:w-bg-gray-200 max-md:flex-col max-[1200px]:w-full max-md:mx-2">
          <div className="flex h-[220px] flex-row justify-between bg-[#d6d6d8] max-[1200px]:w-full">
            <div className="ml-6  max-md:w-full flex flex-col justify-center items-center  ">
              <h1 className="text-3xl font-bold">GET UP TO 60% </h1>
              <p className="tracking-widest mt-2 text-[17px]">For the summer season</p>
            </div>
            <Image
              src="/event1.webp"
              alt="img"
              width={260}
              height={200}
            ></Image>
          </div>
          <div className="bg-black my-4 text-white h-52 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">GET 30% Off</h1>
            <p className="mt-4">USE PROMO CODE</p>
            <button className="bg-[#474747] w-56 tracking-widest rounded-sm mt-2  h-8">DINEWEEKENDSALE</button>
          </div>
        </div>
        <div className="right w-[650px] h-96 flex justify-center max-md:flex-col max-[1200px]:w-full md:max-[1200px]:justify-around max-md:mt-72 ">
          <div className="mx-2 max-md:mx-0 bg-[#efe1c7] max-md:flex max-md:justify-center">
            <h2 className="m-4">
              Flex Sweatshirt <br />
             <p><s>$100.00</s> <strong>$75.00</strong> </p> 
            </h2>
            <Image
              className="bg-[#efe1c7]"
              src="/event4.webp"
              alt="img"
              width={280}
              height={340}
            ></Image>
          </div>
          <div className="mx-2 bg-[#d7d7d9] max-md:mt-6 max-md:mx-0 max-md:flex max-md:justify-center">
           <p className="m-4 ">Flex Push Button Bomber <br /> <s>$225.00</s><strong> $190.00</strong> </p>
            <Image
              className="bg-[#d7d7d9]"
              src="/event3.webp"
              alt="img"
              width={280}
              height={340}
            ></Image>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
