import React   from 'react';
 import stockData from './Data/Transportdata'
  import {TravelsTable} from './Data/AboutNimgaon'


  const Travels = ()=>{
   return (
    <>  
    <div className="row ">
    <div className="col-12 col-md-8  m-auto travel">
    <h2 className="travel_header">Travels & Transport</h2>
    <table className="table  table-bordered">
        <TravelsTable />   
       
           
                  {stockData.map((data, key) => {  
                   return (<>
                     <tbody key= {key} >
                      <tr >
                      <td >{data.carname}</td>  
                      <td>{data.ownername}</td>
                      <td>{data.mobile}</td>
                     </tr> 
                     </tbody> 
                      </>);
                      })} 
           
              
    </table>
    </div>
    </div> 
    </>
  )
 
    
        
}
export default Travels ;