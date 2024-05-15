import "./BookCard.scss";
import useFetchId from "../../hooks/useFetchId";

interface BookCardProps {
  title: string;
  author: string[];
  coverId?: number;
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, coverId, id }) => {
  const bookData = useFetchId(id);
  console.log(id)
  if (!id) {
    return <div>Loading...</div>;
  }

  if (!bookData) {
    return <div>Loading...</div>;
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

/* import React, { useEffect, useState } from "react";
import "./BookCard.scss"

interface BookProps {
  id?: string;
  title?: string;
  author?: string[];
  coverId?: number;
}

const BookCard: React.FC<BookProps> = ({ id, title, author, coverId }) => {
  const [bookData, setBookData] = useState<any>(null);

  useEffect(() => {
    // Om id är undefined, returnera från funktionen för att undvika API-anrop
    if (!id) {
      return;
    }

    const fetchBookData = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }
        const data = await response.json();
        console.log("Data received:", data);
        setBookData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookData();

    return () => {
      setBookData(null);
    };
  }, [id]);

  if (!id) {
    return <div>Loading...</div>;
  }

  if (!bookData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card-banner">
        <img
          src={
            bookData.covers && bookData.covers.length > 0
              ? `https://covers.openlibrary.org/b/id/${bookData.covers[0]}-L.jpg`
              : "https://dummyimage.com/180x190/dedede/3b3b3b&text=Image+Not+Available"
          }
          alt="Book Cover"
        />
      </div>
      <h3>{bookData.title}</h3>
      <div className="card-footer">
        <span>
          Authors:{" "}
          <span className="author-name">
            {author && author.join(", ")}
          </span>
        </span>
      </div>
    </div>
  );
};

export default BookCard;

 */