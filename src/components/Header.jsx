import React, { useContext, useState } from 'react'
import Search from './Search'
import WeatherContext from '../context/setcontext.js'
import searchlocation from '../assets//icons/searchlocation.png'
import cloudlogo from '../assets/icons/cloudlogo.png'
import celsius from '../assets/icons/celsius.png'
import fahrenheit from '../assets/icons/fahrenheit.png'
import addicon from '../assets/icons/addicon.png'
import { DEFAULT_PLACE } from '../contants/constant.js'
import { getDefaultLocation } from '../utility/getDefaultvalue.js'

import '../style/header.css'
export default function Header() {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelection] = useState(false);
    const [iconselected, seticonSelection] = useState(false);
    const { setPlace, setMeasurementSystem, setMeasure, measure } = useContext(WeatherContext)
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

    // const HandleFloatIcons = () =>{
    //     seticonSelection((prevSelected) => {
    //         const newSelected = !prevSelected;
    //         console.log("Selected:", newSelected);
    //         if (newSelected) {
    //             setMeasurementSystem('us');
    //             setMeasure('°F');
    //         } else {
    //             setMeasurementSystem('metric');
    //             setMeasure('°C');
    //         }
    //         return newSelected;
    //     });
    // }

    return (
        <section className='header'>
            <div className="logo">
                <img src={cloudlogo} />
                <h1>Wheather App</h1>
            </div>
            <Search />

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
