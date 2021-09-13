import React from 'react';
import  AboutNimgaon ,{Table,LocalInfo} from './Data/AboutNimgaon'

 const About=()=>{
  const  img1 = process.env.PUBLIC_URL + "/images/5.jpg"
    return(
        <>  
          <div className='container-fluid  about   '>
           <div className='row '>
            <div className='col-10 col-md-4 mt-4 m-auto main_header_left' > 
               <LocalInfo />
            </div>
            <div className="col-md-6  col-12 m-auto  about_header_right">
             <Table /> 
             <AboutNimgaon />
           </div>
           </div>
          </div>  
        </>
    )

 }

 export default About