import React,{useContext} from 'react'
import TodaysWeather from './TodaysWeather'
import Upcomingforcast from './Upcomingforcast'
import WeatherContext from '../context/setcontext'
import '../index.css'

export default function Main() {

    // Use the useContext hook to access weather data from WeatherContext

    const {currentWeather, dailyForecast} = useContext(WeatherContext);
    
    return (
        <section className='main'>
            <TodaysWeather data={{currentWeather, dailyForecast}} />
            <div className="forcast-header">
                <h1>5 Days forcast</h1>
            </div>
            <Upcomingforcast data={{dailyForecast}}/>
        </section>
    )
}
