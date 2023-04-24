import React, { useState } from 'react';
import styles from './Slideshow.module.css';


const Slideshow = ({ pictures }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = pictures ? pictures : [];


  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideWrapper}>
        {images.map((image, index) => (
          <img
            key={index}
            className={`${styles.slide} ${index === currentImage ? styles.active : ''}`}
            src={image}
            alt=""
          />
        ))}
        {images.length > 1 &&
          <>
            <div className={`${styles.slideArrow} ${styles.left}`} onClick={prevImage}>{'<'}</div>
            <div className={`${styles.slideArrow} ${styles.right}`} onClick={nextImage}>{'>'}</div>
            <div className={styles.slideNumber}>{currentImage + 1}/{images.length}</div>
          </>
        }
      </div>
    </div>
  );
  
};

export default Slideshow;

