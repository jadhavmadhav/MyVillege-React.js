import React from 'react'; 
 import   {sarpanch , mp , mla} from './Data/Homedata'; 
const Home = ()=>{
  
  const currentHours = new Date().getHours()
   const currentTime = new Date().toLocaleTimeString();
   const currentDate = new Date().toLocaleDateString();
    
   let mention ='';
  let cssStyle = { };
     if(currentHours >= 1 && currentHours < 12){ 
       mention =' Good Morning' ;
       cssStyle.color = "green"; 
     }else if (currentHours >=12 && currentHours < 18){
            mention= ' Good Afternoon' ;
            cssStyle.color = "orange"; 
     } else if (currentHours >=18 && currentHours < 21){
       mention=' Good Evening'
       cssStyle.color='pink' 
     }else{
       mention='Good Night'
       cssStyle.color='blue' 
     }
  
    return(
        <> 
         <section id="header" className='d-flex align-items-center bg '>
         <div className='container-fluid '>
        <div className='row '>
          <div className='col-12 col-md-10 mx-auto'>
          <div className="row  ">
           <div className="col-md-6 col-12 main_header_left">
              <h5 > <span>Hello</span> <strong style={cssStyle}> {mention} </strong></h5>
              
              <h6> Locality Name :<span>Nimgaon Daku ( निमगाव डाकू )</span></h6>
              <h6>Language :<span> English and Hindi, Marathi</span></h6>
              <h6>Current Time : <span>{currentTime}</span></h6>
              <h6>Date: <span>{currentDate}</span></h6>
              <h6>Assembly MLA :<span> {mla} </span></h6>
              <h6>Parliament MP :<span>  {mp} </span></h6>
              <h5>Sarpanch Name :<span> {sarpanch} </span></h5>
               
            </div>

             <div className="col-md-6 col-12 main_header_right"  >
               
                  
            
              <img width='300' height='350' src={process.env.PUBLIC_URL + "/images/3.PNG"} alt="First slide" />
   
      
            </div>
           </div>
          </div>
         </div>
        </div>
   </section>
  </>
    )
}
export default Home ;