import React from 'react'
import './Details.css'

export default function Card(props) {
    return (
        <div className="card">
            {props.children}
            
        </div>
    )
}
