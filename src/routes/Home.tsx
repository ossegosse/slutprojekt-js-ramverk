import SearchResultList from "../components/SearchResultList/SearchResultList";
import Searchbar from "../components/Searchbar/Searchbar";

const Home = () => {
  
  return (
    <div className="main-home">
      <div className="search-container">
        <h1>Search for your favourite books and authors!</h1>
        <p>add books to favorites and mark them if you've read them. Add reviews and ratings!</p>
      <Searchbar />
      </div>
      
      <SearchResultList />
    </div>
    
  );
};

export default Home;