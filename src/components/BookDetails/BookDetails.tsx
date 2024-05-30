import "./BookDetails.scss";
import { useParams } from 'react-router-dom';
import useFetchId from "../../hooks/useFetchId";
import Loader from "../Loader/Loader";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>Error: No ID provided</div>;
  }
  const bookData = useFetchId(id);

  if (!bookData) {
    return <div><Loader /></div>;
  }

  return (
    <div className="book-details-container">
        {bookData.coverId && (
        <img src={`https://covers.openlibrary.org/b/id/${bookData.coverId}-L.jpg`} alt={`${bookData.title} cover`} />
      )}
      <div className="book-details">
      <h1>{bookData.title}</h1>
      <p>by {bookData.author.join(", ")}</p>
      
      {bookData.description && (
        <div>
          <h3>Description:</h3>
          <p>{bookData.description}</p>
        </div>
      )}
      {bookData.excerpt && (
        <div>
          <h3>Excerpt:</h3>
          <p>{bookData.excerpt}</p>
        </div>
      )}
      {bookData.publishDate && (
        <div>
          <h3>Publish Date:</h3>
          <p>{bookData.publishDate}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default BookDetails;

