/* eslint-disable react/prop-types */
import "../styles/FeaturedArticle.css";

function FeaturedArticle({article}){
     // Inline style to set the CSS custom property
     const figureStyle = {
        '--articleBgImage': `url(${article.image_path})`
    };

    return(
        <div className="article-card featured-article">
            <figure className="article-image-container" style={figureStyle}>
            </figure>
            <div className="article-category">{article.article_category}</div>
            <div className="article-headline">{article.article_headline}</div>
            <div className="article-excerpt">{article.article_excerpt}</div>
            <div className="article-details">
                <span className="article-author">{article.article_details.article_author}</span>
                <span className="article-date">{article.article_details.article_date}</span>
            </div>
            <div className="article-tags">{article.article_tags.map((tag,index)=>{
                return(
                    <span key={`featured-article-tag-${index}`} className="article-tag">{tag}</span>
                )
            })}</div> 
    
        </div>
    )
}

export default FeaturedArticle;