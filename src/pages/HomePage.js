import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useFetch } from "../Utils";
import { addArticles } from "../Slices/ArticleSlice";
import { useDispatch, useSelector } from "react-redux";
// https://newsdata.io/api/1/latest?apikey=pub_44179f13e7f1d11c54f74ef34d7f2b17b6165
const API_KEY = "pub_44179f13e7f1d11c54f74ef34d7f2b17b6165";
const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&country=in`;
// `https://newsdata.io/api/1/news?apikey=${api_key}&language=en&country=${country}&category=${category}`;

const HomePage = () => {
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleNext() {}

  async function fetchArticles() {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error("soemething went wrong with searching ");
      }
      const result = await response.json();

      dispatch(addArticles(result.results));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  console.log(articles);

  useEffect(() => {
    fetchArticles();
  }, []);

  if (error) {
    return <h2>{error.message}</h2>;
  } else if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="homepage-wrapper">
      {articles.map((article) => (
        <Article key={article.title} article={article} />
      ))}
      <button onClick={handleNext}>Next Page</button>
    </div>
  );
};

const Article = ({ article }) => {
  // if (article.image_url === null) return null;
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

export default HomePage;
