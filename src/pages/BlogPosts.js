import { FaPen } from "react-icons/fa";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const BlogPosts = ({ blogs }) => {
  const [selected, setSelected] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: selected?.title,
      description: selected?.description,
    },
  });

  const [modal, setModal] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://blogapi-wm30.onrender.com/api/v1/blog/${id}`,
        headers: {
          "content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getSingleBlog = async (id) => {
    const selectedBlog = blogs.find((blog) => blog._id === id);
    setSelected(selectedBlog);

    reset();
    console.log(selectedBlog);
  };
  useEffect(() => {
    reset(selected);
    // eslint-disable-next-line
  }, [selected]); 

  const onSubmit = async ({ image, title, description }) => {
    try {
      const formData = new FormData();
      formData.append("image", image[0]);
      formData.append("title", title);
      formData.append("description", description);
      await axios.patch(
        `https://blogapi-wm30.onrender.com/api/v1/blog/${selected._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("You made it!", "Blog updated successfully ", "Ok", {
        timeout: 2000,
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <h1 className="blogs-title">Blog Posts</h1>
      <table className="dashboard-blogs">
        {blogs.map((blog, index) => {
          return (
            <tr
              className="blog-item-dash"
              // style={{ backgroundColor: "#f5f6f8" }}
            >
              <td>
                <img
                  src={blog.image}
                  alt=""
                  style={{
                    width: "90px",
                    alignItems: "center",
                    height: "auto",
                  }}
                />
              </td>
              <td>
                <h3>{blog.title}</h3>
              </td>
              <td>
                <FaPen
                  style={{
                    cursor: "pointer",
                    margin: "0 10px",
                  }}
                  onClick={() => {
                    getSingleBlog(blog._id);
                    setModal(true);
                  }}
                />
              </td>
              <td style={{ width: "50px" }}>
                <FaTrashAlt
                  id="delete-btn"
                  onClick={() => {
                    if (
                      window.confirm("Are you sure you want to delete this?")
                    ) {
                      handleDelete(blog._id);
                    }
                  }}
                  style={{ cursor: "pointer", color: "red", margin: "0 10px" }}
                />
              </td>
            </tr>
          );
        })}
      </table>
      <div className="update" style={{ display: !modal ? "none" : "flex" }}>
        <form className="update-modal" onSubmit={handleSubmit(onSubmit)}>
          <h1>Update Blog</h1>
          <div className="blog-form-control">
            <label>Title</label>
            <input type="text" {...register("title")} />
          </div>
          <div className="blog-form-control">
            <label>Description</label>
            <textarea
              type="text"
              cols="20"
              rows="10"
              {...register("description")}
            />
          </div>
          <div className="blog-form-control">
            <label>Image</label>
            <input type="file" {...register("image")} />
          </div>
          <div className="modal-footer">
            <button className="add">Save updates</button>
            <button
              className="add"
              style={{
                backgroundColor: "#fff",
                color: "#121219",
                margin: "0 10px",
              }}
              onClick={() => {
                setModal(false);
              }}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogPosts;