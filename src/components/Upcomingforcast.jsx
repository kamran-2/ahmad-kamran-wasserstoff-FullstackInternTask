import React from 'react'
import { getDay, getDate } from '../utility/getDate';
import getClimate from '../utility/getclimate';
import WeatherContext from '../context/setcontext';
import '../style/upcomingforcast.css'
import { useContext } from 'react';

export default function Upcomingforcast({ data }) {
    const {dailyForecast } = data;
    const {place, measure } = useContext(WeatherContext)

    return (
        <section className='upcomingforcast'>

            {
                dailyForecast.slice(1, 6).map((e, i) => {

                    const UpcomingDay = getDay(i);

                    return (<div className="forcast" key={i}>
                        <h4>{i == 0 ? 'Tomorrow' : i == 1 ? 'Day After Tomorrow' : UpcomingDay}</h4>

                        <div className="current-temp">
                            <h1>{`${e.temperature} ${measure}`}</h1>
                            <img src={`publicassets/weathericons/big/${e.icon}.png`} />
                        </div>

                        <h3>{getClimate(e.weather)}</h3>
                        <h3>{getDate(e.day)}</h3>
                        <h3>{place.name}</h3>
                    </div>);
                })
            }

        </section>
    )
}
