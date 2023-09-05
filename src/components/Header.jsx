import React, { useEffect, useState } from "react";
import axios from "axios";
// import ReactAnimatedWeather from "react-animated-weather";

import SearchBar from "./SearchBar";



function Header(){
    const [weatherr, setWeather] = useState({});
    const [query, setQuery] = useState("dasuya");
    // const [photos, setPhotos] = useState([]);
    useEffect(() => {
      ifClicked();
    }, []);
  

    const search = async (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          setQuery("");
          setWeather({ ...weatherr, loading: true });
        //   const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1fe1feaae7c13da06123fde728b01b3d&units=metric`;
    
            axios
            .get(url)
            .then((res) => {
              console.log("res", res);
              setWeather({ data: res.data, loading: false, error: false });
            })
            .catch((error) => {
              setWeather({ ...weatherr, data: {}, error: true });
              setQuery("");
              console.log("error", error);
            });
        }
      };


 function ifClicked() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1fe1feaae7c13da06123fde728b01b3d&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
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
        console.log(weatherr);
      })
      .catch((error) => console.log(error));
    }

    // list[0].weather[0].id


    // console.log(weather?.description);
    console.log(weatherr?.wind?.speed);

  
    return(
        <div>
        <SearchBar query={query} setQuery={setQuery} search={search} />
       
        <div className="header">
          
        <h1>{query} , {weatherr?.sys?.country}</h1>
      
        <p>{weatherr?.weather?.[0].main}</p>
       
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

       

    );

}
export default Header