import React from "react";
import { emptyHeart, fullHeart } from "../assets/svgs";
import "./Article.css";

const Article = ({ article, handleLike, isLiked }) => {
  //if the article doesn't have image dont render
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

export default Article;
