import { useContext } from "react";
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";
import "./FavoriteBooks.scss";

const FavoriteBooks = () => {
  const { favoriteBooks } = useContext(FavoriteContext);

  console.log(favoriteBooks);
  return (
    <div>
      {favoriteBooks.length > 0 ? (
        <div className="books-container">
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

