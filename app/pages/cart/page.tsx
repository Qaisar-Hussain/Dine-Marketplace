"use client";
import { db } from "@vercel/postgres";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { myAction } from "../../serveraction/action";
import axios from "axios";
import { useGlobalContext } from "../../context/store";
import { toast } from "react-hot-toast";
import Cartitems from "../../components/Cartitems";
// import {useRouter} from 'next/router'
// import PricingCard from '../../pricingCard'
const notify = () => toast.success('Deleted From Cart Successfully.');

export default function Page({ searchParams }: any) {

  // let urlOfImage = searchParams.search;
  // let nameOfProduct = searchParams.name;
  // let priceOfProduct = searchParams.price;
  // let idOfProduct = searchParams.product_id;
  // console.log(idOfProduct);
  const { cartCount, setCartCount, data, setData,priceOfAllItems, setPriceOfAllItems,cartItems, setCartItems} = useGlobalContext();
  const [prices, setPrices] = useState([]);
  console.log(cartItems,"normal")
  
  
  const fetchPrices = async () => {
    const { data } = await axios.get("/api/checkout-session");
    
  };
 
  async function handl() {
    
    fetchData();
    async function fetchData() {
      const user_id = await myAction();
      const res = await fetch("/api/getdata", {
        method: "POST",
        body: JSON.stringify({
          userId: user_id.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      let itemsCount = result.length;
      console.log(result,"result items");
      setCartCount(itemsCount);
      setCartItems(result);
     let priceOfItems =0.00
      const allCartItems:any =  result.map((item: any) => {

        priceOfItems += Number(item.price);
      })
      console.log(priceOfAllItems, "before updating")
      setPriceOfAllItems(priceOfItems)
      console.log(priceOfAllItems, "after  updating")
      
    }
  }
  // async function handleClick() {
  //   const res = await fetch("/api/checkout-session", {
  //     method: "GET",
      // body: JSON.stringify({

      //   cartCount: user_id.value,

      // }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const result = await res.json();
    // console.log(result);
  // }
  const checkOutHandle = async function (e: any) {
    e.preventDefault();
    const itemNames = cartItems.map((item)=>item.product_name);
    const productData = {
      // Add your custom product data here
      name: itemNames.join(", "), 
      image: ["/Logo.webp"],
      description: "All Products You Are Purchasing ... ",
      total:priceOfAllItems,
      // total:14000
      // ... other properties
    };
    const { data } = await axios.post(
      "/api/payment",
      {
        
        product_data:productData,
        
      },

      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    window.location.assign(data);
    

  };
  // const Pricing =()=>{
  //   const[prices,setPrices] = useState([])
  //   const fetchPrices = async ()=>{
  //     const {data} = await axios.get('/api/checkout-session')
  //     setPrices(data)
  //     console.log(data)
  //   }
  // }
  // const deleteItemFromCart = (index:number,cartItems:any) => {
  //   const deletedItem = cartItems[index];
  //   console.log("Deleted item at index:", index, deletedItem);
  // };
  // const deleteItemFromCart = async (index: number, cartItems: any[]) => {
  //   const deletedItem = cartItems[index]; 
  //   const res = await fetch("/api/deleteCartItems", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       deletedItem: deletedItem, // Pass the deleted item as an object
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const result = await res.json();
  //   console.log("result1");
  //   console.log(result);
    // setPriceOfAllItems(priceOfItems)
    // allCartItems
    // console.log("Deleted item at index:", index, deletedItem);
  // }; yahahhah
//   let priceOfItems = 0
  
//  let allCartItems =  cartItems.map((item: any, index) => {

//     priceOfItems += Number(item.price);
    // console.log(priceOfItems,"lll")
    // console.log(index, item, item.price)
    
  //   if (index === 0) {
  //     return (
  //       <React.Fragment key={index}>
  //         <div
  //           className="l w-1/2 mx-8 my-2 border-2 flex border-black place-content-between"
            
  //         >
  //           <div className="image flex">
  //             <Image
  //               src="/all2-1.png"
  //               // src={urlOfImage}
  //               alt="img"
  //               width={246}
  //               height={190}
  //             ></Image>

  //             <div className="desc ml-6 text-[#212121] text-2xl mt-6">
  //               {/* <h1>{nameOfProduct}</h1> */}
  //               <h2 className="font-bold mt-8  text-xl">Delivery Estimation</h2>
  //               <h2 className="text-[#ffc700] font-semibold mt-8  text-xl">
  //                 5 Working Days
  //               </h2>
  //               {/* <h2 className="mt-8 font-bold  text-xl"> {item.price}</h2> */}
  //               {/* <h2 className="mt-8 font-bold  text-xl">${priceOfProduct}</h2> */}
  //             </div>
  //           </div>
  //           <div className="delete flex place-content-between flex-col my-4 ">
  //             <div className="deleteicon ml-8">
  //               {" "}
  //               <button onClick={() => deleteItemFromCart(index, cartItems)}>
  //                 <Image
  //                   src="/deleteicon.png"
  //                   alt="img"
  //                   width={50}
  //                   height={50}
  //                 ></Image>
  //               </button>
  //             </div>
  //             <div className="increment flex">
  //               <button
  //                 // onClick={decrement}
  //                 className=" px-4 py-1 rounded-full border-2 bg-slate-400 border-red-100"
  //               >
  //                 -
  //               </button>
  //               <p className="p-2">1</p>
  //               <button
  //                 // onClick={increment}
  //                 className="rounded-full bg-slate-400 px-4 py-1 border-2 border-black-200"
  //               >
  //                 +
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //         </React.Fragment>
  //     );
  //   } else {
  //     return (
  //       <React.Fragment key={index}>
  //         <div
  //           className="l w-1/2 mx-8 my-2 border-2 flex border-black place-content-between"
            
  //         >
  //           <div className="image flex">
  //             <Image
  //               src="/all2-1.png"
  //               // src={urlOfImage}
  //               alt="img"
  //               width={246}
  //               height={190}
  //             ></Image>

  //             <div className="desc ml-6 text-[#212121] text-2xl mt-6"></div>
  //           </div>
  //           <div className="delete flex place-content-between flex-col my-4 ">
  //             <div className="deleteicon ml-8">
  //               {" "}
  //               <button onClick={() => deleteItemFromCart(index, cartItems)}>
  //                 <Image
  //                   src="/deleteicon.png"
  //                   alt="img"
  //                   width={50}
  //                   height={50}
  //                 ></Image>
  //               </button>
  //             </div>
  //             <div className="increment border-2 border-black flex">
  //               <button
  //                 // onClick={decrement}
  //                 className=" px-4 py-1 rounded-full border-2 bg-slate-400 border-red-100"
  //               >
  //                 -
  //               </button>
  //               {/* &nbsp;{count} &nbsp; */}  <p className="p-2">1 </p> 
  //               <button
  //                 // onClick={increment}
  //                 className="rounded-full bg-slate-400 px-4 py-1  border-2 border-black-200"
  //               >
  //                 +
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //         </React.Fragment>
  //     );
  //   }

  // });
   

  // setPriceOfAllItems(priceOfItems)
  // console.log(priceOfItems)
  // setPriceOfAllItems(priceOfItems)
  // if(grandTotal===undefined){
  //   grandTotal=0
  // }
  // let grandTotal = setPriceOfAllItems(22=>12)
  // console.log(priceOfItems)
  // console.log(priceOfAllItems, "oo")
  // console.log(priceOfAllItems)
  // function deleteItemFromCart(e:any,index:number){

    // fetchData();
    // notify();
    // console.log(setcartCount(cartCount+1))
  
    // async function fetchData() {
    //   const user_id = await myAction();
      // const res = await fetch("/api/getdata", {
      //   method: "POST",
      //   body: JSON.stringify({
          // productId: idOfProduct,
          // cartCount: user_id.value,
          // itemTodelete:index,
          // productPrice: priceOfProduct,
          // productName: nameOfProduct,
          // quantity: 1,
      //   }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const result = await res.json()
      // console.log(e.target.index)
  // }
 
  useEffect(() => {
    handl();
  },[priceOfAllItems])

  return (
    <>
      <h1 className="font-bold text-2xl mt-24 ml-56">Shopping Cart</h1>
      {/* <PricingCard /> */}
      {/* <button onClick={handl} className="border-sky-200 border-2 ml-56">Get your shopping data in console</button> */}

      <div className="justify-center flex items-center">
        <div className="w-4/5 flex  place-content-between mt-8">
          <div className="w-4/5 flex flex-col place-content-between mt-8">
         <Cartitems  />
          </div>
          <div className="right mx-8 w-1/4 bg-[#fbfcff] flex justify-center border-2 border-black max-h-80 ">
            <div>
              <h1 className="text-xl font-bold mt-6 ">ORDER SUMMERY</h1>
              <div className="flex flex-center mt-4">
                <h2 className="mt-4"> Product Quantity </h2>
                <h2 className="ml-8 mt-4">  Product </h2>
              </div>
              <div className="flex place-content-between mt-4">
                <h2 className=" mt-4">Sub total</h2>
                <h3 className="ml-8 mt-4">$ {priceOfAllItems} </h3>
              </div>
              <button
                onClick={checkOutHandle}
                className="bg-black border-2 mt-8 border-gray-600 text-white py-2 px-8  font-semibold"
              >
                Process To Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
