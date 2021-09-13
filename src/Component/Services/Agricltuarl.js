import React from 'react';
import   Agricdata   from '../Data/Servicesdata'
import  Cardlist from '../CardList'

function Agricultuarl(){
  
    return(
        <>
          
          <div className="col-12 col-md-12 m-auto"  >
        <div className="row ">
          <h2 className="services_name">Agricultuar</h2>
          {
           Agricdata.map((ele)=>{
              const { name ,title, mobile} =ele ;
               return(
                      <Cardlist header={title} name={name}   mobile={mobile} />
                    ) 
                    })
           }
          </div>
          </div>
           
        </>
    )

}
export default Agricultuarl ;


 