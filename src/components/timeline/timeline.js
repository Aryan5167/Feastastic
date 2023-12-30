import React from 'react'
import "./timeline.scss"


function Timeline(props) {
  return (
    <div class="timeline-container">
 {props.steps.map((step,index)=>(
    <div class="timeline-block timeline-block-left">
      <div class="marker"></div>
      <div class="timeline-content">
         <h3>{`Step ${index+1}`}</h3>
         <p>{step}</p>
      </div>
   </div>

 ))}
 
</div>
  )
}

export default Timeline