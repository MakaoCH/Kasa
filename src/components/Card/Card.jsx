import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/AccommodationList/${id}`} className={styles.card}>
      <img className={styles.cardImg} src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
};

export default Card;
