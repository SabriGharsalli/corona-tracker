import React,{Component} from 'react'
import './banner.css'
import WorldStats from '../../component/world stats/WorldStats'
import axios from 'axios'
import NumberFormat from 'react-number-format'
import Popups from '../../component/Details/Popups';
export default class Banner extends Component
{  
    state={
        result:{
     "TotatlConfirmed":0,
     "TotalDeath":0,
     "TotalRecoverd":0,
     "ActiveCases":0
    }
    

    }

    async componentDidMount(){
        var GlobalData= await axios.get('https://disease.sh/v3/covid-19/all');
        let corona=GlobalData.data
       
        this.setState({
            result:{
                "Totatl Confirmed":corona.cases,
                "Total Deaths":corona.deaths,
                "Total Recoverd":corona.recovered,
                "Active Cases":corona.active
               }
           

        })
       
    }
    render() {
        
        var stats=Object.keys(this.state.result).map((key,index)=>{
            return <WorldStats key={index} about={key} 
            total={ <NumberFormat value={this.state.result[key]} thousandSeparator={true} displayType="text"/>  }/>
        })
    return (
       
   
        <div className="Global">
           <h1 className="heading" >Covid-19 Tracker</h1>
                <p className="Description" > Lets see Global Covid Stats</p>
                <div className="WorldStat">
                {stats}
                
                </div>
               
        </div>
    )}
}
