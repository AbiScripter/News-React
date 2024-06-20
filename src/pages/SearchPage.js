import React, { useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./SearchPage.css";
import { fullHeart, emptyHeart } from "../assets/svgs";

import {
  getNewSearchArticles,
  addSearchArticles,
  updateSearchPageId,
  updateSearchQuery,
} from "../Slices/SearchPageSlice";

import { addToLiked } from "../Slices/LikesSlice";
import Loader from "../Components/Loader";
import Article from "../Components/Article";

// const API_KEY = "pub_44179f13e7f1d11c54f74ef34d7f2b17b6165";
const API_KEY = "pub_4690986b89ff2a420d5fc6f766b67a1ba6703";
// const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en`;
// https://newsdata.io/api/1/latest?apikey=pub_44179f13e7f1d11c54f74ef34d7f2b17b6165&q=pizza
// https://newsdata.io/api/1/latest?apikey=pub_467660a2d6ac1676468c5d0e34eb47f89252a&q=YOUR-QUERY&page=XXXPPPXXXXXXXXXX

const SearchPage = () => {
  const queryRef = useRef();
  const searchArticles = useSelector(
    (state) => state.searchPage.searchArticles
  );
  const searchPageId = useSelector((state) => state.searchPage.searchPageId);
  const searchQuery = useSelector((state) => state.searchPage.searchQuery);
  const likes = useSelector((state) => state.likes.likes);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getNextPageResults() {
    let url = `https://newsdata.io/api/1/latest?&language=en&apikey=${API_KEY}&q=${searchQuery}&page=${searchPageId}`;
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
      dispatch(updateSearchPageId(result.nextPage));
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
        <input type="text" ref={queryRef} placeholder="Search articles" />
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

export default SearchPage;
