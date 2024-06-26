import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import "./Searchbar.scss";
import Loader from "../Loader/Loader";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const { fetchData, loading } = useFetchData();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== "") {
      fetchData(input);
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
        <Loader/>
      )}
    </div>
  );
};

export default Searchbar;



