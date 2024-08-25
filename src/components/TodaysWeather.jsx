import React, { useContext } from 'react'
import '../style/todayweather.css'
import { getDate } from '../utility/getDate.js'
import getweatherdiscription from '../utility/getWeatherdiscription.js'
import WeatherContext from '../context/setcontext.js'
import Loader from './Loader.jsx'

export default function TodaysWeather({ data }) {

    // Destructure data object to get currentWeather and dailyForecast

    const { currentWeather, dailyForecast } = data;

    // Destructure place, measure, and measurementSystem from WeatherContext

    const { place, measure, measurementSystem } = useContext(WeatherContext);

    // Check if currentWeather or dailyForecast is missing or if dailyForecast is empty

    if (!currentWeather || !dailyForecast || dailyForecast.length === 0) {
        return <Loader />;
    }

    // Get weather description for the day using the provided utility function

    const weatherDiscription = getweatherdiscription(dailyForecast, measurementSystem);

    // Get today's date from the dailyForecast data with month name

    const Todaysdate = getDate(dailyForecast[0].day);

    return (
        <div className='current-forcast'>
            <div className="current-weather">
                <h4>Now</h4>
                <div className="current-temp">
                    <h1>{`${currentWeather.temperature} ${measure}`}</h1>
                    <img src={`publicassets/weathericons/big/${currentWeather.icon_num}.png`} />
                </div>
                <h3>{currentWeather.summary}</h3>
                <h3>{Todaysdate}</h3>
                <h3>{place.name}</h3>
            </div>

            <div className="current-weather-descriptions">
                {
                    weatherDiscription.map(({ discription, value, logo, unit }, index) => {
                        return (
                            <div className="current-weather-description" key={index}>
                                <div className='current-weather-description-header'><p>{discription}</p></div>
                                <div className='current-weather-description-body'>
                                    <h1>{`${value} ${unit}`}</h1>
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
}
