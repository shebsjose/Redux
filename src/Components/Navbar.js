import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/counter" >Counter</NavLink>
              <NavLink  className="nav-link" to="/login" >Login</NavLink>
              <NavLink  className="nav-link" to="/user">API</NavLink>
            </div>
          </div>
        </div>
      </nav>
     );
}
export default NavBar;