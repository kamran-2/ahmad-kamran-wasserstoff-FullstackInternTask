import React, { createContext, useEffect, useState } from "react";
import WeatherContext from "./setcontext.js";
import { getweather } from "../api/api.js";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS, UNITS } from "../contants/constant.js";
const WeatherProvider = ({ children }) => {
  // State variables to hold weather and location data
  const [place, setPlace] = useState(DEFAULT_PLACE); // Default place
  const [currentWeather, setCurrentWeather] = useState({}); // Current weather data
  const [measure, setMeasure] = useState('°C'); // Measurement unit (default is Celsius)
  const [dailyForecast, setDailyForecast] = useState([]); // Daily weather forecast data
  const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.METRIC); // Default measurement system

  // useEffect to fetch weather data whenever place or measurementSystem changes
  useEffect(() => {
    const WeatherReport = async () => {
      // Fetch current weather data
      const cw = await getweather(
        'current',
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(cw.current);

      // Fetch daily forecast data
      const df = await getweather(
        'daily',
        place.place_id,
        measurementSystem
      );
      setDailyForecast(df.daily.data);
    }

    WeatherReport(); // Call the async function to fetch weather data
  }, [place, measurementSystem]); // Dependencies: fetch data when place or measurementSystem changes

  return (
    <WeatherContext.Provider value={{
      place,
      setPlace,
      currentWeather,
      dailyForecast,
      measurementSystem,
      measure,
      setMeasure,
      setMeasurementSystem,
    }}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider;
