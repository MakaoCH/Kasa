import React from 'react';
import styles from './Gallery.module.css';
import Card from '../Card/Card';

const Gallery = ({ data }) => {
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

