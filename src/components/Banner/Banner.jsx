import React from 'react';
import styles from './Banner.module.css';

const BannerComponent = ({ imageUrl }) => {

    return (
        <div >
            <img className={styles.BannerImg} src={imageUrl} alt="Bannière"/> 
        </div>
    );
};

export default BannerComponent;


