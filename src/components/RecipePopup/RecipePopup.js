import React from 'react';
import "./RecipePopup.scss"
import { useParams } from 'react-router-dom'
import RecipesData from '../../Assets/RecipesData'
import "./RecipePopup.scss"
import Timeline from '../timeline/timeline';

const RecipePopup = () => {
  const { recipeId } = useParams();
  
  const selectedRecipe = findRecipeById(parseInt(recipeId, 10));
  // State to track whether the recipe steps are visible
  // const [showRecipe, setShowRecipe] = React.useState(false);

  if (!selectedRecipe) {
   
    return <div>Recipe not found</div>;
  }

  const { title, image, cookingTime, servingSize,steps,chef,ingredients } = selectedRecipe;

  

  return (
    <section className="recipe-details-page">
    {/* <div className="recipe-info-page"> */}
      
      <div className="recipe-info-left-side">
        <img className="recipe-info-img" src={image} alt={title} />
      </div>

      
      <div className="recipe-info-right-side">
        
        <h1 className="recipe-page-title">{title}</h1>

       
        <div className="recipe-icons">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {cookingTime}</div>
          <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg> {servingSize}</div>
           <div className="icon">
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chef-hat"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" x2="18" y1="17" y2="17"/></svg>
           {chef}
           </div>
        </div>


        <div className="ingredients">
          <h2 className='recipe-ingredients-title'>INGREDIENTS</h2>
          <hr />
          <p>{ingredients}</p>
        </div>
       

        <div className="recipe-preparation">
          <h2 className='recipe-ingredients-title'>RECIPE PREPARATION</h2>
          <hr />
          {/* <ol className="timeline">
            {
              steps.map((step, index) => <li key={index}>{step}</li>)
             }
          </ol> */}
          
          {/* {steps.map((step)=>{
            return(
              <Timeline 
                way={step}
              />
            )
          })} */}
          <Timeline
          steps={steps} />
           
          {/* <button className="recipe-info-view-recipe-button" onClick={() => setShowRecipe(!showRecipe)}>
          {showRecipe ? 'HIDE RECIPE' : 'SHOW RECIPE'}
        </button> */}
        </div>

       
        
      </div>
    {/* </div> */}
    </section>
  );
};

// Helper function to find the recipe by id
const findRecipeById = (id) => {
  // Search in featured recipes data
  console.log('Received ID:', id);
  
  const featuredRecipe = RecipesData.featuredRecipesData.find((recipe) => recipe.id === id);
  if (featuredRecipe) {
    return featuredRecipe;
  }

  // Search in new recipes data
  const newRecipe = RecipesData.newRecipeData.find((recipe) => recipe.id === id);
  if (newRecipe) {
    return newRecipe;
  }

  // Recipe not found
  return null;
};




export default RecipePopup