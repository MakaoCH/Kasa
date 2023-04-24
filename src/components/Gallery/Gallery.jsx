import React from 'react';
import data from '../../utils/logements.json';
import styles from './Gallery.module.css';
import Card from '../Card/Card';

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      {data.map((item) => (
        <Card 
          key={item.id} 
          id={item.id}
          title={item.title}
          cover={item.cover}
          
        />
      ))}
    </div>
  );
};

export default Gallery;
