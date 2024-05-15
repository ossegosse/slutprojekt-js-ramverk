/* import { useContext} from "react";
import { SearchContext } from "../searchContext.tsx/SearchContext"; 
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";
import { MdFavoriteBorder, MdFavorite} from "react-icons/md";


const SearchResultList = () => {
  const { searchResults } = useContext(SearchContext);
  const { toggleFavorite, markAsRead} = useContext(FavoriteContext);

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
         
          <MdFavoriteBorder 
          onClick={() => toggleFavorite(book)}
          
          />
          <button onClick={() => markAsRead(book)}>Have read</button>
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;

 */

import { useState, useContext } from "react";
import { SearchContext } from "../searchContext.tsx/SearchContext"; 
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const SearchResultList = () => {
  const { searchResults } = useContext(SearchContext);
  const { toggleFavorite, markAsRead, favoriteBooks } = useContext(FavoriteContext);
  
  const [favoritesMap, setFavoritesMap] = useState(new Map());
  
  // Uppdatera favoritesMap baserat på favoriteBooks när komponenten laddas
  useState(() => {
    const newFavoritesMap = new Map();
    favoriteBooks.forEach(book => {
      newFavoritesMap.set(book.id, true);
    });
    setFavoritesMap(newFavoritesMap);
  }, [favoriteBooks]);

  const isFavorite = (bookId: string) => {
    return favoritesMap.get(bookId) || false;
  };

  const handleToggleFavorite = (book) => {
    toggleFavorite(book);
    const newFavoritesMap = new Map(favoritesMap);
    newFavoritesMap.set(book.id, !isFavorite(book.id));
    setFavoritesMap(newFavoritesMap);
  };

  return (
    <div className="books-container">
      {searchResults && searchResults.map((book, index) => (
        <div  className="card">
          <div className="icons-container">
          {isFavorite(book.id) ? (
            <MdFavorite onClick={() => handleToggleFavorite(book)} className="favorite-icon"/>
          ) : (
            <MdFavoriteBorder onClick={() => handleToggleFavorite(book)} className="favorite-icon"/>
          )}
          <button onClick={() => markAsRead(book)}>Have read</button>
          </div>
          <BookCard
            key={index}
            title={book.title}
            author={Array.isArray(book.author) ? book.author : []}
            coverId={book.coverId ?? undefined}
            id={book.id}
          />
          
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
