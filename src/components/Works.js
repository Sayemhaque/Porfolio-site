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
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 gap-5 ">
          {project.map((x) => {
            return (
              <>
                <div
                data-aos="zoom-out-up"
                data-aos-duration="2000" 
                  className="bg-[#EDF5E1] bg-opacity-30  shadow-xl">
                  <div className="flex flex-col  space-y-3 ">
                    <img className="w-full" src={x.img} alt="" />
                    <p className="text-2xl px-5 font-bold ">
                      <i class="fa-solid fa-arrow-right"></i> {x.title}
                    </p>
                    <p className="px-5 text-left font-serif m-0 p-0">{x.details}</p>
                    <p className="px-5 text-zinc-800 ">
                      Technology:  {x.tech.join(" | ")}
                    </p>
                    <div className="flex flex-col gap-5 text-center md:gap-0 md:flex-row justify-between px-5 pb-4">
                        <a className="bg-zinc-800   bg-opacity-80 py-1 px-5 hover:bg-opacity-100 text-[#EDF5E1]" href={x.githubLinkClient} target="blank">
                          <i class="fa-brands fa-github"></i> Github Client
                        </a>
                        <a  className="bg-zinc-800  bg-opacity-80 py-1 px-5 hover:bg-opacity-100 text-[#EDF5E1]" href={x.githubLinkServer} target="blank">
                          <i class="fa-brands fa-github"></i> Github Server
                        </a>
                        <a className="bg-zinc-800 bg-opacity-80 py-1 px-5 hover:bg-opacity-100 text-[#EDF5E1]"
                         href={x.liveLink} target="blank">
                          <i class="fa-solid fa-eye"></i> Live
                        </a>
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
