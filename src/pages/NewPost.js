import { useForm } from "react-hook-form";
import axios from "axios";

const NewPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("body", data.body);
    formData.append("file", data.file[0]);
    console.log(formData.get("title"));
    console.log(data);

    try {
      await axios.post(
        "https://blogzilha-piyj.onrender.com/api/stories",
        formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("your was post sent successfully");
      reset();
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
      <h1>Add New Post</h1>
      <div className="blog-form-control">
        <label>Title</label>
        <input type="text" {...register("title")} />
      </div>
      <div className="blog-form-control">
        <label>Category</label>
        <input type="text" {...register("category")} />
      </div>
      <div className="blog-form-control">
        <label>Description</label>
        <textarea type="text" cols="20" rows="10" {...register("body")} />
      </div>
      <div className="blog-form-control">
        <label>Image</label>
        <input type="file" {...register("file")} />
      </div>
      <div className="modal-footer">
        <button className="add">Add Blog</button>
      </div>
    </form>
  );
};

export default NewPost;
