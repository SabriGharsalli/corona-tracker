import React from 'react'
import Card from './Card'

export default function CovidSummary(props) {
    const {   
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
    Country
}=props
    return (
        <div>
            <div>
            <div>
                <h1 style={{textAlign: 'center'}} >{ Country }</h1>
               <div style={{display: 'flex',
                            justifyContent: 'center'}}>
               <Card>
                    <span>Cases</span><br/>
                    <span>{TotalConfirmed} </span>
                </Card>
                
                <Card>
                    <span>Deaths</span><br/>
                    <span>{TotalDeaths} </span>
                </Card>
                <Card>
                    <span>Recovered</span><br/>
                    <span>{TotalRecovered} </span>
                </Card>
                
               </div>
                <div></div>
            </div>


            </div>
        </div>
    )
}
