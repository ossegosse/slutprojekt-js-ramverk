import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../components/searchContext.tsx/SearchContext";

const BookInfo = () => {
  const { id } = useParams();
  const { searchResults } = useContext(SearchContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const selectedBook = searchResults.find(book => book.id === id);
    setBook(selectedBook);
  }, [searchResults, id]);

  return (
    <div className="book-detail">
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>Authors: {book.author_name.join(", ")}</p>
          <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Book Cover" />
          {/* Lägg till annan relevant information om boken */}
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default BookInfo;

