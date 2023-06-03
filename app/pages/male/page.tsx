"use client"
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="firstDiv images flex flex-row justify-evenly mt-16">
    <div>
      {" "}
      <Image
        className=" hover:w-[450px] hover:h-[500px] group-hover:border-black"
        src="/all2-4.png"
        width={250}
        height={270}
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
      <Image src="/male2.png"  width={250}
        height={270} alt="img"></Image>{" "}
      <p className="mt-2">
        {" "}
        <strong>
          {" "}
          Brushed Raglan Sweatshirt <br /> $195
        </strong>
      </p>
    </div>
    
  </div>
  )
}
