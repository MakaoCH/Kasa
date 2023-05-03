import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';
import Rating from '../components/Rating/Rating';
import Host from '../components/Host/Host';
import Tags from '../components/Tags/Tags';
import Collapse from '../components/Collapse/Collapse';
import styles from './LocationList.module.css';
import useFetch from '../utils/useFetch';

const LocationsList = () => {
  const { id } = useParams();
  const { data  } = useFetch('/logements.json');
  const navigate = useNavigate();

  const accommodation = data.find(LocationsList => LocationsList.id === id) || {};
  console.log(accommodation);

  const { host = "", pictures = [], title = "", location = "", rating = null, tags = [], description = {}, equipments = [] } = accommodation;

  useEffect(() => {
    if (accommodation.id === null) {
      navigate('/Error');
    }
    }, [accommodation.id, navigate]);
  
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
            name={host.name} 
            picture={host.picture} 
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







