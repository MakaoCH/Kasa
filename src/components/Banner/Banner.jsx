import React from 'react';
import { useLocation } from 'react-router-dom';
import bannerAccueil from '../../assets/Banner.png';
import bannerApropos from '../../assets/Banner-about.png';

const Banner = () => {
  const location = useLocation();
  const activePage = location.pathname;

  const imageUrl = activePage === '/'
    ? bannerAccueil
    : bannerApropos;

  return (
    <div className='Banner'>
      <img className='BannerImg' src={imageUrl} alt="Bannière"/>
      {activePage === '/' && <span className='BannerText'>Chez vous, partout et ailleurs</span>}
    </div>
  );
};

export default Banner;

