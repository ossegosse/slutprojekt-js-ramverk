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
              <Link to="/subjects">Subjects</Link>
            </li>
            <li>
              <Link to="/trending">Trending</Link>
            </li>
          </ul>
        </nav>
        </header>
  
        <Outlet />
      </>
    )
  };
  
  export default Nav;