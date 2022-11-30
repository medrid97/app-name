import React from 'react'
import '../../styles/Contact.css'
import BannerImage from '../../assets//home1.jpg'
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
function FormulaireCart() {
    const [idname, setname] = useState("");
  const [idemail, setemail] = useState("");
  const [idmsg, setmessage] = useState("");

  const { cartItems } = useSelector(state => state.cart)
  console.warn('-**-*',cartItems)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCommande = {
      idname,
      idemail,
      idmsg
    };
    console.log(newCommande)
    try {
      const res = await axios.post("http://localhost:5000/commandes/add", newCommande);
      window.location.replace("/");
    } catch (err) { 
      console.log(err) }
  }
  return (
    <div className='contact' style={{backgroundImage:'url('+BannerImage+')'}} >
    <div className='rightSide'>
    <h1> Order now</h1>

<form id="contact-form" method="POST">
<label htmlFor="name">Full Name</label>
<input name="name" placeholder="Enter full name..." type="text" id='idname' autoFocus={true}
        onChange={e=>setname(e.target.value)} />
<label htmlFor="email">Email</label>
<input name="email" placeholder="Enter email..." type="email" id='idemail' autoFocus={true}
        onChange={e=>setemail(e.target.value)} />
<label htmlFor="message">Message</label>
<textarea
autoFocus={true}
onChange={e=>setmessage(e.target.value)}
id='idmsg'
rows="6"
placeholder="Enter message..."
name="message"
required

></textarea>
<div className='col-12' >
  <div className='price-info row' >
    <div className='col-2'>
   Whey-American
    </div>
    <div className='col-2' >
 460 TND
    </div>
    <div className='col-8' ></div>
    <div className='col-2'>
   Gainer Max
    </div>
    <div className='col-2' >
 190 TND
    </div>
    <div className='col-8' ></div>
    <div className='col-2'>
   MultiVitamin
    </div>
    <div className='col-2' >
 85 TND
    </div>
    <div className='col-8' ></div>
    <div className='col-2'>
  Hard Mass
    </div>
    <div className='col-2' >
  170 TND
    </div>
    <div className='col-8' ></div>
    <div className='col-12 row' style={{marginTop: '20px', borderTop : '1px solid #fff', paddingTop :'10px',fontSize : '15px',fontWeight : '600'}} >
<div className='col-2' >
Total
</div>
<div className='col-2' >
905 TND
</div>
<div className='col-8' ></div>
    </div>
  </div>

</div>

<button type="submit" onClick={handleSubmit}> Send Message</button>
</form>

         </div>
 </div>
  )
}

export default FormulaireCart