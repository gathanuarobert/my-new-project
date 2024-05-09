import React, { useState } from 'react';
import Recipes from './Recipes';

const Explore = ({ recipe }) => {
    const [query, setQuery] = useState(recipe);
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className=''>
            <div>
                <nav className='w-full fixed z-10 bg-black opacity-90 py-3 md:py-4 px-md:px-20'>
                    <h1 className='flex justify-center items-center text-3xl text-white '>Discover what you Like</h1>
                </nav>
            </div>
            <div>
                <img className='w-full h-[650px] object-cover' src='https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='food' />
            </div>
            <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-centre justify-centre pt-40 2xl:pt-20 px-4'>

                <Recipes />
            </div>
        </div>
    );
};

export default Explore;