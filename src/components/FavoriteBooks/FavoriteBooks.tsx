import { useContext } from "react";
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";
import "./FavoriteBooks.scss";

const FavoriteBooks = () => {
  const { favoriteBooks } = useContext(FavoriteContext);

  console.log(favoriteBooks);
  return (
    <div className="favorite-books-container">
      <h2>Favorite Books</h2>
      {favoriteBooks.length > 0 ? (
        <div className="favorite-books-list">
          {favoriteBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              coverId={book.coverId}
              id={book.id}
            />
          ))}
        </div>
      ) : (
        <p>No favorite books yet</p>
      )}
    </div>
  );
};

export default FavoriteBooks;

