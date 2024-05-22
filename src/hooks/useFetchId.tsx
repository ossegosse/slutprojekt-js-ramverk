/* import { useEffect, useState } from "react";

const useFetchId = (id: string) => {
  const [bookData, setBookData] = useState<any>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchId = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchId();

    return () => {
      setBookData(null);
    };
  }, [id]);

  return bookData;
};

export default useFetchId; */


import { useEffect, useState } from "react";
import { Book } from "../Types/types"; // Anpassa sökvägen till där du sparar dina typer

const useFetchId = (id: string) => {
  const [bookData, setBookData] = useState<Book | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchId = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }
        const data = await response.json();

        // Hantera författardata korrekt
        const authors = data.authors ? await Promise.all(data.authors.map(async (authorObj: any) => {
          const authorResponse = await fetch(`https://openlibrary.org${authorObj.author.key}.json`);
          const authorData = await authorResponse.json();
          return authorData.name;
        })) : [];

        const book: Book = {
          id: data.key,
          title: data.title,
          author: authors,
          coverId: data.covers ? data.covers[0] : undefined,
          description: data.description ? (typeof data.description === 'string' ? data.description : data.description.value) : undefined,
          excerpt: data.excerpts ? data.excerpts[0].text : undefined,
          review: undefined, 
          rating: undefined, 
          publishDate: data.created ? new Date(data.created.value).toISOString().split('T')[0] : undefined
        };

        setBookData(book);
      } catch (error) {
        console.error(error);
      }
    };

    fetchId();

    return () => {
      setBookData(null);
    };
  }, [id]);

  return bookData;
};

export default useFetchId;

