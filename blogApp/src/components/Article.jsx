import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";

/* eslint-disable react/prop-types */
function Article({ article, id }) {
  return (
    <div className="w-[22%] p-2 my-4">
      {article.urlToImage !== null ? (
        <img src={article.urlToImage} alt={article.title} className="w-full" />
      ) : (
        <img src={placeholder} alt={article.title} className="w-full" />
      )}
      <h3>
        <Link to={`/article/${id}`}>{article.title}</Link>
      </h3>
    </div>
  );
}

export default Article;
