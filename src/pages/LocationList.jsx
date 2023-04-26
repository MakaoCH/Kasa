import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';
import data from '../utils/logements.json';
import Rating from '../components/Rating/Rating';
import Host from '../components/Host/Host';
import Tags from '../components/Tags/Tags';
import Collapse from '../components/Collapse/Collapse';
import styles from './LocationList.module.css'

const LocationsList = () => {
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id) || {};
  const { pictures = [], title = "", location = "", rating = null, tags = [], description = {}, equipments = [] } = accommodation;
  const hostData = accommodation.host || {};

  return (
    <div>
      <Slideshow key={id} id={id} pictures={pictures} />

      <div className={styles.blockUnderSlide}>
        <div className={styles.titleLocationTag}>
          <h1>{title}</h1>
          <p>{location}</p>
          <Tags tags={tags} />
        </div>

        <div className={styles.ratingHost}>
          {rating && <Rating rating={parseInt(rating)} />}
          <Host name={hostData.name} picture={hostData.picture} />
        </div>
      
      </div>
      
      <div className={styles.collapseLocationList}>
        <Collapse titleClassName={styles.title} contentClassName={styles.content} title="Description" content={description} />
        <Collapse titleClassName={styles.title} contentClassName={styles.content} title="Equipements" content={equipments.map(equipement => <li key={equipement}>{equipement}</li>)} />
      </div>

    </div>
  );
};

export default LocationsList;




