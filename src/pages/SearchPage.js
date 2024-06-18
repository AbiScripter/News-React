import React, { useRef, useState } from "react";

const SearchPage = () => {
  const queryRef = useRef();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSearch() {}

  async function Search(url) {
    try {
      setIsLoading(true);
      const response = await fetch(url);
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

  return (
    <div>
      <input type="text" ref={queryRef} />
      <button onClick={handleSearch}>Search</button>
      {data.map((article) => (
        <Article key={article.title} />
      ))}
    </div>
  );
};

const Article = ({ article }) => {
  if (article.urlToImage === null) return null;
  return (
    <div className="article-wrapper">
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt="article" />
      <p>{article.description}</p>
    </div>
  );
};
export default SearchPage;
