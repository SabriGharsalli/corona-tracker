import React,{Component} from 'react'
import './Countries.css'
import HeadingNames from '../../component/HeadingName/HeadingName'
import CountryDaily from '../../component/CountryDaily/CountryDaily'
import axios from 'axios'
import ArraySort from 'array-sort'
export default class Countries extends Component{

 state ={
countryDetails:[],
searchedCountry:[]

 }
 async componentDidMount(){

  var GlobalData= await axios.get('https://disease.sh/v3/covid-19/countries');
  let countryDetails=GlobalData.data
  countryDetails=ArraySort(countryDetails,'cases',{reverse:true})
  this.setState({countryDetails : countryDetails, status:true,selectedData:countryDetails})
  

 }

ChangeSortValue=e=>{
  var target=e.target.value
  let sortedByReverse=true
  if(target==="Highest")
  {
    sortedByReverse=true
  }
  else{
    sortedByReverse=false
  }
  let searchedCountry=ArraySort(this.state.searchedCountry,'cases',{reverse:sortedByReverse})
  let countryDetails=ArraySort(this.state.countryDetails,'cases',{reverse:sortedByReverse})
this.setState({countryDetails:countryDetails,status:true})
this.setState({searchedCountry:searchedCountry,status:true})
}
SearchedCountry=e=>{
  const value=e.target.value
  const countryDetails=this.state.countryDetails
  
  
   var findSpesificcountry =[]
  if(value){
  countryDetails.map(function(cur,index){
  
  const finder=cur.country.toLowerCase().search(value.toLowerCase())
  
  if (finder>-1){
    findSpesificcountry.push(cur)
    
    
  }
  
  return findSpesificcountry
    




  })
  
 
  findSpesificcountry=ArraySort(findSpesificcountry,'cases',{reverse:true})
  
  this.setState({searchedCountry: findSpesificcountry})
  
  }else{
    this.setState({countryDetails : countryDetails})
  
  }
  if(value.length===0)
  {
    this.setState({selectedData :this.state.countryDetails})
    this.setState({searchedCountry : []})
      console.log(this.state.searchedCountry.length)
  }else
  {
    this.setState({stateselectedData:this.state.searchedCountry})
    console.log(this.state.searchedCountry)
  }
  
  
  
  
  
  }
  

  



  render(){

var countrylist=this.state.countryDetails.length>0 ?
this.state.countryDetails.map(function(cur,index){
return(
<CountryDaily index={index} countryCode={cur.countryInfo.iso2} countryName={cur.country}
totalCases={cur.cases}  newCases={cur.todayCases} 
totalDeaths={cur.deaths}  newDeaths={cur.todayDeaths}
 totalRecovered={cur.recovered} newRecovered={cur.todayRecovered} />

)  
}):null 

var countrylistsearched=this.state.searchedCountry.length>0 ?
this.state.searchedCountry.map(function(cur,index){
return(
<CountryDaily index={index} countryCode={cur.countryInfo.iso2} countryName={cur.country}
totalCases={cur.cases}  newCases={cur.todayCases} 
totalDeaths={cur.deaths}  newDeaths={cur.todayDeaths}
 totalRecovered={cur.recovered} newRecovered={cur.todayRecovered} />

)  
}):null 
console.log(this.state.searchedCountry)
 
 return(
<div className="countryStats">
<h2 className="countyStats-Heading" >Countries Stats</h2>
<div className="Filtering" >

<input type="text" placeholder="Enter your county name" onChange={this.SearchedCountry}   >

</input>
<select className="Sort-by" onChange={this.ChangeSortValue}>
    <option value="Highest" >Highest</option>
    <option value="Lowest" >Lowest</option>

</select>

</div>
<HeadingNames/>
{this.state.searchedCountry.length===0?countrylist: countrylistsearched}
</div>




 )



  }  


}