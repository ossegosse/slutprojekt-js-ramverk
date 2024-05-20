import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoriteContext } from "../components/FavoriteContext/FavoriteContext"; // Uppdatera sökvägen beroende på din filstruktur

interface Book {
  id: string;
  title: string;
  author: string[];
  coverId: string;
/*   description: string;
  genre: string[];
  publishDate: string; */
  // Lägg till andra relevanta egenskaper här om det behövs
}

const BookInfo = () => {
  const { id } = useParams();
  const { favoriteBooks, booksRead, toggleFavorite, markAsRead } = useContext(FavoriteContext);
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    // Här kan du hämta bokinformation från en API eller lokal lagring beroende på dina behov
    // I det här exemplet antar jag att du har informationen i contexten redan
    const selectedBook = favoriteBooks.find((book: Book) => book.id === id);
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      console.log("Book not found in favorites, checking books read...");
      const readBook = booksRead.find((book: Book) => book.id === id);
      if (readBook) {
        setBook(readBook);
      } else {
        console.log("Book not found in books read either, fetching book details from API...");
        // Hämta bokdetaljer från API:et och sätt bokobjektet
      }
    }
  }, [id, favoriteBooks, booksRead]);

  const handleToggleFavorite = () => {
    if (book) {
      toggleFavorite(book);
    }
  };

  const handleMarkAsRead = () => {
    if (book) {
      markAsRead(book);
    }
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>Authors: {book.author.join(", ")}</p>
      <p>Description: {book.description}</p>
      <p>Genre: {book.genre.join(", ")}</p>
      <p>Publish Date: {book.publishDate}</p>
      <img src={`https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`} alt="Book Cover" />
      {/* Lägg till knappar för att markera som favorit och markera som läst */}
      <button onClick={handleToggleFavorite}>{favoriteBooks.some(b => b.id === book.id) ? "Remove from Favorites" : "Add to Favorites"}</button>
      <button onClick={handleMarkAsRead}>{booksRead.some(b => b.id === book.id) ? "Mark as Unread" : "Mark as Read"}</button>
    </div>
  );
};

export default BookInfo;
