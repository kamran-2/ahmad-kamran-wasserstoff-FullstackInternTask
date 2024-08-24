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
      </div>  )
}
