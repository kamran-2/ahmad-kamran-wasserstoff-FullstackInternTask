import React from 'react'
import Search from './Search'
import searchlocation from '../assets//icons/searchlocation.png'
import cloudlogo from '../assets/icons/cloudlogo.png'
import '../style/header.css'
export default function Header() {
    return (
        <section className='header'>
            <div className="logo">
                <img src={cloudlogo} />
                <h1>Wheather App</h1>
            </div>
            <Search />
            <div className="currentlocation">
                <img src={searchlocation} />
                <h3>Current location</h3>
            </div>
        </section>
    )
}
