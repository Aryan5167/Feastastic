import React from 'react'
import './FeaturedRecipesCard.scss'

function FeaturedRecipesCard(props) {
  const isNew=props.isNew;
  return (
   <div className="featured-recipe-card">
   { isNew && <span className="new-badge">New</span>}
     <img src="/images/pasta.jpg" alt="" />
     <h3 className="featured-recipe-title">{props.title}</h3>
     <p className="featured-recipe-description">{props.desc}</p>
     <p className="featured-recipe-chef">{props.chef}</p>
     <div className="featured-recipe-likes">
        <span className="heart-icon">&#x2665;</span>
        <span className="like-count">{props.likes}</span>
      </div>
      <a href="/">
      <button className="view-recipe-button">View Recipe</button>
      </a>
      
    
    
     
   </div>
  )
}

export default FeaturedRecipesCard