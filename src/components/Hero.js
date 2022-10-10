import React from 'react'

const Hero = () => {
    return (
        <section name='home' className="w-full pb-10  h-screen bg-[#5CDB95] ">
            
            <div className="max-w-[1000px]  bg-[#EDF5E1] bg-opacity-30 shadow-lg mx-auto px-8  h-full flex flex-col space-y-4 justify-center items-start sm:items-center ">
                <img src="https://pbs.twimg.com/profile_images/1571873505855279105/MyMY1U9y_400x400.jpg" className="rounded-full object-contain h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]" alt="" />
               <p className=" text-xl text-[#EDF5E1] mt-5  font-bold">Hi,</p>
               <h2 className="text-2xl sm:7xl font-bold text-[#05386B] ">I am sayem</h2>
               <h3 className="text-2xl sm:7xl font-bold   font-sans md:text-5xl">Front-end web developer</h3>
               <button className="bg-transparent border  border-purple-600 font-bold text-[#05386B] hover:text-[#EDF5E1]  hover:bg-[#05386B] py-3 px-3 mt-5 duration-200">Download Resume <i class="fa-solid fa-download"></i></button>
            </div>
        </section>
    )
}

export default Hero