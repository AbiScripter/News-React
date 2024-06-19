import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
const API_KEY = "pub_44179f13e7f1d11c54f74ef34d7f2b17b6165";
const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en`;
// https://newsdata.io/api/1/latest?apikey=pub_44179f13e7f1d11c54f74ef34d7f2b17b6165&q=pizza

const SearchPage = () => {
  const queryRef = useRef();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch() {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}&q=${queryRef.current.value}`);
      if (!response.ok) {
        throw new Error("soemething went wrong with searching ");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (error) {
    return <h2>{error.message}</h2>;
  } else if (isLoading) {
    return <h2>Loading....</h2>;
  }

  console.log(data);
  return (
    <div>
      <input type="text" ref={queryRef} />
      <button onClick={handleSearch}>Search</button>
      <div className="searchpage-wrapper">
        {data.results?.map((article) => (
          <Article key={article.title} article={article} />
        ))}
      </div>
    </div>
  );
};

const Article = ({ article }) => {
  if (article.image_url === null || article.description === null) return null;
  return (
    <div className="article-wrapper">
      <h2>{article.title}</h2>
      <img src={article.image_url} alt="article" />
      <p>
        {article.description && (
          <span>{article.description?.slice(0, 300)}</span>
        )}

        <span>
          <a target="_blank" rel="noopener noreferrer" href={article.link}>
            Read More
          </a>
        </span>
      </p>
    </div>
  );
};
export default SearchPage;
