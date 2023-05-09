import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import useFetch from '../../utils/useFetch';
import bannerAccueil from '../../assets/Banner.png';
import Banner from '../../components/Banner/Banner';
import styles from './Home.module.css';

const HomePage = () => {
  
  const { data, error, isLoading } = useFetch("./logements.json");
  return (
    <div>

      <div className={styles.Banner}>
          <Banner imageUrl={bannerAccueil} />
            <span className={styles.BannerText}>Chez vous, <br className={styles.Break} /> partout et ailleurs</span>
      </div>
      
      <Gallery
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
};

export default HomePage;
