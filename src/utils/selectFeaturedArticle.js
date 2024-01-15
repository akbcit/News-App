const selectFeaturedArticle =(articles) =>{
    const articlesLen = articles.length;
    const randIndex = Math.floor(Math.random() * articlesLen);
    const featuredArticle = articles[randIndex];
    const otherArticles = articles.filter(article => article !== featuredArticle);
    return { featuredArticle, otherArticles };
}

export default selectFeaturedArticle;