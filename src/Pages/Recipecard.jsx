import { useState } from "react";
import Button from "./Button";
import { fetchRecipes } from "./utils.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecipeCard = ({ recipe }) => {
    const [limit, setLimit] = useState(30);
    const showMore = () => {
        setLimit(prev => prev + 10);
        fetchRecipes();
    };

    const { idMeal, strMeal, strCategory, strArea, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4} = recipe;


    return (


        <div className="flex flex-row">

            <div className="bg-black opacity-90 h-[280px] text-black rounded-xl">
                <div>
                    <img src={strMealThumb} alt={strMeal} className='rounded-lg h-[200px] md:h-[150px] w-full' />
                </div>

                <div className="recipe-details text-center pt-1">
                    <p className="text-purple-500">{strMeal}</p>
                    <p className="text-white">{strIngredient1}</p>
                    <p className="text-white">{strIngredient2}</p>
                    <p className="text-white">{strIngredient3}</p>
                    <p className="text-white">{strIngredient4}</p>


                </div>

                <div className='flex w-full items-center justify-center pt-1'>
                    {/*<Button 
                        title="Show More"
                        containerStyle="bg-purple-800 text-white px-3 py-1 rounded-full text-sm"
                        handleClick={showMore}
    />*/}
                </div>

            </div>

        </div>

    );
};

export default RecipeCard;
