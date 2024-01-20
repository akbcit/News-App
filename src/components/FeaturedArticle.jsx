/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/FeaturedArticle.scss";

function FeaturedArticle({ article }) {
  const [expandContent, setExpandContent] = useState(false);
  // inline style to set the CSS custom property
  const figureStyle = {
    "--articleBgImage": `url(${article.image_path})`,
  };

  const toggleContent = () => {
    const newState = !expandContent;
    setExpandContent(newState);
  };

  return (
    <div className="featured-article" style={figureStyle}>
      <div className={`featured-article-content ${!expandContent ? "half" : "full"}`}>
        <div className="category-and-expand-container">
          <div className="article-category">{article.article_category}</div>
          <img
            alt="expand-icon"
            className={`expand-icon ${!expandContent ? "up" : "down"}`}
            src="/images/expand.png"
            onClick={toggleContent}
          ></img>
        </div>
        <h1 className="article-headline">{article.article_headline}</h1>
        <div
          className={`article-excerpt ${
            !expandContent ? "invisible" : "visible"
          }`}
        >
          {article.article_excerpt}
        </div>
        <div
          className={`article-details ${
            !expandContent ? "invisible" : "visible"
          }`}
        >
          <span className="article-author">
            {article.article_details.article_author}
          </span>
          <span className="article-date">
            {article.article_details.article_date}
          </span>
        </div>
        <div
          className={`article-tags ${!expandContent ? "invisible" : "visible"}`}
        >
          {article.article_tags.map((tag, index) => {
            return (
              <span
                key={`featured-article-tag-${index}`}
                className="article-tag"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default FeaturedArticle;
