import SearchResultList from "../components/SearchBarList/SearchResultList";
import Searchbar from "../components/Searchbar/Searchbar";

const Home = () => {
  
  return (
    <div className="main-home">
      <div className="search-container">
        <h1>Search for your favourite books!</h1>
      <Searchbar />
      </div>
      
      <SearchResultList />
    </div>
    
  );
};

export default Home;