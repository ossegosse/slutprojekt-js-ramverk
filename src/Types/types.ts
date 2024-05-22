

export interface BookCardProps {
    title: string;
    author: string[];
    coverId?: number;
    id: string;
  }

  export interface Book {
    id: string;
    title: string;
    author: string[];
    coverId?: number;
    review?: string;
    rating?: number;
    description?: string;
    genre?: string[];
    publishDate?: string;
    excerpt?: string;
}

export interface FavoriteContextType {
    favoriteBooks: Book[];
    booksRead: Book[];
    setFavoriteBooks: React.Dispatch<React.SetStateAction<Book[]>>;
    setBooksRead: React.Dispatch<React.SetStateAction<Book[]>>; 
    toggleFavorite: (book: Book) => void;
    markAsRead: (book: Book) => void;
    addReview: (id: string, review: string, rating: number) => void;
}

