import React, { useContext } from 'react'
import '../styles/MenuItem.css'
import {Link} from 'react-router-dom'
import {useCart} from 'react-use-cart'
import { AuthContext } from '../pages/AuthContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { addItemToCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'


import 'swiper/css';
 
function MenuItem({image, name, price , id}) {
  let quantity = 1

      const dispatch = useDispatch();
      const addToCart = () => {
        dispatch(addItemToCart(id, quantity));
        alert('Item Added to Cart')
    }

     const { addcard} = useContext(AuthContext);
  return (
    <div className='menuItem'>
        <div className='img-product' style={{backgroundImage:'url('+image+')'}} ></div>
        <h1> {name}</h1>
        <p>HUF {price}</p>
         <button className='btn-test' onClick={/*()=> addcard({name, price,image})*/addToCart } >ADD TO CART</button> 
   

    </div>
  )
}
export default MenuItem 
{/*
const MenuItem = (props) =>{
  <div className='col-11'>
<div class="card p-0">
  <imgage src={props.imgage} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <h5 class="card-text">{props.price}</h5>
    <button class="btn btn-success">ADD TO CARD </button>
  </div>
</div>
</div>
}
export default MenuItem 
*/}