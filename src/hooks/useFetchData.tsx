import { useState, useContext } from "react";
import { SearchContext } from "../components/searchContext.tsx/SearchContext";


const useFetchData = () => {
  const { setSearchResults } = useContext(SearchContext); // Hämta setSearchResults från din context
  const [loading, setLoading] = useState(false);

  const fetchData = (value: string) => {
    setLoading(true);
    fetch(`https://openlibrary.org/search.json?q=${value}&limit=12`)
      .then((res) => res.json())
      .then((json) => {
        if (json.docs && Array.isArray(json.docs)) {
          const results = json.docs.map((book) => ({
            id: book.key.split("/").pop(),
            title: book.title,
            author: book.author_name || [],
            coverId: book.cover_i,
          }));
          console.log(results);
          setSearchResults(results);
        } else {
          console.error("invalid data format received");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  return { fetchData, loading };
};

export default useFetchData;
