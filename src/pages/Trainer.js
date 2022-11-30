import React,{useState,useEffect} from 'react'
import backImage from '../assets/interior.jpg'
import { CoachsDiffList } from '../helpers/CoachsList'
import CoachsItem from '../components/CoachItem'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Coach.css'
import MenuItem from '../components/MenuItem'
 {}
 
 function Trainer() {
  const [liste2, setListe2] = useState([])
  useEffect(async()=>{
  
    var response = await fetch('http://localhost:5000/api/v2/coachs')
    var data = await response.json()
   // console.log(data)
    setListe2(data.coachs)
    console.log(liste2)
    
  } ,[])
  return (
    <div className='Coachs' >
        <h1 className='coachsTitle' > OUR COACHES </h1>  
        <hr/>
        <h1 className='coachsTitle1' > Professional, highly experienced and certified coaches </h1>
        <div className='coachsList'>
      {CoachsDiffList.map((coachsItem, Key )=>{
        return (
        <CoachsItem 
                  Key={Key} 
                  image={coachsItem.coimage} 
                  name={coachsItem.coname} 
                  id={coachsItem.codesc}
                  lien= {coachsItem.lien}
                  
                  />
        );
    }
    )}
    {liste2.map((coachsItem, Key )=>{
        return (
        <CoachsItem 
                  Key={Key} 
                  image={coachsItem.images[0].url} 
                  name={coachsItem.name} 
                  //price={coachsItem.price}
                  //id = {coachsItem._id}
                  />
        );
    }

    
    )}
    </div>
    </div>
  )
}

export default Trainer
