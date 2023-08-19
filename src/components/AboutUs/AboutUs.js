import React from 'react'
import "./AboutUs.scss"

function AboutUs() {
  return (
    <section className="about-us">
        <div className="about-us-left">
            <h1 className="about-us-title">What Are We About</h1>

            <p className="about-us-info">Welcome to Feastastic, your gateway to a world of culinary delights! Embark on a journey that tantalizes your taste buds with a diverse array of recipes sourced from every corner of the globe. From the comforting classics to exotic fusions, Feastastic brings you the essence of international cuisines right to your kitchen.</p>
         
           <p className="about-us-info">
            Feeling adventurous? Dive into our cooking tips and tricks, honing your skills as a home chef. But that's not all – we believe in community and the joy of sharing. With Feastastic, you have the chance to showcase your culinary prowess by sharing your own treasured recipes, creating a vibrant tapestry of flavors, stories, and cultures.</p>
          <p className="about-us-info">
            Indulge in the Feastastic experience and let your culinary imagination run wild. Discover, create, and connect with food lovers from around the world. Your journey into the world of gastronomy starts here – where every recipe tells a tale, and every meal is a celebration. <span style={{fontWeight:"bold"}}>Feastastic: Unleash Your Culinary Passion!</span></p>

        </div>
        <div className='about-us-right'>
        <h1></h1>
          <img src="/images/aboutUs.jpg"></img>
        </div>
    </section>
  )
}

export default AboutUs