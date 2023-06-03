import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <>
      <div className="flex justify-center text-[blue] mt-24 font-semibold">
        PROMOTIONS
      </div>
      <div className="flex justify-center ">
        <h1 className="text-3xl mt-8 font-bold line-height-12 tracking-wider">
          Check What We Have
        </h1>
      </div>
      <div className=" images flex flex-row justify-evenly mt-16">
        <div>
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
      <div className="flex justify-end mr-24 font-semibold line-height-12 mt-24 text-6xl">
        <h1>
          Unique and Authentic <br /> Vintage Designer Jewellery
        </h1>
      </div>
      <div className="flex bg-[#fbfcff] flex-row justify-center gap-x-4 ml-12">
        <div className="l border-black flex flex-col mt-36">
          <div className="top flex flex-row justify-around w-[800px]">
            <div className="top1">
              <strong className=""> Using Good Quality Materials</strong>
              <br />
              <p className="text-justify mt-4">
                Lorem ipsum dolor sit amt,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div className="top2">
              <strong className="">100% Handmade Products</strong>
              <br />
              <p className="text-justify mt-4">
                Lorem ipsum dolor sit amt,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-around w-[800px] mt-20">
            <div className="l1">
              <strong className=""> Using Good Quality Materials</strong>
              <br />
              <p className="text-justify mt-4">
                Lorem ipsum dolor sit amt,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
            <div className="l2">
              <strong className=""> Using Good Quality Materials</strong>
              <br />
              <p className="text-justify mt-4">
                Lorem ipsum dolor sit amt,
                <br /> consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="r mt-12 w-1/2 flex flex-row justify-center items-center">
          <Image src="/feature.webp" alt="img" width={340} height={400}></Image>
          <div className="flex flex-col justify-center ml-8">
            <p className="text-justify ">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="bg-black w-56 tracking-widest rounded-sm mt-2  h-12 text-white">
             <Link href="/all"> See All Products</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-3xl mt-40 font-bold line-height-12 tracking-wider">
        Subscribe Our Newsletter
      </div>
      <div className="flex justify-center  mt-8  line-height-12 ">
        Get the latest information and promo offers directly
      </div>
      <div className="flex justify-center  mt-8 line-height-12 tracking-wider">
        <input type="text" placeholder=" input email address" className="border-slate-200  font-bold border rounded-sm" />
        <button className="ml-6  px-8 py-1 border-2 bg-black text-white border-gray-400 ">Get Started</button>
      </div>
    </>
  );
}
