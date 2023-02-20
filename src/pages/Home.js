import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = ({ blogs }) => {
  return (
    <>
      <Welcome />
      <div className="blogs">
        {blogs.map((blog, index) => {
          return (
            <div className="blog-item" key={index}>
              <Link
                to={`${blog._id}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <img src={blog.imageUrl} alt="" />
              </Link>
              <h3>{blog.title}</h3>
              <Link
                to={`${blog._id}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <p>{blog.body.slice(0,200)+"..."}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
