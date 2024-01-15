/* eslint-disable react/prop-types */
import "../styles/ArticleGrid.css";
import ArticleCard from "./ArticleCard";

function ArticleGrid({articles}){
    
    return(
        <div className="article-grid">
            {articles.map((article,index)=>{
                return(<ArticleCard key = {`article-${index}`} article={article} articleNum={index}/>)
            })}
        </div>
    )
}

export default ArticleGrid;