import React from 'react'
import './FeaturedRecipesCard.scss'

function FeaturedRecipesCard(props) {
  return (
   <div className="featured-recipe-card">
     <img src="/images/pasta.jpg" alt="" />
     <h3 className="featured-recipe-title">{props.title}</h3>
     <p className="featured-recipe-description">{props.desc}</p>
     <p className="featured-recipe-chef">{props.chef}</p>
     <div className="featured-recipe-likes">
        <span className="heart-icon">&#x2665;</span>
        <span className="like-count">{props.likes}</span>
      </div>
      <button className="view-recipe-button">
      <a href="/">View Recipe</a> 
      
      </button>
     
   </div>
  )
}

export default FeaturedRecipesCard