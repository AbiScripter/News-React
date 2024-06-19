import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { addSearchArticles } from "../Slices/SearchSlice";
import { updateSearchNextPageId } from "../Slices/SearchPageSlice";
import { updateSearchQuery } from "../Slices/SearchQuerySlice";
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
  const searchQuery = useSelector((state) => state.searchQuery.searhQuery);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleNext() {
    handleSearch(searchNextPageId);
  }

  function handleSearch(pageId) {
    dispatch(updateSearchQuery(queryRef.current.value));
    fetchData(pageId);
  }

  async function fetchData(pageId) {
    let url;
    if (pageId === 1) {
      url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${
        searchQuery ? searchQuery : queryRef.current.value
      }`;
    } else {
      url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${searchQuery}&page=${searchNextPageId}`;
    }

    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("soemething went wrong with searching ");
      }
      const result = await response.json();
      console.log(result);
      dispatch(addSearchArticles(result.results));
      dispatch(updateSearchNextPageId(result.nextPage));
      dispatch(updateSearchQuery(queryRef.current.value));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  console.log(searchArticles);
  return (
    <div>
      <input type="text" ref={queryRef} />
      <button onClick={() => handleSearch(1)}>Search</button>
      <div className="searchpage-wrapper">
        {searchArticles.map((article) => (
          <Article key={article.title} article={article} />
        ))}
      </div>
      {searchArticles.length > 0 && (
        <button onClick={handleNext}>next page</button>
      )}
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
