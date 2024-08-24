import React, { createContext, useEffect, useState } from "react";
import WeatherContext from "./setcontext.js";
import { getweather } from "../api/api.js";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS, UNITS } from "../contants/constant.js";
const WeatherProvider = ({ children }) => {

  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [currentWeather, setCurrentWeather] = useState({});
  const [measure, setMeasure] = useState('°C')
  const [dailyForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.METRIC);
  
  useEffect(() => {
    const WeatherReport = async () => {
      const cw = await getweather(
        'current',
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(cw.current);

      const df = await getweather(
        'daily',
        place.place_id,
        measurementSystem
      );
      setDailyForecast(df.daily.data);
    }

    WeatherReport();
  }, [place, measurementSystem])
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
