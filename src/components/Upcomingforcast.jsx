import React from 'react'
import { getDay ,getDate} from '../utility/getDate';
import getClimate from '../utility/getclimate';
import '../style/upcomingforcast.css'

export default function Upcomingforcast({ data }) {
    const { place, dailyForecast } = data;
    return (
        <section className='upcomingforcast'>
            {
                dailyForecast.slice(1, 6).map((e,i) => {
                    const UpcomingDay = getDay(i)
                    console.log(e)
                    return (<div className="forcast">
                        <h4>{i == 0 ?'Tomorrow':i==1?'Day After Tomorrow':UpcomingDay}</h4>
                        <div className="current-temp">
                            <h1>{e.temperature}&#176; C</h1>
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
