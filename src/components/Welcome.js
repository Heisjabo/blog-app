import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="home-text">
      <div className="wlcm-txt">
        <small>Our Blog</small>
        <h1>Writings from our team</h1>
        <p>
          The latest industry news, interviews, technologies, and resources.
        </p>
        <div className="home-btns">
          <button className="get-started">
            <Link
              to="sign-up"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Get Started
            </Link>
          </button>
          <button>View Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
