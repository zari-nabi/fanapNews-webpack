import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { NewsContext } from "../contexts";
import logo from "../assets/img/fanap-logo.png";

const NavBar = () => {
  const { isLogedIn, logout } = useContext(NewsContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/">
        <img src={logo} width={40} height={40} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link px-2" to="/">
            خانه
          </NavLink>
          <NavLink className="nav-item nav-link px-2" to="/news">
            مدیریت خبرها
          </NavLink>
          {!isLogedIn &&
            <NavLink className="nav-item nav-link px-2" to="/auth">
              ورود
          </NavLink>
          }
          {isLogedIn &&
            <NavLink className="nav-item nav-link px-2" to="/">
              <button
                className="btn p-0"
                onClick={logout}
              >
                خروج
          </button>
            </NavLink>
          }


        </div>
      </div>
    </nav>
  );
};

export default NavBar;
