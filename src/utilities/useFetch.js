import React, { useEffect, useState } from 'react';

const useFetch = (apiEndPoint) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async (apiEndPoint) => {
      const response = await fetch(apiEndPoint);

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setData(data.response);
      setIsLoading(false);
    };

    fetchApi(apiEndPoint);
  }, []);

  return [isLoading, data];
};

export default useFetch;
