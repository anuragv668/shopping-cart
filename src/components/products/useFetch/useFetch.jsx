import {useEffect, useState } from "react";

function useFetch (api) {

  const [item, setItem] = useState({
    products: null,
    error: null,
    loading: true,
  });

  const setLoading = (value) => {
    setItem((prev) => ({
      ...prev,
      loading: value 
    }));
  }

  const setError = (value) => {
    setItem((prev) => ({
      ...prev,
      error: value
    }))
  }

  const setProduct = (value) => {
    setItem((prev) => ({
      ...prev,
      products: value
    }))
  }


  useEffect(() => {
    async function fetchData () {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setProduct(data);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  },[api]);
  
  return item;
 
}

export default useFetch;
