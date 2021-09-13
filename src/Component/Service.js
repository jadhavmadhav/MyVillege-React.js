import React from 'react';
 import  Agricultuarl  from './Services/Agricltuarl'
 import  Hospital from './Services/Hospitals'
 import  Salon from './Services/Salon'
 import  Photoshops from './Services/Photoshops'
 import './Sidbar.css'
const Services =()=>{
 
    return(
        <> 
         <Agricultuarl /> <hr /> 
         <Salon /> <hr />
         <Photoshops /> <hr />
         <Hospital /> <hr /> 
        
        </>
    )

}
export default Services ;