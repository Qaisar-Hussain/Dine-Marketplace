import Image from 'next/image';

import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/store';



export default function Cartitems() {
  
    const { cartCount, setCartCount, data, setData,priceOfAllItems, setPriceOfAllItems,cartItems, setCartItems} = useGlobalContext();

    
    let priceOfItems:number=0;
   
    const allCartItems:any =  cartItems.map((item: any, index) => {

        priceOfItems += Number(item.price);
       
        if (index === 0) {
          return (
            <React.Fragment key={index}>
              <div
                className="l w-1/2 mx-8 my-2 border-2 flex  place-content-between"
                
              >
                <div className="image flex">
                  <Image
                    src={item.image_url}
                    // src={urlOfImage}
                    alt="img"
                    width={246}
                    height={190}
                  ></Image>
    
                  <div className="desc ml-6 text-[#212121] text-2xl mt-6">
                    {/* <h1>{nameOfProduct}</h1> */}
                    <h2 className="font-bold mt-8  text-xl">Delivery Estimation</h2>
                    <h2 className="text-[#ffc700] font-semibold mt-8  text-xl">
                      5 Working Days
                    </h2>
                    {/* <h2 className="mt-8 font-bold  text-xl"> {item.price}</h2> */}
                    {/* <h2 className="mt-8 font-bold  text-xl">${priceOfProduct}</h2> */}
                  </div>
                </div>
                <div className="delete flex place-content-between flex-col my-4 ">
                  <div className="deleteicon ml-8">
                    {" "}
                    <button onClick={() => deleteItemFromCart(index, cartItems)}>
                      <Image
                        src="/deleteicon.png"
                        alt="img"
                        width={50}
                        height={50}
                      ></Image>
                    </button>
                  </div>
                  <div className="increment flex">
                    <button
                      // onClick={decrement}
                      className=" px-4 py-1 rounded-full border-2 bg-slate-400 border-red-100"
                    >
                      -
                    </button>
                    <p className="p-2">1</p>
                    <button
                      // onClick={increment}
                      className="rounded-full bg-slate-400 px-4 py-1 border-2 border-black-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={index}>
              <div
                className="l w-1/2 mx-8 my-2 border-2 flex place-content-between"
                
              >
                <div className="image flex">
                  <Image
                    src={item.image_url}
                    // src={urlOfImage}
                    alt="img"
                    width={246}
                    height={190}
                  ></Image>
    
                   <div className="desc ml-6 text-[#212121] text-2xl mt-6">
                    {/* <h1>{nameOfProduct}</h1> */}
                    <h2 className="font-bold mt-8  text-xl">{item.product_name}</h2>
                    <h2 className="text-[#ffc700] font-semibold mt-8  text-xl">
                     $ {item.price}
                    </h2>
                    {/* <h2 className="mt-8 font-bold  text-xl"> {item.price}</h2> */}
                    {/* <h2 className="mt-8 font-bold  text-xl">${priceOfProduct}</h2> */}
                  </div>
                </div>
                <div className="delete flex place-content-between flex-col my-4 ">
                  <div className="deleteicon ml-8">
                    {" "}
                    <button onClick={() => deleteItemFromCart(index, cartItems)}>
                      <Image
                        src="/deleteicon.png"
                        alt="img"
                        width={50}
                        height={50}
                      ></Image>
                    </button>
                  </div>
                  <div className="increment border-2 border-black flex">
                    <button
                      // onClick={decrement}
                      className=" px-4 py-1 rounded-full border-2 bg-slate-400 border-red-100"
                    >
                      -
                    </button>
                    {/* &nbsp;{count} &nbsp; */}  <p className="p-2">1 </p> 
                    <button
                      // onClick={increment}
                      className="rounded-full bg-slate-400 px-4 py-1  border-2 border-black-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              </React.Fragment>
          );
        }
    
      });
      
      const deleteItemFromCart = async (index: number, cartItems: any[]) => {
        const deletedItem = cartItems[index]; 
        const res = await fetch("/api/deleteCartItems", {
          method: "POST",
          body: JSON.stringify({
            deletedItem: deletedItem, // Pass the deleted item as an object
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await res.json();
        console.log("result1");
        console.log(result);
        // setPriceOfAllItems(priceOfItems)
        console.log(priceOfItems)
        console.log(priceOfAllItems,"all global")
        window.location.reload();
       
      };



  return (  <React.Fragment>{allCartItems}</React.Fragment> 
    
  )
}
