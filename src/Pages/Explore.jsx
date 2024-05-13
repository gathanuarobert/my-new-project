import React, { useState } from 'react';
import Recipes from './Recipes';
import Navbar from './Navbar';

const Explore = ({ recipe }) => {
    const [query, setQuery] = useState(recipe);
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className=''>
            <div>
               <Navbar />
            </div>
            <div>
                <img className='w-full h-[2500px] object-cover' src='https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='food' />
            </div>
            <div className='absolute w-full h-[2500px] bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-centre justify-centre pt-20 2xl:pt-10 px-4'>

                <Recipes />
            </div>
        </div>
    );
};

export default Explore;