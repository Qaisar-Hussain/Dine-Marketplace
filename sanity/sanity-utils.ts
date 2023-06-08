import { createClient, groq } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
// import myConfiguredSanityClient'
// const builder = imageUrlBuilder(sanity-utils)

// function urlFor(source:any) {
//   return builder.image(source)
// }
// const client = createClient({
//   projectId: "7e5xclrs",
//   dataset: "production",
//   apiVersion: "2023-03-09",
// })

export async function getProjects() {
 const client = createClient({
    projectId: "7e5xclrs",
    dataset: "production",
    apiVersion: "2023-03-09",
  });

   return client.fetch(
    groq`*[_type == "project"]{
        
        _id,
        _createdAt,
        name,
        price,
        productType,
        image,
        productId,
       
        content


    }`
  )
  
};
// console.log(client)
// export default client;
