"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProjects } from '../../../sanity/sanity-utils';
import { urlFor } from '../../../sanity/image';

export default function Page() {
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
        <div key={project._id} className="imageWrapper ">
          <Image src={imageUrl} alt="img" width={250} height={270} />
          <p className="mt-2">
            <strong>
              {project.name}
              <br />${project.price}
            </strong>
          </p>
        </div>
      );
      if (i > 0 && i % 4 === 0) {
        rows.push(<div key={`row-${i}`} className="rowWrapper flex flex-row   justify-evenly mt-16 w-full">{row}</div>);
        row = [];
      }
      row.push(projectElement);
    }
    // Push the remaining images if the number is not a multiple of 4
    if (row.length > 0) {
      rows.push(<div  key={`row-${projects.length}`} className="rowWrapper flex flex-row justify-evenly mt-16">{row}</div>);
    }
    return rows;
  };

  return <div className=" w-full ">{renderProjects()}</div>;
}
