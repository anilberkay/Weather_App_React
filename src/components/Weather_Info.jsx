import React from "react";
import Weather_Card from "./Weather_Card";

const Weather_Info = ({ temperature , country, feels_like,icon}) => {

    return (
      <>
      <div className="weather-info">
        <h2 className="weather-city">{country}</h2>
        <h3 className="weather-temp"> <p className="weather-p">{icon && <img className="icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />}{temperature}°C </p></h3>
        <h4 className="weather-feel">Feels Like : {feels_like}°C</h4>
      </div>
      </>
    );
  };
  
  export default Weather_Info;