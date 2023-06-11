"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProjects } from "../../../sanity/sanity-utils";
import { urlFor } from "../../../sanity/image";
import Link from "next/link";

// export const handleClick = (imageLink: string) => {
//   console.log(imageLink);
//   return imageLink;
// };

export default function Page() {

   const handleClick = (imageLink: string) => {
  console.log(imageLink);
  return imageLink;
};
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const projectsData = await getProjects();
    setProjects(projectsData);
  };

  const renderProjects = () => {
    const rows: JSX.Element[] = [];
    let row: JSX.Element[] = [];
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const imageUrl = urlFor(project.image).url();
      const projectElement = (
        <div
          key={project._id}
          className="imageWrapper max-lg:flex  max-sm:w-full max-lg:flex-col  max-lg:justify-center max-lg:mt-4 "
          onClick={() => handleClick(imageUrl)}
        >
          <Link
          className=" max-sm:w-full max-lg:flex max-lg:justify-center"
            href={{
              pathname: "/pages/addtocart",
              query: {
                search: imageUrl,
                price: project.price,
                name: project.name,
                product_id: project.productId,
              },
            }}
          >
            <Image src={imageUrl} alt="img" width={250} height={270}  className="sm:max-lg:w-[400px] sm:max-lg:h-[430px]" />
          </Link>
          <p className="mt-2 max-lg:flex max-lg:justify-center">
            <strong>
              {project.name}
              <br />${project.price}
            </strong>
          </p>
        </div>
      );
      if (i > 0 && i % 4 === 0) {
        rows.push(
          <div
            key={`row-${i}`}
            className="rowWrapper flex flex-row max-lg:border-3  max-lg:flex-col max-lg:justify-center justify-evenly mt-16 w-full"
          >
            {row}
          </div>
        );
        row = [];
      }
      row.push(projectElement);
    }

    if (row.length > 0) {
      rows.push(
        <div
          key={`row-${projects.length}`}
          className="rowWrapper flex flex-row justify-evenly mt-16 max-lg:flex-col max-lg:item-center"
        >
          {row}
        </div>
      );
    }
    return rows;
  };

  return <div className=" w-full max-sm:w-[100%] ">{renderProjects()}</div>;
}

