import React from 'react'
import HeroImg from './../images/profile-pic (9).png'
const Hero = () => {
    return (
        <section name='home' className="bg-[#5CDB95] ">

            <div className="max-w-[1000px]  bg-[#EDF5E1] min-h-screen  bg-opacity-30 shadow-lg mx-auto px-8  flex flex-col space-y-5 justify-center items-center ">
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" src={HeroImg} className="rounded-full object-contain h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]" alt="" />
                <p className=" text-xl text-[#EDF5E1] mt-5  font-bold">Hi,</p>
                <h2 className="text-xl md:text-4xl font-bold text-[#05386B] ">I am sayem . I am a</h2>
                <h3 data-aos="zoom-out-up" className="text-4xl md:text-6xl font-bold text-center  font-sans ">Front-end web developer</h3>
                <button className="bg-transparent border  border-purple-600 font-bold text-[#05386B] hover:text-[#EDF5E1]  hover:bg-[#05386B] py-3 px-3 mt-5 duration-200">Download Resume <i class="fa-solid fa-download"></i></button>
            </div>
        </section>
    )
}

export default Hero