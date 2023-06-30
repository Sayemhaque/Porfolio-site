import React from 'react'
import AboutImg from './../images/profile-pic (11).png'
const About = () => {
    return (
        <section name="about" className=" pt-24  bg-[#5CDB95] px-8 ">
            <div>
                <p className="text-left sm:text-center text-2xl md:text-5xl font-bold ">About <span className="text-[#EDF5E1]">me</span></p>
                <p className="sm:text-center text-sm md:text-xl mt-2">My <span className="text-[#EDf5E1]">introduction</span></p>
            </div>
            <div data-aos="fade-up"    data-aos-duration="1000" className="max-w-[1000px] mx-auto pt-10">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                    <div  className="bg-[#EDF5E1] bg-opacity-30 p-10 ">
                    <span className="text-center font-serif font-bold  text-md sm:text-lg">
                    “Hello,I’m sayem! I’m passionate about web development.I’m skilled in HTML, css,JavaScript,React and many more you can look around at skill section.
                    I’m now looking for a junior frontend dev position as I am
                     learning coding since 2021.”
                    </span>
                    </div>
                    <div  data-aos="fade-up"  data-aos-duration="1000" className="">
                        <img className="h-[400px]  w-full object-contain bg-[#EDF5E1] bg-opacity-30 p-8" src={AboutImg} alt="294798383-783431079496115-4408110538035041724-n-2"  />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About