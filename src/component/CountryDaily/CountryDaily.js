import React from 'react'
import './CountryDaily.css'
import ReactCountryFlag from 'react-country-flag'
import Popups from '../Details/Popups'
import { useState } from 'react'
export default function CountryDaily(props)
{
    const [Trigger, setTrigger] = useState(false)
    return( 
<div className="CountryDetails">
<div className="CountryIcon">

<ReactCountryFlag
className="country-flag"
countryCode={props.countryCode}
svg
style={{
    width:"3.5em",
    height:"3.5em"
}}
title={props.countryCode}
    

/>
{props.countryName.length < 12? <h2 style={{fontSize:"12px"}} >{props.countryName}  </h2>:<h2 style={{fontSize:"12px"}} > {props.countryCode} </h2>}

</div>
<div className="CaseDetails">

<div className="cases-box-cases">
    <a href="# ">{props.totalCases}</a>
    <p className="yesterday">24H ago: <strong>{props.newCases} </strong> </p>

</div>
<div className="cases-box deaths">
    <a href="# ">{props.totalDeaths}</a>
    <p className="yesterday">24H ago: <strong>{props.newDeaths} </strong> </p>

</div>
<div className="cases-box recovered">
    <a href="# ">{props.totalRecovered}</a>
    <p className="yesterday">24H ago: <strong>{props.newRecovered} </strong> </p>
    <button className="btn" onClick={()=>setTrigger(true)} >More..</button>

</div>





</div>
<Popups trigger={Trigger} setTrigger={setTrigger} country={props.countryCode}/>


</div>


)
}