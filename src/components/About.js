import React from 'react'

const About = () => {
    return (
        <section name="about" className="w-full py-24 min-h-screen bg-[#5CDB95] px-8 ">
            <div>
                <p className="text-left sm:text-center text-4xl font-bold ">About <span className="text-[#EDF5E1]">me</span></p>
                <p className="sm:text-center text-sm mt-2">My <span className="text-[#EDf5E1]">introduction</span></p>
            </div>
            <div className="max-w-[1000px] mx-auto pt-[100px] ">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                    <div className=" bg-[#EDF5E1] bg-opacity-30 p-10"><p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dignissimos aspernatur magni, nulla quo esse consectetur doloribus. Sunt debitis repellat aspernatur totam nemo recusandae impedit sequi nulla, doloribus, illum vero expedita, distinctio voluptas dolorum non velit asperiores ex eos veniam ullam </p></div>
                    <div className="">
                        <img className="h-[350px] w-full object-contain bg-[#EDF5E1] bg-opacity-30 p-10" src="https://images.unsplash.com/photo-1619783181561-187763a877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlnJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About