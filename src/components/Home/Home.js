import React from 'react'
import Hero from '../Hero/Hero'
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes'
import MealTypeRecipe from '../MealTypeRecipe/MealTypeRecipe'
import CuisineTypeRecipe from '../CuisineTypeRecipe/CuisineTypeRecipe'
import NewRecipe from '../NewRecipe/NewRecipe'
import AboutUs from '../AboutUs/AboutUs'
function Home() {
  return (
    <div>
        <Hero />
        <AboutUs />
        <FeaturedRecipes />
        <MealTypeRecipe />
        <CuisineTypeRecipe />
        <NewRecipe />
    </div>
  )
}

export default Home