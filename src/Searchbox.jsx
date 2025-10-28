import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';
import { useState } from 'react';

export default function Searchbox({updateinfo}) {
  let [city,setCity]=useState("");
  let [error,SetError]=useState(false);
  let Api_url="https://api.openweathermap.org/data/2.5/weather";
  const API_key="330de6de096534127e501f05793d58b8";


  let weatherinfo=async ()=>{
     try{
    let response =await fetch(`${Api_url}?q=${city}&appid=${API_key}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
      city:city,
      temp: jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelsLike:jsonResponse.main.feels_like,
      weather:jsonResponse.weather[0].description,
       };
    console.log(result);
    return result;
      }
    catch(err){
    throw err;}

  };
let handleChange=(evt)=>{
    setCity(evt.target.value); 
}

let handlesubmit=async (evt)=>{
  evt.preventDefault();
  try{
  console.log(city);
  setCity("");
  let newinfo =await weatherinfo();
  updateinfo(newinfo);
  }
  catch(err){
   SetError(true);
  }
};

  return (
    
    <div className="Searchbox">
 
      <h3>Search for the weather</h3>

      <form onSubmit={handlesubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error &&<p style={{color: "red"}}>NO such place exist! </p>}
        <br></br>
      </form>
    </div>
  );
}
