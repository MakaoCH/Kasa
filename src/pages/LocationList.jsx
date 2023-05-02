import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';
import Rating from '../components/Rating/Rating';
import Host from '../components/Host/Host';
import Tags from '../components/Tags/Tags';
import Collapse from '../components/Collapse/Collapse';
import styles from './LocationList.module.css';
import useFetch from '../utils/useFetch';

const LocationsList = () => {
  const { id } = useParams();
  const { data } = useFetch(`/logements.json`);
  console.log(data);
  const accommodation = data.find(LocationsList => LocationsList.id === id) || {};
  

  const { host = "", pictures = [], title = "", location = "", rating = null, tags = [], description = {}, equipments = [] } = accommodation;

  return (
    <div>
      <Slideshow  pictures={pictures} />

      <div className={styles.blockUnderSlide}>
        <div className={styles.titleLocationTag}>
          <h1>{title}</h1>
          <p>{location}</p>
          <Tags tags={tags} />
        </div>

        <div className={styles.ratingHost}>
          {rating && <Rating rating={parseInt(rating)} />}
          <Host name={host.name} picture={host.picture} />
        </div>
      
      </div>
      
      <div className={styles.collapseLocationList}>
        <Collapse title="Description" content={description} />
        <Collapse title="Equipements" content={equipments.map(equipement => <li key={equipement}>{equipement}</li>)} />
      </div>

    </div>
  );
};

export default LocationsList;





