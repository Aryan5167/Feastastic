import React from 'react'
import Hero from '../Hero/Hero'
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes'
import MealTypeRecipe from '../MealTypeRecipe/MealTypeRecipe'
import CuisineTypeRecipe from '../CuisineTypeRecipe/CuisineTypeRecipe'
function Home() {
  return (
    <div>
        <Hero />
        <FeaturedRecipes />
        <MealTypeRecipe />
        <CuisineTypeRecipe />
    </div>
  )
}

export default Home