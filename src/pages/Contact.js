import React from 'react'
import BannerImage from '../assets/home1.jpg'
import '../styles/Contact.css'
import { useState } from 'react';
import axios from 'axios';

function Contact() {
 const [idname, setname] = useState("");
 const [idemail, setemail] = useState("");
 const [idsubject, setsubject] = useState("");
 const [idmsg, setmessage] = useState("");

 const handleSubmit = async (e) => {
   e.preventDefault();
   const newPost = {
     idname,
     idemail,
     idsubject,
     idmsg
   };
   console.log(newPost)
   try {
     const res = await axios.post("http://localhost:5000/posts/add", newPost);
     window.location.replace("/");
   } catch (err) { 
     console.log(err) }
 }

  return (
    <div className='contact' style={{backgroundImage:'url('+BannerImage+')'}} >
       <div className='rightSide'>
       <h1> Contact Us</h1>

<form id="contact-form" method="POST">
 <label htmlFor="name">Full Name</label>
 <input name="name" placeholder="Enter full name..." type="text" id='idname' autoFocus={true}
           onChange={e=>setname(e.target.value)} />
 <label htmlFor="email">Email</label>
 <input name="email" placeholder="Enter email..." type="email" id='idemail' autoFocus={true}
           onChange={e=>setemail(e.target.value)} />
 <label htmlFor="message">Subject</label>
 <input name="subject" placeholder="About what..." type="text" id='idsubject' autoFocus={true}
           onChange={e=>setsubject(e.target.value)} />
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
 <button type="submit" onClick={handleSubmit}> Send Message</button>
</form>

            </div>
    </div>
  )
} 

export default Contact