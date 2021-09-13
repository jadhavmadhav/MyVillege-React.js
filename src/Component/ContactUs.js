import React from 'react';

export default function componentName() {
    const img =  process.env.PUBLIC_URL + "/images/3.png" ;
  return (
    <>
    <div className='mt-4  contactus'>
        
     <div className="card col-6 col-md-3 m-auto">
          <div className="card_image">
            <img class="image" src={img} />
          </div>
          <div className="card-header">
           <p>Jadhav Madhav</p>
          </div>
          <div className="card-body">
            <p >I Am A < font> MERN Stack Developer</font></p>
            <p>7620643217</p> 
          </div>
          <div className="card-footer">
           <a className="insta" href="https://www.instagram.com/jadhav_madhau/" target="_blank"><i class="fab fa-instagram"></i></a>
           <a href="https://www.facebook.com/profile.php?id=100008503277066" target="_blank"><i class="fab fa-facebook"></i></a>
          </div>
          
        </div>

    </div>
 

        
    </>
  );
}
