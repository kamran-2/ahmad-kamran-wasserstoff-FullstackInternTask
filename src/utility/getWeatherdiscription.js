
import getDirection from "./getDirection";
import {UNITS} from '../contants/constant'
const getweatherdiscription = (dailyForecast,measure) => {
  const WindDirection = getDirection(dailyForecast[0].wind.dir);
   const weatherdiscription = [
     {
       discription: "Maximum Tempreture",
       value: dailyForecast[0].temperature_max,
       logo: "publicassets/icons/hightemp.png",
       unit: UNITS[measure].temperature,
     },
     {
       discription: "Minimum Tempreture",
       value: dailyForecast[0].temperature_min,
       logo: "publicassets/icons/lowtemp.png",
       unit: UNITS[measure].temperature,
     },
     {
       discription: "Humidity",
       value: dailyForecast[0].humidity,
       logo: "publicassets/icons/humidity.png",
       unit: UNITS[measure].humidity,
     },
     {
       discription: "Wind Direction",
       value: WindDirection,
       logo: "publicassets/icons/direction.png",
       unit: "",
     },
     {
       discription: "Wind Speed",
       value: dailyForecast[0].wind.speed,
       logo: "publicassets/icons/airspeed.png",
       unit: UNITS[measure].wind_speed,
     },
   ];
return weatherdiscription
};


export default getweatherdiscription;