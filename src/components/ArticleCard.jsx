/* eslint-disable react/prop-types */
import "../styles/ArticleCard.scss";

function ArticleCard({ article }, { articleNum }) {
  // Inline style to set the CSS custom property
  const figureStyle = {
    "--articleBgImage": `url(${article.image_path})`,
  };

  return (
    <div className="article-card">
      <figure className="article-image-container" style={figureStyle}>
      <div className="article-category">{article.article_category}</div>
      </figure>
      <div className="article-headline">{article.article_headline}</div>
      <div className="article-excerpt">{article.article_excerpt}</div>
      <div className="article-details">
        <span className="article-author">
          {article.article_details.article_author}
        </span>
        <span className="article-date">
          {article.article_details.article_date}
        </span>
      </div>
      <div className="article-tags">
        {article.article_tags.map((tag, index) => {
          return (
            <span
              key={`article-${articleNum}-tag-${index}`}
              className="article-tag"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleCard;
