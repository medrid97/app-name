import React from 'react'
import '../styles/CoursesItem.css'
import {AiOutlineRight} from "react-icons/ai";
import { Link } from 'react-router-dom';



function CoursesItem({crimage, crname,lien}) {
  console.log(lien)
  return (
    <div className='coursesItem'>
<div className='img-cours' style={{backgroundImage:'url('+crimage+')'}} ></div>
        <h1> {crname}</h1>
    
    <a className='btn-primary' href={lien} >Consult <AiOutlineRight color='white'> </AiOutlineRight></a> 
    </div>
  )
}

export default CoursesItem