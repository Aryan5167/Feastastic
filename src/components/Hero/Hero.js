import React from 'react'
import "./Hero.scss"

function Hero() {

  return (
    <section className="hero-container"  >
        
        <div className="hero-content">
            <div className="hero-image" style={{backgroundImage:`url("../images/cup.jpg")`}}>
               
            </div>
            <h1>Discover Flavourful Memories</h1>
            <p>Unearth timeless recipes that blend elegance and taste.</p>
            <div className="hero-search-bar">
                <input type="text" placeholder="Find your chic recipe..." />
                <button className="hero-button">Search</button>
            </div>
        
        <button className="cta-button">Get Cooking</button>
        </div>
    </section>
  )
}

export default Hero