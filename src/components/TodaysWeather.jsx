import React, { useState } from 'react'
import '../style/todayweather.css'
import { getDate } from '../utility/getDate.js'
import highttemp from '../assets/icons/hightemp.png'
import lowtemp from '../assets/icons/lowtemp.png'
import humidity from '../assets/icons/humidity.png'
import direction from '../assets/icons/direction.png'
import getDirection from '../utility/getDirection.js'
// import icons from '../assets/weathericons/big/5.png'
export default function TodaysWeather({ data }) {
    const { place, currentWeather, dailyForecast } = data;
    if (!currentWeather || !dailyForecast || dailyForecast.length === 0) {
        return <div>Loading...</div>;
    }
    const WindDirection = getDirection(dailyForecast[0].wind.dir);
    const Todaysdate = getDate(dailyForecast[0].day);
    console.log(Todaysdate.Day)

    return (
        <div className='current-forcast'>
            <div className="current-weather">
                <h4>Now</h4>
                <div className="current-temp">
                    <h1>{currentWeather.temperature}&#176; C</h1>
                    <img src={`publicassets/weathericons/big/${currentWeather.icon_num}.png`} />
                </div>
                <h3>{currentWeather.summary}</h3>
                <h3>{Todaysdate}</h3>
                <h3>{place.name}</h3>
            </div>

            <div className="current-weather-descriptions">
                <div className="current-weather-description">
                    <div className='current-weather-description-header'><p>Maximum Tempreture</p></div>
                    <div className='current-weather-description-body'>
                        <h1>{dailyForecast[0].temperature_max}&#176; C</h1>
                        <img src={highttemp} alt="" />
                    </div>
                </div>
                <div className="current-weather-description">
                    <div className='current-weather-description-header'>
                        <p>Minimum Tempreture</p>
                    </div>
                    <div className='current-weather-description-body'>
                        <h1>{dailyForecast[0].temperature_min}&#176; C</h1>
                        <img src={lowtemp} alt="" />
                    </div>
                </div>
                <div className="current-weather-description">
                    <div className='current-weather-description-header'>
                        <p>Humidity</p>
                    </div>
                    <div className='current-weather-description-body'>
                        <h1>{dailyForecast[0].humidity} %</h1>
                        <img src={humidity} alt="" />
                    </div>
                </div>
                <div className="current-weather-description">
                    <div className='current-weather-description-header'>
                        <p>Wind Direction</p>
                    </div>
                    <div className='current-weather-description-body'>
                        <h1>{WindDirection}</h1>
                        <img src={direction} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
