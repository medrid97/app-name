import React from 'react'
import BannerImage from '../assets/detailsabdos.png'
import '../styles/Detailsrpm.css'
import {BsEmojiSmile} from "react-icons/bs";
import {AiOutlineInfo} from "react-icons/ai"
import BannerImage1 from "../assets/slider6.jpeg"

function Detailsabdos() {
  return (
    <div className=''   >
          <div class="background-title" style={{backgroundImage:'url('+BannerImage1+')'}} >
      <h1 className='details-title'> Abdos </h1>
      <div className='under-title'>  Courses  /  Abdos  /  About Abdos  </div>
    </div>

  <div className='section-title'>
<h1>get good abs in few weeks</h1>
<br></br>
<div className='section-title-border' >

</div>
  </div>
  <div className='section-description' >
<p >
Become aware of your body to make it stronger.</p>
  </div>
  <div className='section-img' >
<img  src={BannerImage} />
  </div>
  <div className='section-centent' >
<p >
En faisant travailler les muscles profonds CR-ABD™ est l’ingrédient essentiel pour un corps plus fort. Une ceinture abdominale plus tonique vous rend meilleur, dans la vie de tous les jours comme dans vos activités sportives préférées, c’est le ciment qui maintient le corps.
</p>
<p >
Tous les mouvements de CXWORX™ possèdent des options, afin que ça soit stimulant mais accessible à tous les niveaux. Pendant l’entrainement de 30 minutes, les instructeurs vous guideront lors d’exercices avec élastiques et poids, ainsi que des exercices tels que les crunch (abdominaux) et la planche. Vous ferez également travailler vos hanches, fessiers et le bas du dos.
</p>
  </div>

  <div className='section-info' >
    <div className='section-info-1' >
    <div className='section-title'>
<h3> <BsEmojiSmile></BsEmojiSmile>  Les bienfaits du CR-ABD™</h3>
<br></br>
<div className='section-title-border' >

</div>
  </div>



  <ul className='section-info-centent'>
    <li>Tonifie et renforce les muscles du ventre</li>
    <li>Développe le mental et apporte un sentiment d’accomplissement personnel</li>
    <li>Améliore la force, l’équilibre et prévient des blessures</li>
    <li>Développe la force de la sangle abdominale et du dos par un travail des muscles profonds</li>
    <li>Brûle des calories</li>
  </ul>
    </div>
    <div className='section-info-2' >
    <div className='section-title'>
<h3> <AiOutlineInfo></AiOutlineInfo> C'est votre 1ére fois ?</h3>
<br></br>
<div className='section-title-border' >

</div>

<p className='section-info-centent' >
Votre selle devrait être à hauteur de hanche, et vous devriez avoir les genoux légèrement pliés lorsque vos pieds sont situés au point le plus bas de la rotation.

N’hésitez pas à demander à votre instructeur RPM de vous montrer comment régler votre vélo et tous les mouvements de base du cyclisme.

Commencez par 4 à 5 chansons et augmentez progressivement jusqu’à faire un cours complet.
</p>
  </div>
    </div>
  
  </div>
    </div>
  )
}

export default Detailsabdos