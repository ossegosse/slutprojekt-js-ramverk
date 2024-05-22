import BookDetails from "../components/BookDetails/BookDetails";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const BookInfo = () => {
  return (
    <div className="bookinfo-container">
      <div className="back-icon">
        <Link to="/">
          <IoReturnDownBack />
        </Link>
      </div>

      <BookDetails />
    </div>
  );
};

export default BookInfo;
