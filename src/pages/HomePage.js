import React, { useEffect, useState } from "react";
import "./HomePage.css";
// import { useFetch } from "../Utils";
import { addArticles } from "../Slices/ArticleSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateNextPageId } from "../Slices/NextPageSlice";
import CategoryTabs from "../Categories";
import { addToLiked } from "../Slices/LikesSlice";
import { fullHeart, emptyHeart } from "../svgs";
// https://newsdata.io/api/1/latest?apikey=pub_44179f13e7f1d11c54f74ef34d7f2b17b6165
const API_KEY = "pub_44179f13e7f1d11c54f74ef34d7f2b17b6165";
// https://newsdata.io/api/1/latest?apikey=pub_467660a2d6ac1676468c5d0e34eb47f89252a&category=science

const HomePage = () => {
  const articles = useSelector((state) => state.articles.articles);
  const nextPageId = useSelector((state) => state.nextPage.nextPageId);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("top");
  const likes = useSelector((state) => state.likes.likes);

  async function fetchArticles(pageId = 1) {
    let url;
    if (pageId === 1) {
      url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&country=in&category=${category}`;
    } else {
      url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&country=in&category=${category}&page=${pageId}`;
    }

    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("soemething went wrong with searching ");
      }
      const result = await response.json();
      console.log(result);
      dispatch(updateNextPageId(result.nextPage));
      dispatch(addArticles({ category: category, payload: result.results }));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  console.log(articles);
  console.log(nextPageId);
  console.log(likes);

  function handleLike(articleId) {
    console.log(articleId);
    dispatch(addToLiked({ id: articleId }));
  }

  function handleNext() {
    fetchArticles(nextPageId);
  }

  function handleCategory(cat) {
    setCategory(cat);
  }

  useEffect(() => {
    //if articles in that category already exists dont fetch when category changes
    if (articles[category].length === 0) {
      fetchArticles();
    }
  }, [category]);

  if (error) {
    return <h2>{error.message}</h2>;
  } else if (isLoading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <CategoryTabs category={category} handleCategory={handleCategory} />
      <div className="homepage-wrapper articles-wrapper">
        {articles[category]?.map((article) => (
          <Article
            key={article.title}
            article={article}
            handleLike={handleLike}
            isLiked={likes.includes(article.article_id)}
          />
        ))}
      </div>
      <div className="load-more-wrapper">
        <button className="load more" onClick={handleNext}>
          Load More
        </button>
      </div>
    </div>
  );
};

const Article = ({ article, handleLike, isLiked }) => {
  if (article.image_url === null || article.description === null) return null;
  return (
    <div
      className="article-wrapper"
      style={{
        backgroundImage: `url(${article.image_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="article-overlay">
        {/* Optional: Add an overlay for better text contrast */}
        <div className="article-header">
          <h3>{article.title}</h3>
          <span className="like" onClick={() => handleLike(article.article_id)}>
            {isLiked ? <span>{fullHeart}</span> : <span>{emptyHeart}</span>}
          </span>
        </div>
        <div className="article-content">
          <p>
            {article.description && (
              <span>{article.description?.slice(0, 200)}</span>
            )}
            <span>
              <a target="_blank" rel="noopener noreferrer" href={article.link}>
                Read More
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
