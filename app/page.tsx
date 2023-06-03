// "use client"
// import { ChakraProvider } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import Promotions from './Promotions'
import { getProjects } from '../sanity/sanity-utils'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'
// import {navbar} from './navbar'


export default async function Home() {
  const projects = await getProjects()
  return (
  <>
  {/* <Navbar/> */}
  <LandingPage/>
  <Promotions/>
  <Products/>
  {/* <Footer/> */}
  {/* <button><Link href="./navbar">navbar</Link></button> */}
 {/* <ChakraProvider> */}
      {/* <Component {...pageProps} /> */}
    {/* </ChakraProvider> */}
  {/* <div> hello
     {projects.map((project:any)=>(
      <div key = {project._id}>{project.name} and {project.slug}</div>

     ))}
    </div> */}
    </>
  )
};

