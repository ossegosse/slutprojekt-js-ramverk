import SearchResultList from "../components/SearchResultList/SearchResultList";
import Searchbar from "../components/Searchbar/Searchbar";

const Home = () => {
  
  return (
    <div className="main-home">
      <div className="search-container">
        <h1>Search for your favourite books and authors!</h1>
      <Searchbar />
      </div>
      
      <SearchResultList />
    </div>
    
  );
};

export default Home;