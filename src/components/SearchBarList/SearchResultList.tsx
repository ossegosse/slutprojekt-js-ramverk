import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../searchContext.tsx/SearchContext"; 
import Book from "../Book/Book";

const SearchResultList = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <div className="books-container">
      {searchResults.map((book, index) => (
        <Link to={`/bookinfo/${book.id}`} key={index} style={{ textDecoration: "none" }}>
          <Book
            key={index}
            id={book.id}
            title={book.title}
            author={book.author_name && book.author_name.join(", ")}
            coverId={book.cover_i}
          />
        </Link>
      ))}
    </div>
  );
};

export default SearchResultList;


