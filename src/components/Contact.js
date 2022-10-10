import React from 'react'

const Contact = () => {
    return (
        <section name='contact' className="pt-24 w-full min-h-[85vh] bg-[#5CDB95] px-8">
            <div>
                <p className="text-left sm:text-center text-4xl font-bold ">Contact Me</p>
            </div>
            <div className="max-w-[1000px] mx-auto py-10">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 shadow-lg '>
                    <div className=" bg-[#EDF5E1] bg-opacity-30 p-10 flex flex-col space-y-3 justify-center">
                        <input type="text" className='px-5 py-1 border-black bg-opacity-30 bg-white focus:border-none' placeholder='your name' />
                        <input type="text" className='px-5 py-1 border-black bg-opacity-30 bg-white focus:border-none' placeholder='email' />
                        <textarea cols={5} rows={10} type="text" className='px-5 py-1 border-black bg-opacity-30 bg-white focus:border-none' placeholder='write massage...' />
                        <button className="bg-zinc-800 bg-opacity-80 py-2 px-5 hover:bg-opacity-100 text-[#EDF5E1]">
                            send
                        </button>
                    </div>
                    <div className=" bg-[#EDF5E1] text-xl bg-opacity-30 p-10 shadow-lg flex  flex-col justify-center items-center space-y-5">
                        <a href="https://www.linkedin.com/in/md-sayem-mia-2a665623a/" target="blank"> <i className="fa-brands  fa-linkedin"></i> Linkedin</a>
                        <a href="https://www.facebook.com/profile.php?id=100086182577309" target="blank"> <i className="fa-brands fa-facebook "></i> Facebook</a>
                        <a href="https://www.instagram.com/iamsayem777/" target="blank"> <i className="fa-brands fa-instagram "></i> Instagram</a>
                        <a href="https://twitter.com/Mdsayem999/" target="blank"><i className="fa-brands fa-twitter"></i>   Twitter </a>
                    </div>
                </div>
                <p className='text-center mt-10'>mohammadsayem&copy;2022 All rights reserved</p>
            </div>
        </section>
    )
}

export default Contact