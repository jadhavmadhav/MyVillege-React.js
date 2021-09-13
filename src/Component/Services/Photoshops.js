import React from 'react';
import {Photoshopsdata} from '../Data/Servicesdata'
import  Cardlist from '../CardList'
function Photoshop (){

    return(
        <>
   
   <div className="col-12 col-md-12 m-auto">
   <div className="row servicediv">
          <h2 className="services_name">Photo Studio'S</h2>
          {
           Photoshopsdata.map((ele)=>{
              const { name ,title,  mobile} =ele ;
               return( 
                <Cardlist header={title} name={name}  mobile={mobile} />
                     ) 
                    })
           }
           </div>
       </div>
       
    
        </>
    )

}
export default Photoshop;