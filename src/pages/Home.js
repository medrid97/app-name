import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/backrouge.jpeg'
import  '../styles/Home.css'
import '../styles/Footer.css'
function Home() {
  return (
    <>
    <div className='home' style={{backgroundImage:'url('+BannerImage+')'}}  >
      <div className='headerContainer'  >
       
        <div className='nader'>
       <Link to="/p">
        <button className='margintop'> Order now </button>
        </Link>
        <Link to="/cr">
        <button className='margintop'> Consult courses </button>
        </Link>
        <Link to="/tr">
        <button className='margintop'> Pick a trainer </button>
        </Link>
        </div>

      </div>
      </div>
       <div className='divtab' >
            <h1 className='planing'> Planning </h1>
       <table className='tableau'>
        <thead>
         <tr>
             <th>       </th>
             <th>Monday   </th>
             <th>Tuesday   </th>
             <th>Wednesday</th>
             <th>Thursday  </th>
             <th>Friday</th>
             <th>Saturday  </th>
             <th>Sunday</th>
         </tr>
         </thead>
         <tbody>
         <tr>
             <th className='colonetemps'> 09:00 </th>
             <th className='colonecours'> <div className='colonecours1'>Circuit training</div>
                  <div>09:00 - 10:15</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Crossfit</div>
                  <div>09:00 - 10:00</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Abdos</div>
                  <div>09:00 - 09:45</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >RPM™</div>
                  <div>09:00 - 10:00</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Circuit training</div>
                  <div>09:00 - 09:55</div> 
             </th>
             <th> 
             </th>
             <th> 
             </th>
         </tr>
         <tr>
             <th className='colonetemps'> 11:00 </th>
             <th className='colonecours' > <div className='colonecours1' >Abdos</div>
                  <div>11:00 - 11:45</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >RPM™</div>
                  <div>11:00 - 11:30</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Abdos</div>
                  <div>11:00 - 11:45</div> 
             </th>
             <th> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Circuit training</div>
                  <div>11:00 - 11:55</div> 
             </th>
             <th> </th> 
             <th className='colonecours' > <div className='colonecours1' > Body Attack</div>
                  <div>11:00 - 12:00</div>  </th>
         </tr>
         <tr>
             <th className='colonetemps' > 12:00 </th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' >RPM™</div>
                  <div>12:00 - 12:30</div> </th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>12:00 - 12:30</div> </th>
         </tr>
         <tr>
             <th className='colonetemps' > 14:00  </th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th className='colonecours' > <div className='colonecours1' >RPM™</div>
                  <div>14:00 - 15:00</div> </th>
         </tr>
         <tr>
             <th className='colonetemps' > 16:00  </th>
             <th > </th>
             <th className='colonecours' ><div className='colonecours1' > RPM™ </div>
                  <div>16:00 - 16:45</div></th>
                  <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' > Crossfit</div>
                  <div>16:00 - 17:00</div></th>
         </tr>
         <tr>
             <th className='colonetemps ' > 18:45 </th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>18:45 - 19:45</div></th>
             <th className='colonecours' ><div className='colonecours1' > RPM™ </div>
                  <div>18:45 - 19:15</div></th>
             <th className='colonecours' ><div className='colonecours1' > Circuit training </div>
                  <div>18:45 - 19:45</div></th>
             <th className='colonecours' ><div className='colonecours1' > RPM™ </div>
                  <div>18:45 - 19:15</div></th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>18:45 - 19:30</div></th>
             <th className='colonecours' ><div className='colonecours1' > Yoga™ </div>
                  <div>18:45 - 19:45</div></th>
             <th></th>
         </tr>
         <tr>
             <th className='colonetemps ' > 18:55 </th>
             <th ></th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>18:55 - 19:55</div></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>18:55 - 19:30</div></th>
             <th className='colonecours' ><div className='colonecours1' > Yoga™ </div>
                  <div>18:55 - 19:30</div></th>
             <th > </th>
             <th></th>
         </tr>
         <tr>
             <th className='colonetemps ' > 19:15 </th>
             <th  className='colonecours'  > <div className='colonecours1' > RPM™ </div>
                  <div>19:15- 20:15</div>
                  <div className='colonecours1' > Body Attack </div>
                  <div>19:15 - 20:00</div>
                  </th> 
             <th> </th>
             <th className='colonecours' > <div className='colonecours1' > Body Attack </div>
                  <div> 19:15- 19:45</div> </th>
             <th  ></th>
             <th className='colonecours' ><div className='colonecours1' > Crossfit </div>
                  <div>19:15 - 20:15</div></th>
             <th className='colonecours' ><div className='colonecours1' > RPM™ </div>
                  <div>19:15 - 19:45    </div></th>
             <th></th>
         </tr>




         </tbody>

  </table>
       </div>
      </>
  );
}

export default Home