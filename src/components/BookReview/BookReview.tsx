import { useContext, useState } from "react";
import { FavoriteContext } from "../FavoriteContext/FavoriteContext";
import BookCard from "../BookCard/BookCard";
import "./BookReview.scss";

const BookReview = () => {
  const { booksRead, addReview } = useContext(FavoriteContext);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const selectedBook = booksRead.find((book) => book.id === selectedBookId);

  const handleSaveReview = () => {
    if (selectedBookId) {
      addReview(selectedBookId, reviewText, rating);
      setReviewText("");
      setRating(0);
      setSelectedBookId(null);
      setIsModalOpen(false); // Stäng modalen efter att recensionen har sparats
    }
  };

  return (
    <div>
      {booksRead.length > 0 ? (
        <div className="favorite-books-list">
          {booksRead.map((book, index) => (
            <div>
              <BookCard
                key={index}
                title={book.title}
                author={book.author}
                coverId={book.coverId}
                id={book.id}
              />
              <div className="review-container">
                {book.review && (
                  <div>
                    <h3>Review:</h3>
                    <p>{book.review}</p>
                  </div>
                )}
                {book.rating && (
                  <div>
                    <h3>Rating:</h3>
                    <p>{book.rating}/5</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedBookId(book.id);
                  setIsModalOpen(true);
                }}
              >
                Create Review
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No books marked as read</p>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="review-modal">
            <h2>Book review</h2>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Write your review..."
            ></textarea>
            <div>
              <label>Rating:</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                <option value={0}>Select rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <button onClick={handleSaveReview}>Save Review</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookReview;
