import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Banner.module.css';
import bannerAccueil from '../../assets/Banner.png';
import bannerApropos from '../../assets/Banner-about.png';

const BannerComponent = () => {
    const location = useLocation();
    const activePage = location.pathname;

    const showBanner = activePage === '/' || activePage === '/Apropos';
    const imageUrl = activePage === '/'
        ? bannerAccueil
        : bannerApropos;

        
    return (
        <div>
            { showBanner && (
                <div className={styles.Banner}>
                    <img className={styles.BannerImg} src={imageUrl} alt="Bannière"/>
                    {activePage === '/' && <span className={styles.BannerText}>Chez vous, <br className={styles.Break} /> partout et ailleurs</span>}
                </div>
            )}
        </div>
    );
};

export default BannerComponent;


