import { Outlet, Link } from "react-router-dom";
const Nav = () => {
    return (
      <>
        <header className="header">
          <h1>Library</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/mybooks">My Books</Link>
            </li>
          </ul>
        </nav>
        </header>
  
        <Outlet />
      </>
    )
  };
  
  export default Nav;