import React, { createContext, useEffect, useState } from "react";
import WeatherContext from "./setcontext.js";
import { getweather } from "../api/api.js";
import { DEFAULT_PLACE } from "../contants/constant.js";
const WeatherProvider = ({children}) => {

  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState("auto");
  const [units, setUnits] = useState({});
useEffect(()=>{
  const WeatherReport = async()=>{
    console.log(currentWeather);
    
    const cw = await getweather(
      'current',
       place.place_id
    );
    setCurrentWeather(cw.current);

    const df = await getweather(
      'daily',
       place.place_id
    );
    setDailyForecast(df.daily.data);
  }
  WeatherReport();
},[place])
  return (
    <WeatherContext.Provider value={{
      place,
      setPlace,
      currentWeather,
      dailyForecast,
      measurementSystem,
      setMeasurementSystem,
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider;
