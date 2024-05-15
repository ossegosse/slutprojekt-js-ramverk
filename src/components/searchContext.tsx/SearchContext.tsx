import { createContext, useState } from "react";

// Definiera en typ för contextvärdena
interface SearchContextType {
  searchResults: any[]; // Antag att searchResults är en array av något
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
}

// Använd den definierade typen som ett generiskt typargument
export const SearchContext = createContext<SearchContextType>({ searchResults: [], setSearchResults: () => {} });

export const SearchContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // Specifiera vilken typ useState ska ha

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
