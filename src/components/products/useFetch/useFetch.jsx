import {useEffect, useState } from "react";

function useFetch (api) {

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
  
  return {product, error, loading};
 
}

export default useFetch;
