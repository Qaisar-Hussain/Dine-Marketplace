'use client'
import Promotions from "./components/Promotions";
import { getProjects } from "../sanity/sanity-utils";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import { useEffect } from "react";
import { GlobalContextProvider } from "./context/store";
import { useGlobalContext } from "./context/store";
import Cartitems from "./components/Cartitems";
export default async function Home() {
//   const {userId, setUserId,data,setData} = useGlobalContext();
//   useEffect(()=>{
//   setUserId('2')
//   setData([
//     {firstName:'aqaa'},
//     {firstName:"aqaa22"},
//     {firstName:"aqaa22222"}


//   ]);
//   },[])
  // const projects = await getProjects();
  {/* <Checkout/> */}
  return (
    <>

  {/* //   <div className="container">
  //     user id : {userId}
  //     {data.map((e,i)=><p key={i}>{e.firstName}</p>)}
  //   </div> */}
    {/* // <MyContext.Provider value={{ name: "Charlie", age: 40 }}> */}
   <LandingPage />
     <Promotions />
     {/* <Products  /> */}
      {/* <Cartitems /> */}
    {/* </MyContext.Provider> */}
     </>
  );
}
// export default function Hom () {
//   const { userId, setUserId, data, setData } = useGlobalContext();
//   const handleClick = () => {
//     setUserId(userId+1);
//   };
//   useEffect(() => {
//     setUserId(0);
//     setData([
//       { firstName: 'Tim' }, 
//       { firstName: 'Kyle' }, 
//       { firstName: 'Michael' }
//     ]);
//   }, [])

//   return (
//     <div 
//     // className={styles.container}
//     >
//       <p>{userId}</p>
//       <button onClick={handleClick}>increment</button>
//       <p>List:</p>
//       {data.map((e, i) => <p key={i}>{e.firstName}</p>)}
//     </div>
//   )
// }
