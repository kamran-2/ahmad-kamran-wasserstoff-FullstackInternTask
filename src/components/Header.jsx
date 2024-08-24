import React, { useContext, useState } from 'react'
import Search from './Search'
import WeatherContext from '../context/setcontext.js'
import searchlocation from '../assets//icons/searchlocation.png'
import cloudlogo from '../assets/icons/cloudlogo.png'
import { DEFAULT_PLACE } from '../contants/constant.js'
import { getDefaultLocation } from '../utility/getDefaultvalue.js'
import '../style/header.css'
export default function Header() {
    const [clicked, setClicked] = useState(false);
    const { setPlace,set } = useContext(WeatherContext)
    const myfuction = async () => {
        setClicked(!clicked)
        if (clicked != true) {
            const k = await getDefaultLocation();
            console.log(k);
            setPlace(k);
        }
        else {
            setPlace(DEFAULT_PLACE);
        }

    }

    return (
        <section className='header'>
            <div className="logo">
                <img src={cloudlogo} />
                <h1>Wheather App</h1>
            </div>
            <Search />
            <div className="currentlocation" style={clicked ? { backgroundColor: "#434343" } : { backgroundColor: "" }} onClick={myfuction}>
                <img src={searchlocation} />
                <h3>Current location</h3>
            </div>
        </section>
    )
}
