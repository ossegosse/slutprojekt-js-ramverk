import { Outlet, Link } from "react-router-dom";
import logo from "../assets/bookmark-logo.png"
const Nav = () => {
    return (
      <>
        <header className="header">
        <Link to="/"><img src={logo} alt="Book Mark Logo" /></Link>
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