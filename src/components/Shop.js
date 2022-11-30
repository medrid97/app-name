import React , {useState } from 'react'
import { AuthContext } from '../pages/AuthContext';
import { useContext } from 'react';
import '../styles/Shop.css'
function Shop() {
  const {card} =useContext(AuthContext)
   function deleteitem(name){
 alert(name)
  }
  const [nb,setNb] = useState(0)
    const plus = () =>{
        setNb(nb+1)
    }
    const minus = () =>{
      if(nb<=0){
        nb=0
      }else{
        setNb(nb-1)
      }
        
    }
  return (
    <div className='shop'>
      {/*} <div>
      {card.map((c )=>{
        return (
        
        <div> <h1>{c.name} </h1> 
        <p> {c.price} </p>
       <div> {c.image} </div> 
         <button>Remove</button>
       
        </div>
        
  
        )}
               )}
      
        </div>   */}
    <ul>
      {card.map((c)=>{
        return(
          <li><h1>{c.name} </h1> 
          <p> {c.price} </p>
          <img src={c.image}/>

          <div>
          <div className='numbr'>
            <h4>{nb}</h4>
            <button className='btn btn-primary' onClick={plus}>+</button>
            <button className='btn btn-secondary' onClick={minus}>-</button>

        </div>
          </div>
       {/*}  <div> {c.image} </div>*/} 
         <button onClick={()=>deleteitem(c.name)}>Remove</button></li>
        )
      })}
    </ul>
    <br></br>
    <li><h1>Total</h1><label>0</label></li>
    <button className='btnconfirme'>Confirmer</button>
    </div>

  )

}

export default Shop