import React from 'react'

const Header = () => {
    return (
        <div className=''>
            <div>
                <img className='w-full h-[650px] object-cover' src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='food'/>
            </div>
            <div className='absolute w-full h-full
        bg-gradient-to-t from-black to-transparent
        top-0 z-8 flex flex-col items-centre
        justify-centre pt-40 2xl:pt-20 px-4'>
            <h1 className='text-white text-4xl md:text-5xl
             font-bold justify-center text-center'><p>
             Excite your Taste Buds with
             <br/> Foodies' Place
         </p></h1>

                <p className='text-sm mt-5 text-centre
                    text-purple-500 bg-[#00000090] px-6 py-4
                    rounded-full justify-center text-center'>We welcome you to Foodies' Place
                    your ticket to tastiness!
                    <br className='hidden md:block flex justify-center ' />
                    Enjoy your culinary adventures.
                </p>

            </div>
        </div>

    )
}

export default Header
