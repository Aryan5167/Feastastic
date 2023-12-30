import React from 'react'
import "./NewRecipe.scss"
import FeaturedRecipesCard from '../FeaturedRecipes/FeaturedRecipesCard'
// import newRecipesData from '../../Assets/NewRecipe'
import RecipesData from '../../Assets/RecipesData'
function NewRecipe() {
  const newRecipesData=RecipesData.newRecipeData
  return (
    <section className="new-recipe-section">
    <h2 className="new-recipe-section-title">New Kitchen Creations</h2>
    <div className="new-recipe-section-grid">
    {newRecipesData.map((recipe)=>{
            return( <FeaturedRecipesCard
               key={recipe.id}
               title={recipe.title}
               img={recipe.image}
               desc={recipe.description}
               chef={recipe.chef}
               likes={recipe.likes}
               isNew
               id={recipe.id}
            
              />)
           
        })}

    </div>
    </section>
  )
}

export default NewRecipe