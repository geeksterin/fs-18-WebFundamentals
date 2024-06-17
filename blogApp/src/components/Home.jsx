import { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
let id = 0;

function Home() {
  const perPage = 10;
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=" +
          import.meta.env.VITE_API_KEY +
          "&pageSize=100"
      );
      //   console.log(result);
      setArticles(result.data.articles);
      setTotalResults(result.data.totalResults);
    }
    fetchData();
  }, []);

  //  0,10
  // 10,20
  // 20,30
  // 30,40

  useEffect(() => {
    if (articles.length > 0) {
      let offset = page === 1 ? 0 : (page - 1) * perPage;
      setDisplayedArticles(articles.slice(offset, offset + perPage));

      console.log(offset);
    }
  }, [page, articles]);

  console.log(id); //[]

  return (
    <>
      <div className="py-4 px-16">
        <h2 className="text-xl font-bold">Today's Top Stories</h2>
        <div className="flex flex-wrap items-center py-8 gap-2">
          {displayedArticles.length > 0
            ? displayedArticles.map((article, index) => {
                return (
                  <Article key={index} article={article} id={id++}></Article>
                );
              })
            : ""}
        </div>

        <div className="pagination">
          <button
            className="disabled:opacity-75 bg-blue-500 text-white p-2 rounded-md border-solid mx-2"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Previous
          </button>

          <span>
            Page {page} of {Math.ceil(totalResults / perPage)}
          </span>

          <button
            className="disabled:opacity-75 bg-blue-500 text-white p-2 rounded-md border-solid mx-2"
            disabled={page >= Math.ceil(totalResults / perPage)}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
