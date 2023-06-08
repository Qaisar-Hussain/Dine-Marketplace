const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
      
      {
        name:"image",
        title:"Image",
        type:"image"
      },
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "namee",
        title: "Nameee",
        type: "string",
      },
      {
        name:"price",
        title:"Price",
        type:"number"

      },
      {
        name:"productId",
        title:"Product Id",
        type:"string"

      },
      {
        name: "productType",
        title: "Product Type",
        type: "string",
        options: {
          list: [
            { title: "Male", value: "1" },
            { title: "Female", value: "2" },
            
          ],
          layout: "radio",
          direction: "horizontal"
        }
      }
      // {
      //   name: "slug",
      //   title: "Slug",
      //   type: "slug",
      //   options: { source: "name" }
    
      // }
    ]
    }
    export default project;