import React from 'react'

const About = () => {
    return (
        <div className=''>
            <div>
                <nav className='w-full fixed z-10 bg-black opacity-90 py-3 md:py-4 px-md:px-20'>
                <h1 className='flex justify-center items-center text-3xl text-white '>About Us</h1>
                </nav>
            </div>
            <div>
                <img className='w-full h-[650px] object-cover' src='https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='food'/>
            </div>
            <div className='absolute w-full h-full
        bg-gradient-to-t from-black to-transparent
        top-0 z-8 flex flex-col items-centre
        justify-centre pt-40 2xl:pt-20 px-4'>

                <h1 className='text-white text-4xl md:text-5xl
             font-bold justify-center text-center'><p>
                        Welcome to Foodies' Place, your ultimate destination for culinary inspiration and gastronomic delight.
                        <br /> At Foodies' Place, we believe that cooking is not just about sustenance—it's an art form, a passion, and a way of life.
                    </p></h1>

                <p className='text-sm mt-5 text-centre
                    text-purple-500 bg-[#00000090] px-6 py-4
                    rounded-full justify-center text-center'>Our mission is simple: to empower home cooks and food enthusiasts alike with a treasure trove of delicious recipes, expert tips, and creative ideas to elevate every mealtime experience. Whether you're a seasoned chef or a kitchen novice, Foodies' Place is your go-to resource for culinary adventures.
                    <br className='hidden md:block' />
                    Discover a world of flavors within our virtual kitchen, where you'll find a diverse collection of recipes spanning cuisines from around the globe. From mouthwatering mains to decadent desserts, we've got something to tantalize every taste bud.
                </p>

            </div>
        </div>
    )
}

export default About