import { useState, useEffect } from "react";

interface data {
    id: number;
    title: string;
    author: string;
    coverId: number;
  }

const useFetch = (url: string) => {
  const [data, setData] = useState<data[] | null>(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;