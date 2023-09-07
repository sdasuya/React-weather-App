import React, { useEffect, useState } from "react";
import axios from "axios";
// import ReactAnimatedWeather from "react-animated-weather";

import SearchBar from "./SearchBar";
import Footer from "./Footer";



function Header(){
    const [weatherr, setWeather] = useState({});
    const [query, setQuery] = useState("seattle");
    const [icon,setIcon]= useState();

    // const [photos, setPhotos] = useState([]);
    useEffect(() => {
      ifClicked();
   
    }, []);
  

 function ifClicked(e) {
    
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1fe1feaae7c13da06123fde728b01b3d&units=metric`
    )
      .then((res) => {
        if (res.ok) {
        //   console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        setIcon(weatherr.weather[0].icon);
      })
      
      .catch((error) => console.log(error));
    }

  

    let s2 = "https://openweathermap.org/img/wn/"+icon+"@2x.png";

  


// list[8].dt_txt
  
    return(
       
        <div>
        <SearchBar query={query} setQuery={setQuery} search={ifClicked} />
       
        <div className="header">
          
        <h1>{weatherr?.name} , {weatherr?.sys?.country}</h1>
      
        <p>{weatherr?.weather?.[0].main}</p>
        <img src={s2}/>
       
        <h2>{weatherr?.main?.temp}°C</h2>
        <div className="pressure">
            <p>Pressue: {weatherr?.main?.pressure}</p>
            <p> | </p>
            <p>Humidity: {weatherr?.main?.humidity}°C</p>
            <p> | </p>
            <p>WindSpeed: {weatherr?.wind?.speed}</p>
        </div>
        </div>
        </div>

       
// list[8].main.temp
    );

}
export default Header