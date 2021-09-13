import React from 'react';
import {Hospitaldata} from '../Data/Servicesdata'
import  Cardlist from '../CardList'
function Hospital (){

    return(
        <> 
   <div className="col-12 col-md-12 m-auto">
   <div className="row servicediv">
          <h2 className=" services_name">Hospital's</h2>
          {
           Hospitaldata.map((ele)=>{
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
export default Hospital ;