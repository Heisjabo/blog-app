
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingleBlog from "./components/SingleBlog";
import SignUp from "./pages/SignUp";
import SharedComponent from "./components/SharedComponent";
import BlogPosts from "./pages/BlogPosts";
import Manage from "./pages/Manage";
import NewPost from "./pages/NewPost";
import { useState, useEffect } from "react";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  // fetch blogs
  const fetchBlogs = async () => {
    const res = await fetch("https://blogzilha-piyj.onrender.com/api/stories");
    const data = await res.json();

    return data.data;
  };
  console.log(blogs);
  console.log("working");

  useEffect(() => {
    const getBlogs = async () => {
      const blogsFromServer = await fetchBlogs();
      setBlogs(blogsFromServer);
    };
    getBlogs();
    
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<Home blogs={blogs} />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="/:blogId" element={<SingleBlog blogs={blogs} />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Manage />} />
          <Route
            path="blogs"
            element={<BlogPosts blogs={blogs} />}
          />
          <Route path="new" element={<NewPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
