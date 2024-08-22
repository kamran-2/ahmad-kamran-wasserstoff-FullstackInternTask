import React from 'react'
import '../style/todayweather.css'
import brighticon from '../assets/icons/bright-icon.png'
export default function TodaysWeather() {
    return (
        <div className='current-forcast'>
            <div className="current-weather">
                <h4>Now</h4>
                <div className="current-temp">
                    <h1>19&#176; C</h1>
                    <img src={brighticon} />
                </div>
                <h3>Cleared</h3>
                <h3>22 Aug 2024</h3>
                <h3>Dhanbad</h3>
            </div>

            <div className="current-weather-descriptions">

                <div className="current-weather-description">
                    <div className='current-weather-description-header'><p>Maximum wind speed</p></div>
                    <div className='current-weather-description-body'>
                        <h1>25 Km/hr</h1>
                        <img src={brighticon} alt="" />
                    </div>

                </div>
                <div className="current-weather-description">
                    <div className='current-weather-description-header'>
                        <p>Minimum wind speed</p>

                    </div>
                    <div className='current-weather-description-body'>

                        <h1>15 Km/hr</h1>
                        <img src={brighticon} alt="" />
                    </div>

                </div>
                <div className="current-weather-description">
                    <div className='current-weather-description-header'>

                        <p>Humidity</p>
                    </div>
                    <div className='current-weather-description-body'>

                        <h1>44%</h1>
                        <img src={brighticon} alt="" />
                    </div>
                </div>
                <div className="current-weather-description">
                    <div className='current-weather-description-header'>

                        <p>Wind Direction</p>
                    </div>
                    <div className='current-weather-description-body'>

                        <h1>NOrth</h1>
                        <img src={brighticon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
