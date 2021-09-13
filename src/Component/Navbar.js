import React from 'react';
import { NavLink } from 'react-router-dom';
 import './index.css'
const Navbar=()=>{

   return(
       <>
         <div className='container-fluid main-menu'>
         <div className='row'>
          <div className='col-md-10 col-12 m-auto'>
                 
          <nav className="navbar navbar-expand-lg  "> 
             <h2 className="navbar-brand  " >Nimgaon Daku</h2>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
              aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto" >
                 <li className="nav-item active">
                  <NavLink exact activeClassName="menu_active" aria-current='page' className="nav-link active "   to="/">Home</NavLink>
                 </li>
                 <li className="nav-item">
                  <NavLink exact  activeClassName="menu_active" className="nav-link"  to="/about">About</NavLink>
                 </li>
                 <li className="nav-item">
                  <NavLink exact  activeClassName="menu_active" className="nav-link"  to="/service">Service</NavLink>
                 </li>
                 <li className="nav-item">
                  <NavLink exact  activeClassName="menu_active" className="nav-link"  to="/travels">Travels</NavLink>
                 </li>
                 <li className="nav-item">
                  <NavLink exact activeClassName="menu_active" className="nav-link"  to="/contact">Contact</NavLink>
                 </li>
                 <li className="nav-item">
                  <NavLink exact activeClassName="menu_active" className="nav-link" to="/contactus">ContactUs</NavLink>
                 </li>
                  
               </ul> 
             </div> 
          </nav>
        </div>
       </div>
      </div>
         
   

 </>
   )

}
export default Navbar ;