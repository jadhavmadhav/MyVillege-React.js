import React ,{useState} from 'react';


const Contact = ()=>{
      const [data, setdata] = useState( { fristname:'' , lastname:' ', comment:' ' , mobile:''})
     
    const Inputevent =(e)=>{
      
     const {name , value}=e.target ;
      setdata((prive)=>{
          return ({
              ...prive ,
              [name]:value ,
          }
          )
      })
    }
    const  MessageSubmit =(e)=>{
      e.preventDefault()
       alert(`your name : ${data.fristname} ${data.lastname}  Mobile Number is: ${data.mobile}    comment: ${data.comment}`)

    }
    return(
        <>  
          <div className='container-fluid '>
         <div className='row  '>
         <div className=" col-8 col-md-6 m-auto mt-4 contact ">
           
              <form onSubmit={MessageSubmit}  >
                <div className="mt-3">
                <label htmlFor="fristname" className="form-label">Frist Name </label>
                 <input type="text" value={data.fristname} name='fristname' className="form-control " onChange={Inputevent} autoComplete="off" required />
                </div>
                <div className="mt-3">
                <label htmlFor="lastname" className="form-label"> Last Name </label>
                 <input type="text" value={data.lastname} name='lastname' className="form-control" onChange={Inputevent} autoComplete="off" required />
                </div>
                <div className="mt-3">
                <label htmlFor="mobile" className="form-label">Mobile Number </label>
                 <input type="text" value={data.mobile} name='mobile' className="form-control" onChange={Inputevent}   autoComplete="off" required />
                </div>
                <div className= "mt-3 form-group">
                <label htmlFor="comment" className="form-label">Comments</label>
                <textarea  type="text" value={data.comment} name='comment' className="form-control" onChange={Inputevent} autoComplete="off" required />
                </div>
   
                <button type="submit"  className="btn"> Send Message</button>
               </form>
              </div>
            </div>
        </div> 
        </>
    )
}
export default Contact ;