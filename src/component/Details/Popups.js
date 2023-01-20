import React from 'react';
import Exetention from './Exetention'

import './popups.css'

export default function Popups(props) {
 
 return ( props.trigger)? (<div className="popup">
            <div className="popup-inner">
            <button className="popup-btn" onClick={ ()=>props.setTrigger(false)}>close</button>
                  
                 <Exetention country={props.country}/>
                
                       
            </div>
            
            </div>):"" }
       
    

