import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (err) {
        setHasError(true);
      
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { isLoading, data, hasError };
}

export default useFetch;
