import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import useFetch from '../utils/useFetch';

const HomePage = () => {
  
  const { data, hasError, isLoading } = useFetch("./logements.json");
  return (
    <div><Gallery
      data={data}
      hasError={hasError}
      isLoading={isLoading}
      />
    </div>
  );
};

export default HomePage;
