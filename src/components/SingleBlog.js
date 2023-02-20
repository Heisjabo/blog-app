import { useParams } from "react-router-dom";
import Footer from "./Footer";

const SingleBlog = ({ blogs }) => {
  const { blogId } = useParams();
  console.log(blogId);
  const single = blogs.find((blog) => blog._id === blogId);
  const { title, image, body, author } = single;
  return (
    <>
      <div className="single">
        <div className="single-row">
          <img src={image} alt="" />
          <div className="blog-title">
            <h3>{title}</h3>
            <br />
            <p>{body}</p>
            <br />
            <h5>Written by: {author}</h5>
            <p>on 06 February 2023</p>
          </div>
        </div>
      </div>
      <div className="comments">
        <div className="comment">
          {/* {filtered.comments.map((item) => {
            console.log(item);
            return (
              <div>
                <h3>{item?.name}</h3>
                <p>{item?.comment}</p>
              </div>
            );
          })} */}
        </div>
        <form>
          <textarea type="text" placeholder="Enter your comment" />
          <button>submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlog;
