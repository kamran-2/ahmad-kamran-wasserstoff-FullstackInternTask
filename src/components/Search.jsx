import React, { useState, useContext } from 'react'
import '../style/header.css'
import WeatherContext from '../context/setcontext'
import { searchPlaces } from '../api/api'
import searchicon from '../assets//icons/searchicon.png'
export default function Search() {
  const [location, setLocation] = useState('');

  const { setPlace } = useContext(WeatherContext)

  const HandleSearch = async () => {
    const searchedPlace = await searchPlaces(location);

    setPlace(searchedPlace);
  }
  return (
    <div className='search-container'>
      <div className="search">
        <img src={searchicon} onClick={HandleSearch} />
        <input type="text" placeholder='Enter your city' onChange={(e) => setLocation(e.target.value)} />
      </div>
    </div>)
}
