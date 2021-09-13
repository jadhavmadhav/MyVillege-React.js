import React from 'react';

function Cardlist(props){

   return(
       <>
        <div className="col-6 col-md-3 ">
         <div className="card services "> 
          <div className="card-header">
             <h5>{props.header}</h5>
          </div>
          <div className="card-text">
            <p><font>Name: <span> {props.name} </span></font> </p>
            <p><font>   Number: <span> {props.mobile} </span></font> </p>
          </div> 
         </div>
        </div>
       </>
   )

}
export default Cardlist ;

