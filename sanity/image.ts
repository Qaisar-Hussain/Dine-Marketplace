import React from 'react'
import myConfiguredSanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

export function urlFor(source:any) {
  return builder?.image(source)
}