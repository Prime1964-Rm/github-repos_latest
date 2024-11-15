import { useEffect, useState } from "react";
import React from "react";

function useFetch<T = any>(url: string, init?: RequestInit) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        let result = await fetch(url, init);
        let parsedResult = await result.json();
        if (result.status === 200) {
          setData(parsedResult);
          setLoading(false);
        }
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url, init]);
  return { data, error, loading };
}

export default useFetch;
