import React, { useContext } from 'react'
import Logo from '../assets/logo.jpeg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { AuthContext } from '../pages/AuthContext';
import { useDispatch, useSelector } from 'react-redux'

function NavBar() {
  const {card} =useContext(AuthContext)
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart)

  return (
    <div className='navbar'> 
      <div className='leftSide'>
       
         <Link to="/h"> <img src={Logo}/> </Link> 
          <div className='hiddenlinks'>
         {/*} <Link to="/h"> Home </Link> */}
          <Link to="/p"> Products </Link>
          <Link to="/cr"> Courses </Link>
          <Link to="/tr"> Coach </Link>
          <Link to="/c"> Contact </Link>
          
          
          {/*<a><AiOutlineShoppingCart style={{cursor:"pointer"}} color='white' size={25}></AiOutlineShoppingCart>
          </a>*/}

          </div>
           </div>
    
       <div className='rightSide'>
          {/*<Link to="/h"> Home </Link>
          <Link to="/p"> Products </Link>
          <Link to="/a"> About </Link>
         <Link to="/c"> Contact </Link>*/} 
              
              <Link to="caart">
                {cartItems.length}
          <AiOutlineShoppingCart color='white'></AiOutlineShoppingCart> 
          </Link>
          <Link to="/a"> About </Link>
        </div>
    </div>
  )

}
export default NavBar