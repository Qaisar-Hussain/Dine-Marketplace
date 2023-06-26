// 'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <>
      <div className="flex justify-center text-[blue] mt-24 font-semibold max-md:mt-40">
        PROMOTIONS
      </div>
      <div className="flex justify-center ">
        <h1 className="text-3xl mt-8 font-bold line-height-12 tracking-wider">
          Check What We Have
        </h1>
      </div>
      <div className=" images flex flex-row justify-evenly mt-16 max-md:hidden">
        <div className="">
          {" "}
          <Image
            className=" hover:w-[450px] hover:h-[500px] group-hover:border-black"
            src="/product1.png"
            width={380}
            height={400}
            alt="img"
          ></Image>
          <p className="mt-2">
            {" "}
            <strong>
              {" "}
              Brushed Raglan Sweatshirt <br /> $195
            </strong>
          </p>
        </div>
        <div>
          <Image src="/p2.png" width={380} height={400} alt="img"></Image>{" "}
          <p className="mt-2">
            {" "}
            <strong>
              {" "}
              Brushed Raglan Sweatshirt <br /> $195
            </strong>
          </p>
        </div>
        <div>
          <Image src="/p3.png" width={380} height={400} alt="img"></Image>{" "}
          <p className="mt-2">
            {" "}
            <strong>
              {" "}
              Brushed Raglan Sweatshirt <br /> $195
            </strong>
          </p>
        </div>
      </div>
      <div className="flex max-md:justify-center max-md:w-full justify-end mr-24 font-semibold line-height-12 mt-24 text-6xl max-md:text-2xl max-md:mb-6 max-md:mt-12">
        <h1>
          Unique and Authentic <br /> Vintage Designer Jewellery
        </h1>
      </div>
      <div className="flex bg-[#fbfcff] flex-row justify-center gap-x-4 ml-12  max-lg:flex-col max-md:ml-0  ">
        <div className="l border-black flex flex-col mt-36 max-md:px-4  max-md:mt-12">
          <div className="top max-md:px-12 flex flex-row justify-around w-[800px] max-md:w-[350px] max-md:flex max-md:flex-col  ">
            <div className="top1 max-md:flex max-md:flex-col max-md:justify-center">
              <h3 className="font-bold"> Using Good Quality Materials</h3>
              <br />
              <p className="text-justify mt-4 max-md:mt-0">
                Lorem ipsum dolor sit amt,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div className="top2 max-md:mt-6">
              <h3 className="font-bold">100% Handmade Products</h3>
              <br />
              <p className="text-justify mt-4 max-md:mt-0">
                Lorem ipsum dolor sit amt,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-around w-[800px] max-md:w-[360px]  mt-20 max-md:flex max-md:flex-col max-md:mt-6 max-md:px-4">
            <div className="l1 max-md:px-6">
              <strong className=""> Using Good Quality Materials</strong>
              <br />
              <p className="text-justify mt-4">
                Lorem ipsum dolor sit amt,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div className="l2 max-md:mt-6 max-md:px-6">
              <strong className=""> Using Good Quality Materials</strong>
              <br />
              <p className="text-justify mt-4">
                Lorem ipsum dolor sit amt,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="r mt-12 w-1/2 flex flex-row justify-center items-center  max-lg:w-full max-md:flex max-md:flex-col">
          <Image src="/feature.webp" alt="img" width={340} height={400}></Image>
          <div className="flex flex-col justify-center ml-8 max-md:ml-2 ">
            <p className="text-justify max-md:mt-6 max-md:px-4">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="bg-black max-md:ml-4  w-56 tracking-widest rounded-sm mt-2 max-md:mt-4 h-12 text-white">
             <Link href="/all"> See All Products</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-3xl mt-40 max-md:mt-12 font-bold line-height-12 tracking-wider max-md:text-xl ">
        Subscribe Our Newsletter
      </div>
      <div className="flex justify-center  mt-8  line-height-12 max-md:text-sm">
        Get the latest information and promo offers directly
      </div>
      <div className="max-md:mx-6 flex justify-center max-md:flex-col max-md:justify-items-center mt-8 line-height-12 tracking-wider max-md:items-center">
        <input type="text" placeholder=" input email address" className="border-slate-200  font-bold border rounded-sm" />
        <button className="ml-6 max-md:ml-0 max-md:mt-6  px-8 py-1 border-2 bg-black text-white border-gray-400 max-md:w-1/2  ">Get Started</button>
      </div>
    </>
  );
}
