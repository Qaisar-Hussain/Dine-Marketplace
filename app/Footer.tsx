import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-row justify-around my-40 mt-56 leading-5 mx-16  max-md:flex-col">
          <div>
            <Image
              src="/Logo.webp"
              alt="image"
              width={150}
              height={150}
              className=""
            ></Image>
            <div className="mt-12 text-justify ">
              {" "}
              Small, artisan label that offers a thoughtfully curated
              <br /> collection of high quality everyday essentials made.
            </div>
            <ul className="flex flex-row mt-12 ml-4 ">
              <li className="mx-6 font-normal">
                <Image
                  src="/twitter.png"
                  alt="img"
                  width={50}
                  height={50}
                  className="rounded-lg max-md:w-[30px] max-md:h-[30px]"
                ></Image>
              </li>
              <li className="mx-6 rounded-b-sm font-normal">
                <Image
                  className="rounded-lg  max-md:w-[30px] max-md:h-[30px]"
                  src="/fb.png"
                  alt="img"
                  width={50}
                  height={50}
                ></Image>
              </li>
              <li className="mx-6 rounded-b-sm font-normal">
                <Image className=" max-md:w-[30px] max-md:h-[30px]"src="/in.png" alt="img" width={50} height={50}></Image>
              </li>
            </ul>
          </div>
          <ul className="flex flex-col ml-4 bottom-3 max-md:mt-6">
            <li className="mx-6 font-normal">
              <strong> Company</strong>
            </li>
            <br />
            <li className="mx-6 font-normal leading-10">About</li>
            <li className="mx-6 font-normal leading-10">Terms of Use</li>
            <li className="mx-6 font-normal leading-10">Privacy Policy</li>
            <li className="mx-6 font-normal leading-10">How it Works</li>
            <li className="mx-6 font-normal leading-10">Contact Us</li>
          </ul>
          <ul className="flex flex-col ml-4 max-md:mt-6">
            <li className="mx-6 font-normal">
              <strong> Support</strong>
            </li>
            <br />
            <li className="mx-6 font-normal leading-10">Support Career</li>
            <li className="mx-6 font-normal leading-10">24h Service</li>
            <li className="mx-6 font-normal leading-10">Quick Chat</li>
          </ul>
          <ul className="flex flex-col max-md:ml-4 max-md:mt-6">
            <li className="mx-6 font-normal">
              <strong> Contact</strong>
            </li>
            <br />
            <li className="mx-6 font-normal leading-10">Whatsapp</li>
            <li className="mx-6 font-normal leading-10">Support 24h</li>
          </ul>
        </div>
      </footer>
      <hr />
      <div className="flex flex-row justify-around h-20 items-center mb-4 max-md:flex-col max-md:mt-4">
        <div className="1 leading-10">Copyright © 2023 Dine Market</div>
        <div className="2 leading-10">Design by. Weird Design Studio</div>
        <div className="3 leading-10">Code by. Qaisar Hussain</div>
      </div>
    </>
  );
}
