import { useContext } from "react"
import { FavoriteContext } from "../FavoriteContext/FavoriteContext"
import BookCard from "../BookCard/BookCard"
import "./FavoriteBooks.scss"

const FavoriteBooks = () => {
    const { favoriteBooks } = useContext(FavoriteContext)

    console.log(favoriteBooks)
    return (
    <div className="favorite-books-container">
      <h2>Favorite Books</h2>
      {favoriteBooks.length > 0 ? (
        <div className="favorite-books-list">
          {favoriteBooks.map((book, index) => ( // Korrekt användning av map-parametrar
            <BookCard
              key={index} // Du kan behålla nyckeln som index om varje bok är unik
              title={book.title}
              id={book.id}
            />
          ))}
        </div>
      ) : (
        <p>No favorite books yet</p>
      )}
    </div>
  );
}

export default FavoriteBooks