import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function useFetch(url) {
  const [fetchData, setFetchData] = useState({
    data: [],
    isLoad: true,
    error: false,
  });

  const fetchDataFun = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      if (data) {
        setFetchData({
          data: data.results ? data.results : data,
          isLoad: false,
          error: false,
        });
      }
    } catch (error) {
      console.log("Error: 404;", error);
      setFetchData({
        data: [],
        isLoad: false,
        error: true,
      });
    }
  }, [url]);

  useEffect(() => {
    fetchDataFun(url);
  }, [url]);

  // console.log(url);
  const { data, isLoad, error } = fetchData;
  return { data, isLoad, error };
}

export default useFetch;
