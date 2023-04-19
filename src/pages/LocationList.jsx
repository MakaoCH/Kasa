import React from 'react'
import data from '../utils/logements.json';


const LocationsList = () => {
    return (
      <div className='LocationList'>
        {data.map((location) => (
          <div className='logements' key={location.id}>
            <h2>{location.title}</h2>
            <img src={location.cover} alt={location.title} />
          </div>
        ))}
      </div>
    );
  };

  export default LocationsList;