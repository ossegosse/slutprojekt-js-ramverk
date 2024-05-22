import React, { createContext, useState, ReactNode } from "react";
import { Book, FavoriteContextType } from "../../Types/types"

export const FavoriteContext = createContext<FavoriteContextType>({
    favoriteBooks: [],
    booksRead: [],
    setFavoriteBooks: () => {},
    setBooksRead: () => {},
    toggleFavorite: () => {},
    markAsRead: () => {},
    addReview: () => {},
});

export const FavoriteContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
    const [booksRead, setBooksRead] = useState<Book[]>([]);

    const toggleFavorite = (book: Book) => {
        const isFavorite = favoriteBooks.some(favoriteBook => favoriteBook.id === book.id);
        if (isFavorite) {
            setFavoriteBooks(prevFavorites => prevFavorites.filter(favoriteBook => favoriteBook.id !== book.id));
        } else {
            setFavoriteBooks(prevFavorites => [...prevFavorites, book]);
        }
    };

    const markAsRead = (book: Book) => {
        const isAlreadyRead = booksRead.some(readBook => readBook.id === book.id);
        if (!isAlreadyRead) {
            setBooksRead(prevBooksRead => [...prevBooksRead, book]);
        }
    };

    const addReview = (id: string, review: string, rating: number) => {
        setBooksRead(prevBooksRead => 
            prevBooksRead.map(book => 
                book.id === id ? { ...book, review, rating } : book
            )
        );
    };

    return (
        <FavoriteContext.Provider value={{ favoriteBooks, booksRead, setFavoriteBooks, setBooksRead, toggleFavorite, markAsRead, addReview }}>
            {children}
        </FavoriteContext.Provider>
    );
};
