import React from 'react'
import {Line} from 'react-chartjs-2'

export default function LineGraph(props) {
   
  
  return (
        <div style={{
            width: '800px',
            height: '400px',
            margin: '50px auto',}
        }>
            <Line data={{
  labels: props.x,
  datasets: [
    {
      label: 'Covid-19 Cases',
      data: props.y,
      fill: false,
      backgroundColor: 'rgb(12,35,203)',
      borderColor: 'rgba(12,35,203, 0.2)',
    },
     {
      label: 'Covid-19 Deaths',
      data: props.z,
      fill: false,
      backgroundColor: 'rgb(11,24,115)',
      borderColor: 'rgba(11,24,115, 0.6)',
    },{
      label: 'Covid-19 recovered',
      data: props.w,
      fill: false,
      backgroundColor: 'rgb(281, 89, 254)',
      borderColor: 'rgba(281, 89, 254, 0.2)',
    } 
  ],
  


 

}}/>
        </div>
    )
}
