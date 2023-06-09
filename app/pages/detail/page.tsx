"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


export default  function page({ searchParams }:any) {
  const handleClick = (imageLink:string) => {
    console.log(imageLink);
    return imageLink
  };
  let urlOfImage = searchParams.search;
  let priceOfProduct=searchParams.price;
  let nameOfProduct = searchParams.name;
  let productId = searchParams.product_id;
  console.log(productId,priceOfProduct,nameOfProduct)
  // console.log(searchParams.search)
  return (
    <>
    <div className="flex flex-row gap-4">
   
      <div className="little flex items-end gap-4 flex-col w-[300px] ">
        {/* <Image src="/all2-1.png" alt="img" height={100} width={100}></Image>
        <Image src="/all2-1.png" alt="img" height={100} width={100}></Image>
        <Image src="/all2-1.png" alt="img" height={100} width={100}></Image> */}
      </div>
      <div 
      // onClick={() => handleClick(urlOfImage)}
      className="img   w-[900px]">
        
        <Image src={urlOfImage} alt="img" height={900} width={840}></Image>
       
      </div>
      <div className="detail mt-12 w-[300px]  ">
        <h1 className="font-bold text-2xl text-[#212121]">{
        nameOfProduct}</h1><br />
        <h3 className="font-semibold mt-12">SELECT SIZE</h3> <br />
        <button className="rounded-full mx-4 text-[#666666]">XS</button>
        <button className="rounded-full mx-4 text-[#666666]">S</button>
        <button className="rounded-full mx-4 text-[#666666]">M</button>
        <button className="rounded-full mx-4 text-[#666666]">L</button>
        <button className="rounded-full mx-4 text-[#666666]">XL</button>
        <br />
        <p className="mt-12 font-bold">Quantity: <button className="rounded-full bg-slate-400 border-red-100"> &nbsp;&nbsp;- &nbsp;&nbsp;</button> &nbsp; 1 &nbsp;
        <button className="rounded-full bg-slate-400 border-1 border-green-200"> &nbsp;&nbsp;+&nbsp;&nbsp; </button></p><br />
        <button className="ml-6  px-8 py-1 border-2 bg-black text-white border-gray-400 ">
          <Link 
           href={{
            pathname:'/pages/',
            query: {
              search: urlOfImage,
              price:priceOfProduct,
              name:nameOfProduct,
              id:productId
            }
          }}>
          Add to Cart</Link></button>
      </div>
    </div>
    <div className="description  justify-center flex items-center">
        <div className="w-4/5">
        <h1 className=" font-bold text-2xl mt-20">Product Information</h1><br /><br />
        <hr /></div>
    </div>
    <div className="description  justify-center flex items-center">
        <div className="w-4/5 flex ">
        <h1 className=" font-bold text-[#666666]text-xl mt-20 mr-20">PRODUCT DETAILS</h1>
        <p className="mt-20 ml-20 w-1/2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div> </div>
        <div className="description  justify-center flex items-center">
        <div className="w-4/5 flex ">
        <h1 className=" font-bold text-[#666666]text-xl mt-20 mr-24">PRODUCT CARE</h1>
        <ul className="mt-20 ml-20 w-1/2 font-semibold text-justify list-disc ">
            <li>Lorem Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
        </ul>
        </div></div>
   
    </>
  );
}
