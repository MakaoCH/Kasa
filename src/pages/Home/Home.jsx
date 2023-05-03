import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import useFetch from '../../utils/useFetch';

const HomePage = () => {
  
  const { data, error, isLoading } = useFetch("./logements.json");
  return (
    <div><Gallery
      data={data}
      error={error}
      isLoading={isLoading}
      />
    </div>
  );
};

export default HomePage;
