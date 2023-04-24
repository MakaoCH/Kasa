import React from 'react';
import { useParams } from 'react-router-dom';


import Slideshow from '../components/Slideshow/Slideshow';
import data from '../utils/logements.json';

const LocationsList = () => {
  
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id);
  const images = accommodation ? accommodation.pictures : [];

  return (
    <div>
      <Slideshow key={id} id={id} pictures={images}/>
    </div>
  );
};

export default LocationsList;

