import { useContext } from "react";
import { SearchContext } from "../searchContext.tsx/SearchContext"; 
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";

const SearchResultList = () => {
  const { searchResults } = useContext(SearchContext);
  const { toggleFavorite, markAsRead } = useContext(FavoriteContext); // Hämta både toggleFavorite och markAsRead från FavoriteContext

  return (
    <div className="books-container">
      {searchResults && searchResults.map((book, index) => (
        <div key={index}>
          <BookCard
            key={index}
            title={book.title}
            author={Array.isArray(book.author) ? book.author : []}
            coverId={book.coverId}
            id={book.id}
          />
          {/* Skicka bok-ID till toggleFavorite och markAsRead istället för hela boken */}
          <button onClick={() => toggleFavorite(book.id)}>Favorite</button>
          <button onClick={() => markAsRead(book.id)}>Have read</button>
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;


