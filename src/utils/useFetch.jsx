import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
    
        setData(data);
      } catch (err) {
        setError(true);
      
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}

export default useFetch;
