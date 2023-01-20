 import React,{useState} from 'react';
import Auth from './Auth';

import './App.css';

import Countries from './container/countries/Countries';
import Top from './Top'; 
export default function App ()  {
  
  const [isSignedIn, setisSignedIn] = useState(false  )
  const [username, setusername] = useState("");
  
   return (
  <div className="bnr">
  <Top/>
  
 
  {isSignedIn ?
  <Auth setUser={()=>setusername} /> :<button className="Sign-up-btn"  onClick={()=> setisSignedIn(true) }>Login</button>
  
  
  
  } 
   
   <Countries/> 
  
 </div>
 )

 

    
  
}
 
