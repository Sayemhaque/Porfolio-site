import React, { useEffect, useState } from "react";
import { projects } from "../data,";
const Works = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projects);
  }, []);
  return (
    <section
      name="works"
      className="pt-24  bg-[#5CDB95] px-8 "
    >
      <div>
        <p className="text-left sm:text-center text-2xl md:text-5xl font-bold ">Project</p>
        <p className="sm:text-center text-sm md:text-xl mt-2">
          My <span className="text-[#EDf5E1]">projects</span>
        </p>
      </div>
      <div className="max-w-[1000px] mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5 ">
          {project.map((x) => {
            return (
              <>
                <div 
                  className="bg-[#EDF5E1] bg-opacity-30  shadow-xl">
                  <div className="flex flex-col  space-y-3 ">
                    <img className="w-full" src={x.img} alt="" />
                    <p className="text-[16px] px-5 font-bold ">
                      <i class="fa-solid fa-arrow-right"></i> {x.title}
                    </p>
                    <p className="px-5 text-zinc-700">
                      Technology: {x.tech[0]},{x.tech[1]},{x.tech[2]},{x.tech[3]}
                    </p>
                    <div className="flex justify-between px-5 pb-4">
                      <button className="bg-zinc-800 bg-opacity-80 py-1 px-5 hover:bg-opacity-100 text-[#EDF5E1]">
                        <a href={x.githubLink} target="blank">
                          <i class="fa-brands fa-github"></i> Github
                        </a>
                      </button>
                      <button className="bg-zinc-800 bg-opacity-80 py-1 px-5 hover:bg-opacity-100 text-[#EDF5E1]">
                        <a href={x.liveLink} target="blank">
                          <i class="fa-solid fa-eye"></i> Live
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}




        </div>
      </div>
    </section>
  );
};

export default Works;
