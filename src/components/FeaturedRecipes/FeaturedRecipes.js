import React from 'react'
import './FeaturedRecipes.scss'
import featuredRecipesData from '../../Assets/FeatureRecipeData'
import FeaturedRecipesCard from './FeaturedRecipesCard'

function FeaturedRecipes() {
  return (
    <section className="featured-recipes">
        <h1 className="featured-title">Featured Recipes</h1>
        <div className="featured-grid"> 
        {featuredRecipesData.map((recipe)=>{
            return( <FeaturedRecipesCard
               key={recipe.id}
               title={recipe.title}
               img={recipe.image}
               desc={recipe.description}
               chef={recipe.chef}
               likes={recipe.likes}
             
              />)
           
        })}
        </div>
    </section>
  )
}

export default FeaturedRecipes