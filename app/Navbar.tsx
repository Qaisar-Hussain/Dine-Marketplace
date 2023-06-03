import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-around my-12">
      <div><Link href="/"><Image src="/Logo.webp" alt="image" width={150} height={150} className=""></Image></Link></div>
      <ul className="flex flex-row justify-around -ml-4">
        <li className="mx-6 font-normal"><Link href='pages/female'>Female</Link></li>
        <li className="mx-6 font-normal"><Link href='pages/male'>Male</Link></li>
        <li className="mx-6 font-normal"><Link href='pages/kids'>Kids</Link></li>
        <li className="mx-6 font-normal"><Link href='pages/all'>All Products</Link></li>
      </ul>
      <div><input type="text" placeholder=" what are you looking for" className="border-slate-200 border rounded-sm
      " /></div>
      <div><Link href="pages/cart"><Image src="/cart.jpeg" alt="cart" width={50} height={50} className="-my-4 "></Image></Link></div>
    </nav>
  );
}
