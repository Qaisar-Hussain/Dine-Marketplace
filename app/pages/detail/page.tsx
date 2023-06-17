"use client"
import { useContext, useEffect } from "react";
// import noteContext from '../../../context/MyContext'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useGlobalContext } from "../../context/store";
// import MyContext, { MyProvider } from '../../../context/MyContext'


// export default  function Page({ searchParams }:any) {
//   // const a = useContext(noteContext);
//   const handleClick = (imageLink:string) => {
//     console.log(imageLink);
//     return imageLink
//   };
//   let urlOfImage = searchParams.search;
//   let priceOfProduct=searchParams.price;
//   let nameOfProduct = searchParams.name;
//   let productId = searchParams.product_id;
//   console.log(productId,priceOfProduct,nameOfProduct)
  // console.log(searchParams.search)
  // const { name, age } = useContext(MyContext);
  export default function Detail(){

 
  const { userId, setUserId, data, setData } = useGlobalContext();
  const handleClick = () => {
    setUserId(userId+1);
  };
  useEffect(() => {
    setUserId(0);
    setData([
      { firstName: 'Tim' }, 
      { firstName: 'Kyle' }, 
      { firstName: 'Michael' }
    ]);
  }, [])
  return (
    <div 
    // className={styles.container}
    >
      <p>{userId}</p>
      <button onClick={handleClick}>increment</button>
      <p>List:</p>
      {data.map((e, i) => <p key={i}>{e.firstName}</p>)}
    </div>
  )
}