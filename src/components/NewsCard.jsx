import "../styles/NewsCard.css";

function newsCard({newsItem}){

    return(
        <div className="news-card">
            <div className="article-image"></div>
            <div className="article-source"></div>
            <div className="article-title"></div>
            <div className="article-description"></div>
            <div className="article-details"></div>
            <div></div>
        </div>
    )
}

export default newsCard;