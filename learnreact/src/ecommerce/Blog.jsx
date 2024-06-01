import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setBlog(response.data);
    });
  }, []);

  return (
    <>
      <h2>Blog</h2>
      <div id="blogs">
        {blog.map((post, index) => {
          return (
            <div className="post" key={index}>
              <h3>
                <Link to="">{post.title}</Link>
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
