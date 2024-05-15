import { useEffect, useState } from "react";

const useFetchId = (id: string) => {
  const [bookData, setBookData] = useState<any>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchId = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchId();

    return () => {
      setBookData(null);
    };
  }, [id]);

  return bookData;
};

export default useFetchId;
