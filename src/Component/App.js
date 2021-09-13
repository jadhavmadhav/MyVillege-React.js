  import React  from 'react'
  
  import  Navbar from './Navbar' 
  import Home from './Home'
  import  About from './About'
  import  Contact from './Contact';
  import  Service from './Service';
  import  Travels from './Travels';
 import ContactUs from './ContactUs'
  import  {Switch , Route , Redirect } from 'react-router-dom'
 const App = ()=>{
   return(
     <>
     <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route exact path="/service" component={Service} />
       <Route exact path='/travels' component={Travels} />
       <Route exact path='/contact' component={Contact} />
       <Route exact path='/Contactus' component={ContactUs} />
       <Redirect to='/' />     
     </Switch> 
     </>
   )
 
  }
 
  export default App ;