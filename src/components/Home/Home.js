import React from 'react'
import Hero from '../Hero/Hero'
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes'
import MealTypeRecipe from '../MealTypeRecipe/MealTypeRecipe'
function Home() {
  return (
    <div>
        <Hero />
        <FeaturedRecipes />
        <MealTypeRecipe />
    </div>
  )
}

export default Home