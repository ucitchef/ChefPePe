import React, { useState, useEffect } from 'react';
import './AppetizerRecipe.css';
import stuffedMushroomsData from '../json/stuffedMushrooms.json';
import bruschettaData from '../json/bruschetta.json';

const recipes = [stuffedMushroomsData, bruschettaData];

const ChickenRecipe = () => {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [currentRecipe, setCurrentRecipe] = useState(recipes[0]);

  useEffect(() => {
    setCurrentRecipe(recipes[currentRecipeIndex]);
  }, [currentRecipeIndex]);

  const handleNext = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const handlePrevious = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
  };

  return (
    <div className="cookbook">
      <div className="page">
        <div className="image-section">
          <img src={currentRecipe.image} alt={currentRecipe.title} />
        </div>
        <div className="spine"></div>
        <div className="text-section">
          <h2>{currentRecipe.title}</h2>
          <ul>
            {currentRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{currentRecipe.instructions}</p>
        </div>
      </div>
      <div className="navigation">
        <button onClick={handlePrevious}>&lt; Previous</button>
        <button onClick={handleNext}>Next &gt;</button>
      </div>
    </div>
  );
};

export default ChickenRecipe;