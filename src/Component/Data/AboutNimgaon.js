import React from 'react';

const AboutNimgaon=()=>{

    return(
    <>
      <h2> About Nimgaon Daku</h2>
        <p style={{textAlign:'left'}}>Nimgaon Daku is a Village in Karjat Taluka in Ahmednagar District of 
            Maharashtra State, India.
            It belongs to Khandesh and Northern Maharashtra region . It belongs to Nashik Division .
          <br />
         <font style={{color:'orange'}}> It is located 86 KM towards South from District head quarters Ahmednagar.
         <br />
         <u>22 KM from Karjat.</u> <br />
         <u>287 KM from State capital Mumbai</u></font>
         <br />  
         <font style={{color:'green'}}>Nimgaon Daku Pin code is 414401 and postal head office is Mirajgaon . </font>
         Nimgaon Daku is surrounded by Jamkhed Taluka towards East , Karmala Taluka towards South 
         , Ashti Taluka towards North , Paranda Taluka towards East
         <br />
         <strong>Shrigonda , Daund , Pathardi , Ahmednagar are the near by Cities to Nimgaon Daku.</strong>
        </p>
   </>
    )

}
export default AboutNimgaon;

export const Table =()=>{

    return(
        <>
           <table class="table table-dark table-bordered">
             <thead>
              <tr>
               <th>Total Population</th>
                <th>Male Population	</th>
                <th>Female Population</th>
              </tr>
             </thead>
           <tbody>
            <tr class="table-active ">
              <td>2,673</td>
              <td>1,418</td>
              <td>1,255</td>
            </tr>
           </tbody>
          </table>
        </>
    )
} 


export const LocalInfo = ()=>{

    return(
        <>
           <div className="card ">
             <div className="card-header"> Local Information </div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">Gram Panchayat : Nimgaon Daku</li>
              <li className="list-group-item">Block / Tehsil : Karjat	</li>
              <li className="list-group-item">District : Ahmadnagar</li>
              <li className="list-group-item">State : Maharashtra</li>
              <li className="list-group-item">Area : 1919.03 hectares</li>
              <li className="list-group-item">Households :	554 </li>
              <li className="list-group-item">Assembly Constituency : Karjat jamkhed</li>
              <li className="list-group-item">Parliament Constituency :	Ahmednagar</li>
              <li className="list-group-item">Nearest Town : Ahmadnagar (76 km</li>
             </ul>
             
          </div>
        </>
    )
}

export const TravelsTable =()=>{

  return(
    <>
       <thead>
      <tr className='thead'>
          <th>Car Name</th>
         <th>Owner Name</th>
          <th>Mobile</th>
        </tr>
      </thead>  
      
      </>
  )
}