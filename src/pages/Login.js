import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";

const LOGIN_URL = "https://blogapi-wm30.onrender.com/api/v1/signin";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "content-Type": "application/json" },
          // withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const token = response?.data?.token;
      localStorage.setItem("token", token);
      setAuth({ email, password, token });

      console.log("item from storage", localStorage.getItem("token"));
      setEmail("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorised");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <>
      {success ? (
        <section className="add-form">
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to="/dashboard">Go to Home</Link>
          </p>
        </section>
      ) : (
        <form className="add-form">
          <h3>Welcome back</h3>
          <p style={{ color: "red" }}>{errMsg}</p>
          <div className="form-control">
            <label>Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-block" onClick={handleLogin}>
            Login
          </button>
          <p>
            Dont have an account?{" "}
            <Link
              to="/sign-up"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span>SignUp</span>
            </Link>{" "}
          </p>
        </form>
      )}
    </>
  );
};

export default Login;
