import React from 'react';
import styles from './Rating.module.css';
import starRed from '../../assets/star-red.png';
import starGrey from '../../assets/star-grey.png';

const Rating = ({ rating }) => {
  const numberStars = 5;
  const stars = [];

  for (let i = 1; i <= numberStars; i++) {
    const starImage = i <= rating ? starRed : starGrey;
    stars.push(<span key={i} className={styles.star}><img src={starImage} alt="star" /></span>);

  }

  return (
    <div className={styles.starContainer}>
      {stars}
    </div>
  );
};

export default Rating;
