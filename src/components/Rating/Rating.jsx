import React from 'react';
import styles from './Rating.module.css';

const Rating = ({ rating }) => {
  const numberStars = 5;
  const stars = [];

  for (let i = 1; i <= numberStars; i++) {
    const starClass = i <= rating ? styles['star-red'] : styles['star'];
    stars.push(<span key={i} className={`${styles['star']} ${starClass}`}>★</span>);
  }

  return (
    <div className={styles.starContainer}>
      {stars}
    </div>
  );
};

export default Rating;
