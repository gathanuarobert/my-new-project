import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import Loading from './Loading';
import Searchbar from './Searchbar';
import RecipeCard from './Recipecard';
import { fetchRecipes } from './utils.js';
import Button from './Button';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const [limit, setLimit] = useState(30);
    const [loading, setLaoding] = useState(false);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({ query, limit });

            setRecipes(data);

            setLaoding(false);
        } catch (error) {
            console.log(error);
        } finally {
            setLaoding(false);
        }
    };

    const handleSearchedRecipe = async (e) => {
        e.preventDefault();
        fetchRecipe();
    };

    

    useEffect(() => {
        setLaoding(true);

        fetchRecipe();

    }, []);

    if (loading) {
        return (
            <Loading />
        );
    }
    console.log(recipes);
    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                <form className='w-full lg:w-2/4' onSubmit={handleSearchedRecipe}>
                    <Searchbar placeholder="eg. Cake, Vegan, Chicken"
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe} />
                        }
                    />
                </form>

            </div>

            {
                recipes?.length > 0 ? (
                    <>
                        <div className='w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10'>
                            {
                                recipes?.map((data) => (
                                    <RecipeCard key={data.idMeal} recipe={data} />))
                            }
                        </div>

                       
                    </>
                ) : <div className='text-white w-full items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            }
        </div>
    );
};

export default Recipes

















