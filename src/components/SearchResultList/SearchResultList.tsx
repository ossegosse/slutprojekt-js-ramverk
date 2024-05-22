import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../searchContext.tsx/SearchContext";
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";
import FavoriteBtn from "../Btn/FavoriteBtn/FavoriteBtn";
import ReadBtn from "../Btn/ReadBtn/ReadBtn";
import { Book } from "../../Types/types"
import "../Btn/Btn.scss";

const SearchResultList = () => {
  const { searchResults } = useContext(SearchContext);
  const { toggleFavorite, markAsRead, favoriteBooks } =
    useContext(FavoriteContext);

  const [favoritesMap, setFavoritesMap] = useState(new Map());

  useEffect(() => {
    const newFavoritesMap = new Map();
    favoriteBooks.forEach((book) => {
      newFavoritesMap.set(book.id, true);
    });
    setFavoritesMap(newFavoritesMap);
  }, [favoriteBooks]);

  const isFavorite = (bookId: string) => {
    return favoritesMap.get(bookId) || false;
  };

  const handleToggleFavorite = (book: Book) => {
    toggleFavorite(book);
    const newFavoritesMap = new Map(favoritesMap);
    newFavoritesMap.set(book.id, !isFavorite(book.id));
    setFavoritesMap(newFavoritesMap);
  };

  return (
    <div className="books-container">
      {searchResults &&
        searchResults.map((book) => (
          <div>
              <BookCard
                title={book.title}
                author={Array.isArray(book.author) ? book.author : []}
                coverId={book.coverId ?? undefined}
                id={book.id}
              />
            
            <div className="icons-container">
              <FavoriteBtn
                isFavorite={isFavorite(book.id)}
                onToggle={() => handleToggleFavorite(book)}
              />
              <ReadBtn onMarkAsRead={() => markAsRead(book)} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchResultList;
