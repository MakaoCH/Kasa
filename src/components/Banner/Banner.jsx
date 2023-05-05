import React from 'react';
import styles from './Banner.module.css';

const Banner = ({ imageUrl }) => {

    return (
        <div >
            <img className={styles.BannerImg} src={imageUrl} alt="Bannière"/> 
        </div>
    );
};

export default Banner;


