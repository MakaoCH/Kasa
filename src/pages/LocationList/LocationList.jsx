import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow';
import Rating from '../../components/Rating/Rating';
import Host from '../../components/Host/Host';
import Tags from '../../components/Tags/Tags';
import Collapse from '../../components/Collapse/Collapse';
import styles from './LocationList.module.css';
import useFetch from '../../utils/useFetch';

const LocationsList = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch('/logements.json');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Quelque chose s'est mal passé...</div>;
  }

  const accommodation = data.find(location => location.id === id);
  console.log(accommodation);

  if (!accommodation) {
    return <Navigate to="/Error" />;
  }

  let host = "";
  if (accommodation && accommodation.host && accommodation.host.name) {
    host = accommodation.host.name;
  }
  
  let pictures = [];
  if (accommodation && accommodation.pictures) {
    pictures = accommodation.pictures;
  }
  
  let title = "";
  if (accommodation && accommodation.title) {
    title = accommodation.title;
  }
  
  let location = "";
  if (accommodation && accommodation.location) {
    location = accommodation.location;
  }
  
  let rating = null;
  if (accommodation && accommodation.rating) {
    rating = parseInt(accommodation.rating);
  }
  
  let tags = [];
  if (accommodation && accommodation.tags) {
    tags = accommodation.tags;
  }
  
  let description = {};
  if (accommodation && accommodation.description) {
    description = accommodation.description;
  }
  
  let equipments = [];
  if (accommodation && accommodation.equipments) {
    equipments = accommodation.equipments;
  }
  
 
  return (
    <div>
      <Slideshow  pictures={pictures} />

      <div className={styles.blockUnderSlide}>
        <div className={styles.titleLocationTag}>
          <h1>{title}</h1>
          <p>{location}</p>
          <Tags 
            tags={tags} />
        </div>

        <div className={styles.ratingHost}>
          {rating && <Rating 
            rating={parseInt(rating)} 
        />}
          <Host 
            name={host} 
            picture={accommodation.host.picture} 
          />

        </div>
      </div>
      
      <div className={styles.collapseLocationList}>
        <Collapse 
          title="Description" 
          content={description} 
        />
        <Collapse 
          title="Equipements" 
          content={equipments.map(equipement => 
          <li className={styles.LiLocationsList} key={equipement}>{equipement}
          </li>)} 
        />
      </div>
    </div>
  );
};

export default LocationsList;