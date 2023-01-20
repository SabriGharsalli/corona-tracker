import React,{useState,useEffect}  from 'react'
import LineGraph from './LineGraph'
import './Details.css'
//import CovidSummary from './CovidSummary'
import axios from 'axios'

export default function Exetention(props) {
 
/* const [TotalConfirmed, setTotalConfirmed] = useState(0);
const [TotalDeaths, setTotalDeaths] = useState(0);
const [TotalRecovered, setTotalRecovered] = useState(0);
//const [covidSummary, setcovidSummary] = useState({});  */
const [Loading, setLoading] = useState(false);
const [Days, setDays] = useState(7);
const [country, setcountry] = useState("all")
const [xAxis, setxAxis] = useState([]);
const [ycases, setycases] = useState([]);
const [ydeaths, setydeaths] = useState([]);
const [yrecovered, setyrecovered] = useState([]);

/* 
axios.get('https://api.covid19api.com/summary')
        .then(res=>
            {
                setcovidSummary(res.data)

            })
 
axios.get('https://disease.sh/v3/covid-19/countries')
.then(response =>
  {
       Covidlist=response.data;
 
  }); 

  
  
 const setDaysConf=(values)=>{
    days=values;
  }
    
    useEffect(() => {
        setcountry(props.country);
        
        setLoading(true);
        axios.get('https://disease.sh/v3/covid-19/all')
       

        .then(res=> {
            setLoading(false)
            console.log(country)
             if(res.status===200) {
                setTotalConfirmed(res.data.cases);
                setTotalDeaths(res.data.deaths);
                setTotalRecovered(res.data.recovered);
            
        }})})
         

    }
    , []);
     const countryHandler=(e)=>{
        setcountry(e.target.value);
        console.log(e.target.value);
        if(e.target.value==="Choose a country")
     {   getCoronaReportByDateRange("all", Days);}
        else
        {getCoronaReportByDateRange(props.country, Days);
            console.log(props.country)
        }
    } */
    



    const daysHandler=(e)=>{
        setDays(e.target.value);
       
        /* setDaysConf(e.target.value); */
        getCoronaReportByDateRange(country,e.target.value )

    }
    const getCoronaReportByDateRange=(Country, date)=>{
        const xAxis=[];
        const deaths=[];
        const cases=[];
        const recovered=[]
        setLoading(true);
        axios.get('https://disease.sh/v3/covid-19/historical/'+Country+'?lastdays='+date)
        .then(res=>{
            setLoading(false)
                if(Country==="all")
                { 
                    const   table=res.data.cases
           
                for(const index2 in table )
                {xAxis.push(index2);
                cases.push(table[index2])
                }
                
             const   tab2=res.data.deaths;
                    for(const index3 in tab2 )
                    {
                    deaths.push(tab2[index3])
                    }
                
                    
               const  tab3=res.data.recovered;
                
                    for(const index4 in tab3 )
                   { 
                    recovered.push(tab3[index4])
                   }
                console.log(recovered)
                    setxAxis(xAxis);
                    setycases(cases)  ;
                    setydeaths(deaths) ;
                    setyrecovered(recovered); 
                    
                }

                else 
                {

          const   tab=res.data.timeline.cases
           
                for(const index2 in tab )
                {xAxis.push(index2);
                cases.push(tab[index2])
                }
                
             const   tab2=res.data.timeline.deaths;
                    for(const index3 in tab2 )
                    {
                    deaths.push(tab2[index3])
                    }
                
                    
               const  tab3=res.data.timeline.recovered;
                
                    for(const index4 in tab3 )
                   { 
                    recovered.push(tab3[index4])
                   }
                console.log(recovered)
                    setxAxis(xAxis);
                    setycases(cases)  ;
                    setydeaths(deaths) ;
                    setyrecovered(recovered); 
                        }


                }
            
            
           
          
            
        )
        .catch(err=>{
            console.log(err)
        })
    }
    if(Loading)
    return <p>Loading.... </p>



    
    
    return (


        <div>
            {/*  <CovidSummary
            TotalConfirmed={TotalConfirmed}
            TotalDeaths={TotalDeaths}
            TotalRecovered={TotalRecovered}
            Country={country}
            
            />  */}
            {props.country==="all" ? <p className="Tags">World Wide </p>:<p className="Tags">{props.country}</p>}
          <div style={{textAlign:'center'}} >
       {/*  <select value={country} onChange={countryHandler} placeholder="Choose a country " >
    
        {  
            covidSummary.Countries&& covidSummary.Countries.map (country=>
                
                <option key={country.Country} value={country.Country}>{country.Country}</option>
                )
        }




        </select> */}
        <select value={Days} onChange={daysHandler}>
            <option value="7" >Choose an period</option>
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
        </select>


          </div>
    
            <LineGraph x={xAxis} y={ycases} z={ydeaths} w={yrecovered} />
        </div>
    )
}
