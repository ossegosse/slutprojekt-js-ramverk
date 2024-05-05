import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../searchContext.tsx/SearchContext";
import "./Searchbar.scss"

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { setSearchResults } = useContext(SearchContext); // Hämta setSearchResults från din context

  const fetchData = (value: string) => {
    setLoading(true);
    fetch(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`)
      .then((res) => res.json())
      .then((json) => {
        if (json.docs && Array.isArray(json.docs)) {
          const results = json.docs.map((book) => ({
            id: book.key,
            title: book.title,
            authors: book.author_name,
            coverId: book.cover_i,
          }));
          console.log(results);
          setSearchResults(results); // Uppdatera sökresultaten med din context
        } else {
          console.error("invalid data format recieved");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (input.trim() !== "") {
      fetchData(input);
    } else {
      setSearchResults([]); // Återställ sökresultaten till tom när input är tom
    }
  }, [input]);

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <div>
      <input
        className="searchbar"
        type="search"
        placeholder="search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
