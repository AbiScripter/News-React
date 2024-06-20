import React, { useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./SearchPage.css";
import { fullHeart, emptyHeart } from "../assets/svgs";

import { addSearchArticles, getNewSearchArticles } from "../Slices/SearchSlice";
import { updateSearchNextPageId } from "../Slices/SearchPageSlice";
import { updateSearchQuery } from "../Slices/SearchQuerySlice";
import { addToLiked } from "../Slices/LikesSlice";
import Loader from "../Components/Loader";

const API_KEY = "pub_44179f13e7f1d11c54f74ef34d7f2b17b6165";
// const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en`;
// https://newsdata.io/api/1/latest?apikey=pub_44179f13e7f1d11c54f74ef34d7f2b17b6165&q=pizza
// https://newsdata.io/api/1/latest?apikey=pub_467660a2d6ac1676468c5d0e34eb47f89252a&q=YOUR-QUERY&page=XXXPPPXXXXXXXXXX

const SearchPage = () => {
  const queryRef = useRef();
  const searchArticles = useSelector(
    (state) => state.searchArticles.searchArticles
  );
  const searchNextPageId = useSelector(
    (state) => state.searchNextPage.searchNextPageId
  );
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
  const likes = useSelector((state) => state.likes.likes);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getNextPageResults() {
    let url = `https://newsdata.io/api/1/latest?&language=en&apikey=${API_KEY}&q=${searchQuery}&page=${searchNextPageId}`;
    fetchData(url, "nextPage");
  }

  function getSearchResults() {
    console.log(queryRef.current.value);
    dispatch(updateSearchQuery(queryRef.current.value));
    let url = `https://newsdata.io/api/1/latest?&language=en&apikey=${API_KEY}&q=${queryRef.current.value}`;
    fetchData(url, "firsttime");
  }

  function handleLike(articleId) {
    console.log(articleId);
    dispatch(addToLiked({ id: articleId }));
  }

  async function fetchData(url, type) {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      if (response.statusText !== "OK") {
        throw new Error("soemething went wrong with searching ");
      }
      const result = response.data;
      dispatch(updateSearchNextPageId(result.nextPage));
      if (type === "firsttime") {
        dispatch(getNewSearchArticles(result.results));
      } else {
        dispatch(addSearchArticles(result.results));
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (error) {
    return <h2>{error.message}</h2>;
  } else if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="search-wrapper">
        <input type="text" ref={queryRef} />
        <button type="submit" onClick={() => getSearchResults()}>
          Search
        </button>
      </div>
      {searchQuery && (
        <h2 style={{ textAlign: "center" }}>
          Showing Results for {searchQuery}
        </h2>
      )}
      <div className="searchpage-wrapper articles-wrapper">
        {searchArticles.map((article) => (
          <Article
            key={article.title}
            article={article}
            handleLike={handleLike}
            isLiked={likes.includes(article.article_id)}
          />
        ))}
      </div>

      <div className="load-more-wrapper">
        {searchArticles.length > 0 && (
          <button className="load more" onClick={getNextPageResults}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

const Article = ({ article, handleLike, isLiked }) => {
  if (article.image_url === null || article.description === null) return null;
  return (
    <>
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
            <span
              className="like"
              onClick={() => handleLike(article.article_id)}
            >
              {isLiked ? <span>{fullHeart}</span> : <span>{emptyHeart}</span>}
            </span>
          </div>
          <div className="article-content">
            <p>
              {article.description && (
                <span>{article.description?.slice(0, 200)}</span>
              )}
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={article.link}
                >
                  Read More
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchPage;
