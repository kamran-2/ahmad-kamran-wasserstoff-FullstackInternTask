import React, { useState, useContext } from 'react'
import WeatherContext from '../context/setcontext'
import { searchPlaces } from '../api/api'
import { searchicon } from '../utility/getIcons'
import '../style/header.css'

export default function Search() {
  const [location, setLocation] = useState('');

  const { setPlace } = useContext(WeatherContext)

  // Handle Search function set the the input value to searchPlaces to get the location from the api call and setPlace 

  const HandleSearch = async () => {
    const searchedPlace = await searchPlaces(location);

    setPlace(searchedPlace);
  }
  return (
    <div className='search-container'>
      <div className="search">
        <input type="text" placeholder='Enter your city' onChange={(e) => setLocation(e.target.value)} />
        <img src={searchicon} onClick={HandleSearch} />                                  
      </div>
    </div>)
}
