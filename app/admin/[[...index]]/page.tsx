"use client"
import React from 'react'
import {NextStudio} from 'next-sanity/studio'
import config from '../../../sanity.config'



export default function page() {
  return <>
  <NextStudio config={config}/>  
  <div>hello</div>
  </>
    
  
}