import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import "./Searchbar.scss";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const { fetchData, loading } = useFetchData();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== "") {
      fetchData(input);
    } else {
      setSearchResults([]);
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit}>
        <input
          className="searchbar"
          type="search"
          placeholder="author, title..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;


/* import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../searchContext.tsx/SearchContext";
import "./Searchbar.scss"

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { setSearchResults } = useContext(SearchContext); // Hämta setSearchResults från din context

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
  
  const handleSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== "") {
      fetchData(input)
    } else {
      setSearchResults([])
    }
  }

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit}> 
      <input
        className="searchbar"
        type="search"
        placeholder="author, title..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit">Search</button>
      </form>
      {loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
    </div>
  );
};

export default Searchbar; */

