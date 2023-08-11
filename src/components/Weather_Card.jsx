import React, { useState, useRef } from 'react'
import axios from 'axios';
import Weather_Info from './Weather_Info';
import config from '../../config';


const Weather_Card = () => {
    <Weather_Info/>


    const text_country = useRef();

    const [country,setCountry] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [city,setCity] = useState("");
    const [feelslike,setFeelsLike] = useState(null);
    const [icon,setIcon] = useState(null)

    const handleChange = (e) => {
      setCity(e.target.value)  
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(!city) {
        alert("Please enter a valid value.")
        return;
      }

      try {
        const api = config.apiKey;
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;


        text_country.current.value = " ";
        text_country.current.focus();

        
        
        const response = await axios.get(baseURL);
        const {data} = response;
        const {main,sys,weather}= data;
        setTemperature(main.temp)
        setFeelsLike(main.feels_like)
        setIcon(weather[0].icon)
        setCountry(data.name+" "+sys.country);
      }
      catch(error){
        if(error.response && error.response.status === 404) {
          alert("Please enter a valid value.")
          return;
        }
      }
    }

   
  return (
    <>
    <div className='weather-card'>
        <h1>Weather App</h1>
        <form className='weather-form' onSubmit={e => handleSubmit(e)}>

            <input ref={text_country} className="weather-text" onChange={(e)=> handleChange(e)} type="text" 
            placeholder='Enter the country'/>

            <input className='weather-submit' type="submit" value="Click"/>
        </form>

        {temperature !== null && <Weather_Info temperature={temperature} country={country} feels_like={feelslike} icon={icon} /> }
    </div>
    </>
  )
}

export default Weather_Card