import React from 'react'
import HeroImg from './../images/profile-pic (9).png'
import resume from "./../images/mdsayemResume.pdf"
const Hero = () => {
    return (
        <section name='home' className="bg-[#5CDB95] ">
            <div className="max-w-[1000px]  bg-[#EDF5E1] min-h-screen  bg-opacity-30 shadow-lg mx-auto px-8  flex flex-col space-y-5 justify-center items-center ">
                <img  src={HeroImg} className="rounded-full object-contain h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]" alt="" />
                <p className="text-xl  mt-5  font-bold">Hi,</p>
                <h2 className="text-xl md:text-4xl font-bold">I am sayem</h2>
                <h3  className="text-4xl md:text-6xl font-bold text-center  font-serif ">Front-end web developer</h3>
                <a href={resume} download="Resume">
                <button className="bg-black text-white py-2 px-5">Download Resume <i class="fa-solid fa-download"></i></button>
                </a>
            </div>
        </section>
    )
}

export default Hero