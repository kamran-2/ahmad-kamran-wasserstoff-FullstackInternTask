import React from 'react'
import '../style/header.css'
import searchicon from '../assets//icons/searchicon.png'
export default function Search() {
  return (
      <div className='search-container'>
          <div className="search">
       <img src={searchicon} />
       <input type="text" placeholder='Enter your city'/>
      </div>
          {/* {openSearchResults && (
              <div className='search-results'>
                  <div className='results-container'>
                      {searchResults.map((place) => (
                          <div
                              className='result'
                              key={place.place_id}
                              onClick={() => changePlace(place)}
                          >
                              {place.name}, {place.adm_area1}, {place.country}
                          </div>
                      ))}
                  </div>
              </div>
          )} */}
      </div>  )
}
