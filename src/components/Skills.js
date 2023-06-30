import React, { useState, useEffect } from "react";
import { frontedSkills, backednSkills, tools, learningNow } from "../data,";

const Skills = () => {
   const [frontend, setFrontend] = useState([]);
   const [backend, setBackend] = useState([]);
   const [tool, setTool] = useState([]);
   const [learning, setLearning] = useState([]);
   useEffect(() => {
      setFrontend(frontedSkills);
      setBackend(backednSkills);
      setTool(tools);
      setLearning(learningNow);
   }, []);

   return (
      <div name="skills" className="pt-24  py-10 bg-[#5CDB95]  px-8 ">
         <div>
            <p className="text-left sm:text-center text-2xl md:text-5xl font-bold ">Skill</p>
            <p className="sm:text-center text-sm md:text-xl mt-2">My <span className="text-[#EDf5E1]">skills</span></p>
         </div>
         <div className="max-w-[1000px] mx-auto pt-10">
            <div className="grid  sm:grid-cols-3 gap-5">
               {/* frontend skills */}
               <div data-aos="zoom-in"  data-aos-duration="1000" className="bg-[#EDF5E1] sm:col-span-2  bg-opacity-30 p-10 shadow-lg">
                  <div className="flex flex-col  space-y-5 text-[20px]">
                     <p className="text-2xl font-bold">
                        <i class="fa-solid fa-square-check"></i> Front-end
                     </p>
                     {frontend.map((x) => {
                        return (
                           <>
                              <p>
                                 <i class="fa-solid fa-certificate"></i> {x.name}
                              </p>
                           </>
                        );
                     })}
                  </div>
               </div>
               {/* backend skills */}
               <div data-aos="zoom-in"  data-aos-duration="1000"  className="bg-[#EDF5E1] bg-opacity-30 p-10 shadow-lg">
                  <div className="flex flex-col  space-y-5 text-[20px]">
                     <p className="text-2xl font-bold">
                        <i class="fa-solid fa-square-check"></i> Backend
                     </p>
                     {backend.map((x) => {
                        return (
                           <>
                              <p>
                                 <i class="fa-solid fa-certificate"></i> {x.name}
                              </p>
                           </>
                        );
                     })}
                  </div>
               </div>
               {/* tools i use */}
               <div data-aos="zoom-in"  data-aos-duration="1000" className="bg-[#EDF5E1] bg-opacity-30 p-10 shadow-lg">

                  <div className="flex flex-col  space-y-5 text-[20px]">
                     <p className="text-2xl font-bold">
                        <i class="fa-solid fa-square-check"></i> Discovering now
                     </p>
                     {learning.map((x) => {
                        return (
                           <>
                              <p>
                                 <i class="fa-solid fa-certificate"></i> {x.name}
                              </p>
                           </>
                        );
                     })}
                  </div>
               </div>
               {/* what i am learning now ok veay*/}
               <div data-aos="zoom-in"  data-aos-duration="1000"  className="bg-[#EDF5E1] sm:col-span-2 bg-opacity-30 p-10 shadow-lg">
                  <div className="flex flex-col  space-y-5 text-[20px]">
                     <p className="text-2xl font-bold">
                        <i class="fa-solid fa-square-check"></i> Tools
                     </p>
                     {tool.map((x) => {
                        return (
                           <>
                              <p>
                                 <i class="fa-solid fa-certificate"></i> {x.name}
                              </p>
                           </>
                        );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
