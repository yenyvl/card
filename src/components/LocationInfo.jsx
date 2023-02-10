import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({location}) => {
  return (
    <section className='locationInfo'>
        <h2 className='locationInfo__title'> 
          {location?.name}         
        </h2>
        <ul className='locationInfo__info'>
          <li className='locationInfo__items'>
            <span>Type: </span>
            {location?.type}
          </li>
          <li className='locationInfo__items'>
            <span>Dimension: </span>
            {location?.dimension}
          </li>
          <li className='locationInfo__items'>
            <span>Population: </span>
            {location?.residents.length}
          </li>
        </ul>
      </section>
  )
}

export default LocationInfo