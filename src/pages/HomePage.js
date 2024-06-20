import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./HomePage.css";
import Loader from "../Components/Loader";
import { addToLiked } from "../Slices/LikesSlice";
import CategoryTabs from "../Components/Categories";
import {
  addCategoryArticles,
  updateCategoryPageId,
} from "../Slices/CategoryPageSlice";
import Article from "../Components/Article";

//API KEYS
// const API_KEY = "pub_44179f13e7f1d11c54f74ef34d7f2b17b6165";
const API_KEY = "pub_4690986b89ff2a420d5fc6f766b67a1ba6703";

const HomePage = () => {
  const categoryArticles = useSelector(
    (state) => state.categoryPage.categoryArticles
  );
  const categoryPageId = useSelector(
    (state) => state.categoryPage.categoryPageId
  );
  const likes = useSelector((state) => state.likes.likes);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("top");

  //function to fetcharticles, if it fetches for the first time we put pageid as 1 else put the pageid
  //this is done to change the url
  async function fetchArticles(pageId = 1) {
    let url;
    if (pageId === 1) {
      url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&category=${category}&country=in`;
    } else {
      url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=${category}&page=${pageId}&country=in`;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(url);
      console.log(response);
      if (response.statusText !== "OK") {
        throw new Error("soemething went wrong with searching ");
      }
      const result = response.data;
      console.log(result);
      //updating the ids and articles to the store
      dispatch(updateCategoryPageId(result.nextPage));
      dispatch(
        addCategoryArticles({ category: category, payload: result.results })
      );
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLike(articleId) {
    console.log(articleId);
    //update the likes to store
    dispatch(addToLiked({ id: articleId }));
  }

  function handleNext() {
    fetchArticles(categoryPageId);
  }

  function handleCategory(cat) {
    setCategory(cat);
  }

  useEffect(() => {
    //if articles in that category already exists dont fetch when category changes
    if (categoryArticles[category].length === 0) {
      fetchArticles();
    }
  }, [category]);

  //boundary cases
  if (error) {
    return <h2>{error.message}</h2>;
  } else if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <CategoryTabs category={category} handleCategory={handleCategory} />
      <div className="homepage-wrapper articles-wrapper">
        {categoryArticles[category]?.map((article) => (
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

export default HomePage;
