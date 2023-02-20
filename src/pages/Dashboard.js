import { Outlet } from "react-router-dom";
import { FaHome, FaPlusSquare, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {useState} from "react";

const Dashboard = () => {
  const brandStyles = {
    color: "#fff",
    textDecoration: "none",
  };
  const [menu, setMenu] = useState(false);


  return (
    <>
      <header className="header-styles">
        <FaBars id="dashboard-menu"onClick={()=> setMenu(!menu)}/>
        <Link to="/" style={brandStyles}>
          <h3>The Blog</h3>
        </Link>
        <div className="user">
          <img src={process.env.PUBLIC_URL + "/img/profile.png"} alt="" />
          <p>Admin</p>
        </div>
      </header>
      <div className="dash-container">
        <aside className={menu? "menu-open":"sidebar-styles"}>
          <ul className="sidebar-items">
            <Link
              to="/dashboard"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className="active">
                <FaHome className="icon" />
                Dashboard
              </li>
            </Link>
            <Link
              to="blogs"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li>
                <FaFileAlt className="icon" />
                Blog Posts
              </li>
            </Link>
            <Link
              to="new"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li>
                <FaPlusSquare className="icon" />
                Add New Post
              </li>
            </Link>
          </ul>
        </aside>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
