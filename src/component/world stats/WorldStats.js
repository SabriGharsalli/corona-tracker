import React from 'react'

import './WorldStats.css'
const WorldStats= props=>{
    return(
    <div className="worldStats-box">
        <h1 className="totalNumber">{props.total}</h1>
        <p className="about">{props.about}</p>



    </div>) 
}
export default WorldStats