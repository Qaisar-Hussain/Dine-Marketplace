import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
    <h1 className="font-bold text-2xl mt-24 ml-56">Shopping Cart</h1>
      <div className="justify-center flex items-center">
        <div className="w-4/5 flex  place-content-between mt-8">
          <div className="l w-1/2 mx-8 flex place-content-between">
            <div className="image flex">
              <Image src="/all2-2.png" alt="img" width={246} height={190}></Image>
              <div className="desc ml-6 text-[#212121] text-2xl mt-6"><h1>Cameryn Sash Tie Dress</h1>
              <h2 className="font-bold mt-8  text-xl">Delivery Estimation</h2>
              <h2 className="text-[#ffc700] font-semibold mt-8  text-xl">5 Working Days</h2>
              <h2 className="mt-8 font-bold  text-xl">$545</h2>
              </div>
            </div>
            <div className="delete flex place-content-between flex-col my-4 ">
              <div className="deleteicon ml-8"> <button>
              <Image src="/deleteicon.png" alt="img" width={50} height={50}></Image></button></div>
              <div className="increment"> <button className=" py-1 px-1 rounded-full border-2 bg-slate-400 border-red-100"> &nbsp;&nbsp;- &nbsp;&nbsp;</button> &nbsp; 1 &nbsp;
        <button className="rounded-full bg-slate-400 p-1 border-2 border-black-200"> &nbsp;&nbsp;+&nbsp;&nbsp; </button></div>
            </div>
          </div>
          <div className="right mx-8 w-1/4 bg-[#fbfcff] flex justify-center ">
            <div>
            <h1 className="text-xl font-bold mt-6 ">ORDER SUMMERY</h1>
            <div className="flex flex-center mt-4">
               <h2 className="mt-4"> Product Quantity </h2>
               <h2 className="ml-8 mt-4"> 1 Product  </h2>
            </div>
            <div className="flex place-content-between mt-4">
                <h2 className=" mt-4">Sub total</h2>
                <h2 className="ml-8 mt-4">$450</h2>
            </div>
            <button className="bg-black border-2 mt-8 border-gray-600 text-white py-2 px-8  font-semibold">Process To Check Out</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
