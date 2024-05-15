
import { useContext } from "react"
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";

const BookReview = () => {
  const { booksRead } = useContext(FavoriteContext)
  console.log(booksRead)

  return (
    <div>
       {booksRead.length > 0 ? (
        <div className="favorite-books-list">
          {booksRead.map((book, index) => ( // Korrekt användning av map-parametrar
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
        <p>No books marked as read</p>
      )}
      <h2>Book review</h2>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Write your review..."
      ></textarea>
      <div>
        <label>Rating:</label>
        <select>
          <option value={0}>Select rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
    </div>
  );
};

export default BookReview;
