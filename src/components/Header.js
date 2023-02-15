import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="main-nav">
      <header>
        <h1 className="logo">The Blog</h1>
        <ul className={navOpen ? "nav-open" : "nav-items"}>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>blogs</li>
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li>Login</li>
          </Link>
          <Link
            to="/sign-up"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li id="sign-up">SignUp</li>
          </Link>
        </ul>
        <FaBars
          id="menu-icon"
          onClick={() => {
            setNavOpen(!navOpen);
            console.log(navOpen);
          }}
        />
      </header>
    </div>
  );
};

export default Header;
