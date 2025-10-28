import Searchbox from './searchbox';
import Infobox from './Infobox'
import { useState } from 'react';


export default function weatherApp(){
    const [weatherinfo ,setweatherinfo]= useState({
    city:"Delhi",
    feelslike:24.84,
    tempMIn:25.05,
    temp:25.25,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    Weather:"haze",

    });

  let updateinfo=(newinfo)=>{
    setweatherinfo(newinfo);
}

 

return(
<div style={{textAlign:"center"}}> 
<h1>Weather web</h1>
<Searchbox updateinfo={updateinfo}/>
<Infobox info={weatherinfo} />

</div>
);


}