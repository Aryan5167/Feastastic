import React from 'react'
import './MealTypeRecipeCard.scss'

function MealTypeRecipeCard(props) {
    
    const cardStyle = {
        '--meal-type-image-url': `url(${props.imageUrl})`
      };
  return (
    <div className="meal-type-card" style={cardStyle}>
      <div className="meal-type-card-content">
      
      
      <h3 className="meal-type-title">{props.title}</h3>
        <p className="meal-type-description">{props.desc}</p>
        <a href="/">
      <button className="view-meal-type-button">View More</button>
      </a>
      </div>
        
    </div>
  )
}

export default MealTypeRecipeCard