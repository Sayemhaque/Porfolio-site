import React from 'react'

const About = () => {
    return (
        <section name="about" className=" pt-24 min-h-[85vh] bg-[#5CDB95] px-8 ">
            <div>
                <p className="text-left sm:text-center text-2xl md:text-5xl font-bold ">About <span className="text-[#EDF5E1]">me</span></p>
                <p className="sm:text-center text-sm md:text-xl mt-2">My <span className="text-[#EDf5E1]">introduction</span></p>
            </div>
            <div className="max-w-[1000px] mx-auto pt-10">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                    <div className=" bg-[#EDF5E1] bg-opacity-30 p-10 ">
                    <p className="text-justify  text-sm sm:text-lg">
                    “Hello,I’m sayem! I’m passionate about web development.I’m skilled in HTML, css,JavaScript,React and many more you can look around at skill section.
                    I’m now looking for a junior frontend dev position as I am
                     learning coding since 2021.”
                    </p>
                    </div>
                    <div className="">
                        <img className="h-[350px] w-full object-contain bg-[#EDF5E1] bg-opacity-30 p-10" src="https://images.unsplash.com/photo-1619783181561-187763a877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlnJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About