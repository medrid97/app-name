import React,{useState,useEffect} from 'react'
import CoursesItem from '../components/CoursesItem';
import { CoursesDiffList } from '../helpers/CoursesList';
import backImage from '../assets/backrouge3.jpeg';
import '../styles/Courses.css'
function Courses() {
  const [liste2, setList2] = useState([])
  useEffect(async()=>{
    console.log(...CoursesDiffList,"hhhhhhhh")
  
    var response = await fetch('http://localhost:5000/api/v3/courses')
    var data = await response.json()
   console.log(data.courses)
    setList2(data.courses)
    console.log(liste2)
    
  } ,[])
  return (
    <div className='Courses' >
        <h1 className='coursesTitle' > Our courses </h1>  
        <hr/>
        <h1 className='coursesTitle1' > over 60 courses per week</h1>
        <div className='coursesList'>
{CoursesDiffList.map((coursesItem, Key )=>{
        return (
        <CoursesItem 
                  Key={Key} 
                  crimage={coursesItem.crimage} 
                  crname={coursesItem.crname} 
                  lien= {coursesItem.lien}
                  
                  />
        );
    }
    )}
    {liste2.map((coursesItem, Key )=>{
        return (
        <CoursesItem 
                  Key={Key} 
                  crimage={coursesItem.images[0].url} 
                  crname={coursesItem.name} 
                  //price={coachsItem.price}
                  id = {coursesItem._id}
                  />
        );
        }

    
    )}
    </div>
    </div>
  )
}

export default Courses