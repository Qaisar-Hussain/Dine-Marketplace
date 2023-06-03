import { createClient, groq } from "next-sanity";


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
        "slug": slug.current,
        content


    }`
  )
  
}
