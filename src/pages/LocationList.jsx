import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';
import data from '../utils/logements.json';
import Rating from '../components/Rating/Rating';
import Host from '../components/Host/Host';
import Tags from '../components/Tags/Tags';

const LocationsList = () => {
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id) || {};
  const { pictures = [], title = "", location = "", rating = null, tags = [] } = accommodation;
  const hostData = accommodation.host || {};

  return (
    <div>
      <Slideshow key={id} id={id} pictures={pictures} />
      <h1>{title}</h1>
      <p>{location}</p>
      <Tags tags={tags} />
      {rating && <Rating rating={parseInt(rating)} />}
      <Host name={hostData.name} picture={hostData.picture} />
      
    </div>
  );
};

export default LocationsList;




