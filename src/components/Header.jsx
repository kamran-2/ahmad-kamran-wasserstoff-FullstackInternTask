import React, { useContext, useState } from 'react'
import Search from './Search'
import {
    searchlocation,
    cloudlogo,
    celsius,
    fahrenheit,
    addicon
} from '../utility/getIcons.js'
import WeatherContext from "../context/setcontext.js";
import { DEFAULT_PLACE } from '../contants/constant.js'
import { getDefaultLocation } from '../utility/getDefaultvalue.js'
import '../style/header.css'

export default function Header() {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelection] = useState(false);
    const [iconselected, seticonSelection] = useState(false);

    const { setPlace, setMeasurementSystem, setMeasure, measure } = useContext(WeatherContext)

    // Function use to set the location to current location 
    const currentLocationWeather = async () => {
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
    // Function use for Toggle the tempreture from °C to °F vise versa
    const Handlemeasure = () => {
        setSelection((prevSelected) => {
            const newSelected = !prevSelected;
            console.log("Selected:", newSelected);
            if (newSelected) {
                setMeasurementSystem('us');
                setMeasure('°F');
            } else {
                setMeasurementSystem('metric');
                setMeasure('°C');
            }
            return newSelected;
        });
    };

    return (
        <section className='header'>
            <div className="logo">
                <img src={cloudlogo} />
                <h1>Wheather App</h1>
            </div>
            {/* search component */}
            <Search />

            {/* Float Button for Mobile */}
            <div className="float-icons">
                {
                    iconselected &&

                    <div className=''>
                        <div className="float-icon" style={clicked ? { backgroundColor: "#434343" } : { backgroundColor: "" }} onClick={Handlemeasure}>
                            <img src={measure != '°F' ? celsius : fahrenheit} alt='logo' />
                        </div>
                        <div className="float-icon" style={clicked ? { backgroundColor: "#434343" } : { backgroundColor: "" }} onClick={currentLocationWeather}>
                            <img src={searchlocation} />
                        </div>
                    </div>
                }
            </div>

            {/* Location and Toggle option for tempreture */}
            <div className="location-logo" style={clicked ? { backgroundColor: "#434343" } : { backgroundColor: "" }} onClick={() => seticonSelection(!iconselected)}>
                <img src={addicon} />
            </div>
            <div className='header-icons'>
                <div>
                    <div className="measurebtn" style={clicked ? { backgroundColor: "#434343" } : { backgroundColor: "" }} onClick={Handlemeasure}>
                        <img src={measure == 'C' ? celsius : fahrenheit} alt='logo' />
                    </div>
                </div>
                <div className="currentlocation" style={clicked ? { backgroundColor: "#434343" } : { backgroundColor: "" }} onClick={currentLocationWeather}>
                    <img src={searchlocation} />
                    <h3>Current location</h3>
                </div>
            </div>

        </section >
    )
}
