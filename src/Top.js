import React from 'react'
import Banner from './container/Global/Banner';
import Popups from './component/Details/Popups';
import {useState} from 'react';

export default function Top() {
    const [Trigger, setTrigger] = useState(false)
    return (
        <div>
             
     <Banner/>
     <button className="btn"  onClick={()=>setTrigger(true)}    >More info</button>
    <Popups trigger={Trigger} setTrigger={setTrigger} country="all"/> 
            
        </div>
    )
}
