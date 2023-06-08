"use client"
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (<>
    <div className="firstDiv images flex flex-row justify-evenly mt-16">
    <div onClick={()=>{console.log("clicked")}}>
      {" "}
      <Image
        className=" hover:w-[450px] hover:h-[500px] group-hover:border-black"
        src="/product1.png"
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
      <Image src="/p2.png"  width={250}
        height={270} alt="img"></Image>{" "}
      <p className="mt-2">
        {" "}
        <strong>
          {" "}
          Brushed Raglan Sweatshirt <br /> $195
        </strong>
      </p>
    </div>
    <div>
      <Image src="/p3.png"  width={250}
        height={270} alt="img"></Image>{" "}
      <p className="mt-2">
        {" "}
        <strong>
          {" "}
          Brushed Raglan Sweatshirt <br /> $195
        </strong>
      </p>
    </div>

    <div>
      <Image src="/all4.png"  width={250}
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

  <div className="secondDiv images flex flex-row justify-evenly mt-16">
    <div>
      {" "}
      <Image
        className=" hover:w-[450px] hover:h-[500px] group-hover:border-black"
        src="/all2-1.png"
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
      <Image src="/all2-2.png"  width={250}
        height={270} alt="img"></Image>{" "}
      <p className="mt-2">
        {" "}
        <strong>
          {" "}
          Brushed Raglan Sweatshirt <br /> $195
        </strong>
      </p>
    </div>
    <div>
      <Image src="/all2-3.png"  width={250}
        height={270} alt="img"></Image>{" "}
      <p className="mt-2">
        {" "}
        <strong>
          {" "}
          Brushed Raglan Sweatshirt <br /> $195
        </strong>
      </p>
    </div>
    <div>
      <Image src="/all2-2.png"  width={250}
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
  </>
  )
}
