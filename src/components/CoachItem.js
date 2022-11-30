import React from "react";
import '../styles/CoachsItem.css'



function CoachsItem({image, name,id,lien}) {
    return (
      <div className='coachsItem'>
     <div className='img-coach' style={{backgroundImage:'url('+image+')'}} ></div>
          <h1> {name}</h1>
          <p>{id}</p>
          <a className='btn-primary' href={lien}> Consult </a> 
      </div>
      
    )
  }
  
  
  export default CoachsItem