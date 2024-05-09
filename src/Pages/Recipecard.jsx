const RecipeCard = ({ recipe }) => {


    const { idMeal, strMeal, strCategory, strArea, strMealThumb } = recipe;

    return (
        <div className="recipe-card">
            <img src={strMealThumb} alt={strMeal} />
            <div className="recipe-details">
                <h3>{strMeal}</h3>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p>
            </div>
        </div>
    );
};

export default RecipeCard;
