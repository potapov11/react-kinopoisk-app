import { useState, useEffect } from "react";
import { API_Key } from "../constants";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_Key,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  });

  return [data, error];
};

export default useFetch;
