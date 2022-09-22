import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, SetIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      console.log("Use Effect Ran");
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data  from this resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          SetIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          SetIsPending(false);
        });
    }, 400);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
