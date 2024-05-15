import { useEffect, useState, useContext } from "react";
import { useParams} from "react-router-dom";
import { SearchContext } from "../components/searchContext.tsx/SearchContext";

interface Book {
  id: string;
  title: string;
  author: string[];
  coverId: string;
  // Lägg till andra relevanta egenskaper här om det behövs
}

const BookInfo = () => {
  const { id } = useParams();
  const { searchResults } = useContext(SearchContext);
  const [book, setBook] = useState<Book | null>(null);
  

  useEffect(() => {
    // Kontrollera om sökresultaten är satta innan du fortsätter
    if (!searchResults || searchResults.length === 0) {
      // Om sökresultaten inte är satta, navigera tillbaka till startsidan eller annan lämplig sida
      console.log("Search results not found, redirecting...");
      
      return; // Avbryt körningen av useEffect
    }

    // Hitta boken med matchande ID från URL:en i sökresultaten
    const selectedBook = searchResults.find((book: Book) => book.id === id);
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      console.log("Book not found in search results, redirecting...");
      
    }
  }, [searchResults, id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>Authors: {book.author.join(", ")}</p>
      <img src={`https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`} alt="Book Cover" />
      {/* Lägg till annan relevant information om boken */}
    </div>
  );
};

export default BookInfo;
