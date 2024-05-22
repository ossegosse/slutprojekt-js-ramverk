import "./BookCard.scss";
import useFetchId from "../../hooks/useFetchId";
import Loader from "../Loader/Loader";
import { BookCardProps } from "../../Types/types"

const BookCard: React.FC<BookCardProps> = ({ title, author, coverId, id }) => {
  const bookData = useFetchId(id);

  console.log(id)
  if (!id) {
    return <Loader/>

  }

  if (!bookData) {
    return <Loader/>
  }

  return (
    <div className="card">
      <div className="card-banner">
        <img
          src={
            coverId
              ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
              : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
          }
          alt="Book Cover"
        />
      </div>
      <h3>{title}</h3>
      <div className="card-footer">
  {author && author.length > 0 ? (
    <span>
      Author:{" "}
      <span className="author-name">
        {author.join(", ")}
      </span>
    </span>
  ) : (
    <span className="author-name">Unknown</span>
  )}
</div>
    </div>
  );
};

export default BookCard;

