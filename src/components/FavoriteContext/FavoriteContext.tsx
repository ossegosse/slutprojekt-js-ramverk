import React, { createContext, useState, ReactNode } from "react";

interface Book {
    id: string;
    title: string;
}   

interface FavoriteContextType {
    favoriteBooks: Book[];
    booksRead: Book[];
    setFavoriteBooks: React.Dispatch<React.SetStateAction<Book[]>>;
    setBooksRead: React.Dispatch<React.SetStateAction<Book[]>>; 
    toggleFavorite: (book: Book) => void;
    markAsRead: (book: Book) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
    favoriteBooks: [],
    booksRead: [],
    setFavoriteBooks: () => {},
    setBooksRead: () => {},
    toggleFavorite: () => {},
    markAsRead: () => {},
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
        setBooksRead(prevBooksRead => [...prevBooksRead, book])
    }

    return (
        <FavoriteContext.Provider value={{ favoriteBooks, booksRead, setFavoriteBooks, setBooksRead, toggleFavorite, markAsRead }}>
            {children}
        </FavoriteContext.Provider>
    );
};
