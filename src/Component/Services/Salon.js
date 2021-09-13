import React from 'react';
import {Salondata }from '../Data/Servicesdata';
import  Cardlist from '../CardList'
function Salon(){

    return(
        <>
  <div className='row'>
   <div className="col-12 col-md-12 m-auto">
    <div className="row servicediv">
          <h2 className="services_name">Salon's</h2>
          {
           Salondata.map((ele)=>{
              const { name ,title,  mobile} =ele ;
               return(
                <Cardlist header={title} name={name}  mobile={mobile} />
                      ) 
                    })
           }
           </div>
       </div>
       </div>
 
        </>
    )

}
export default Salon;