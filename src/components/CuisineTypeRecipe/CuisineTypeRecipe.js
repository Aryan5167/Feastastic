import React from 'react'
import './CuisineTypeRecipe.scss'
import MealTypeRecipeCard from '../MealTypeRecipe/MealTypeRecipeCard'
import cuisinesTypesData from '../../Assets/CuisineTypeData'


function CuisineTypeRecipe() {
  return (
    <section className="cuisine-type-section">
        <h2 className="cuisine-type-section-title">Culinary Journeys</h2>
        <div className="cuisine-type-grid">

        {cuisinesTypesData.map((mealType)=>{
            return(
            <MealTypeRecipeCard 
            key={mealType.id}
            title={mealType.title}
            imageUrl={mealType.image}
            desc={mealType.description}
            />)
        })}
        </div>
     
    </section>
  )
}

export default CuisineTypeRecipe