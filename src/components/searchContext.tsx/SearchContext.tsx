import { createContext, useState, ReactNode } from "react";

interface SearchContextType {
  searchResults: any[];
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
}

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext<SearchContextType>({ searchResults: [], setSearchResults: () => {} });

export const SearchContextProvider: React.FC<SearchContextProviderProps> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]); 

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
