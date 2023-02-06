import { useState, useEffect } from "react";

export function useFetch(url) {
  const [fetchData, setFetchData] = useState({});

  const [isFetchLoading, setFetchLoading] = useState(true);

  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setFetchLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);

        const data = await response.json();

        console.log('fetchData : ', data);
        setFetchData(data);
      } catch (err) {
        console.log(err);

        setFetchError(true);
      } finally {
        setFetchLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { isFetchLoading, fetchData, fetchError };
}
