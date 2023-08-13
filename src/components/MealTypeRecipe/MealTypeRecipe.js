import React from 'react'
import './MealTypeRecipe.scss'
import MealTypeRecipeCard from './MealTypeRecipeCard'
import mealTypesData from '../../Assets/MealTypeRecipe'


function MealTypeRecipe() {
  return (
    <section className="meal-type-section">
        <h2 className="meal-type-section-title">Explore Popular Meal Types</h2>
        <div className="meal-type-grid">

        {mealTypesData.map((mealType)=>{
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

export default MealTypeRecipe