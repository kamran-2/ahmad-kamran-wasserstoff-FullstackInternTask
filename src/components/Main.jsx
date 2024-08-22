import React from 'react'
import TodaysWeather from './TodaysWeather'
import Upcomingforcast from './Upcomingforcast'
import '../index.css'
export default function Main() {
    return (
        <section className='main'>
            <TodaysWeather />
            <div className="forcast-header">
                <h1>5 Days forcast</h1>
            </div>
            <Upcomingforcast />
        </section>
    )
}
