import React, { useEffect, useState } from 'react';

const RecipeDetails = () => {
    const [recipe, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setRecipes(data.meals || []); // Ensure data.meals is an array, otherwise default to empty array
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }

  return (
      <div className="container">
        <div>
            <ul>
            {recipe.map((meal, index) => (
              <>
              <h3>{meal.strMeal}</h3>
              <p style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={meal.strMealThumb} style={{ maxWidth: '60%', alignSelf: 'center' }} />
              </p>
              <h4>Category:</h4>
              <p>{meal.strCategory}</p>
              <h4>Area:</h4>
              <p>{meal.strArea}</p>
              <h4>Instructions:</h4>
              <p>{meal.strInstructions}</p>
              <h4>Youtube Link:</h4>
              {meal.strYoutube && (
                <p>
                  <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
                  {meal.strYoutube}
                  </a>
                </p>
              )}
              <h4>Source:</h4>
              {meal.strSource && (
                <div>
                  <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
                  {meal.strSource}
                  </a>
                </div>
              )}
              </>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default RecipeDetails;
