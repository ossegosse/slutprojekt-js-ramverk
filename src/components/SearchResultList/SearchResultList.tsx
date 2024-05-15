import { useContext } from "react";
import { SearchContext } from "../searchContext.tsx/SearchContext"; 
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";

const SearchResultList = () => {
  const { searchResults } = useContext(SearchContext);
  const { toggleFavorite, markAsRead } = useContext(FavoriteContext);

  return (
    <div className="books-container">
      {searchResults && searchResults.map((book, index) => (
        <div key={index}>
          <BookCard
            key={index}
            title={book.title}
            author={Array.isArray(book.author) ? book.author : []}
            coverId={book.coverId ?? undefined}
            id={book.id}
          />
          <button onClick={() => toggleFavorite(book)}>Favorite</button>
          <button onClick={() => markAsRead(book)}>Have read</button>
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;



