import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';
import data from '../utils/logements.json';
import Rating from '../components/Rating/Rating';

const LocationsList = () => {
  
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id);
  const images = accommodation ? accommodation.pictures : [];
  const title = accommodation ? accommodation.title : "";
  const location = accommodation ? accommodation.location : "";
  const rating = accommodation ? parseInt(accommodation.rating) : null;

  return (
    <div>
      <Slideshow key={id} id={id} pictures={images} />
      <h1>{title}</h1>
      <p>{location}</p>
      {rating && <Rating rating={rating} />}
    </div>
  );
};

export default LocationsList;


