import "../styles/PageHome.css";
import ArticleGrid from "../components/ArticleGrid";
import FeaturedArticle from "../components/FeaturedArticle";
import HeaderNav from "../components/HeaderNav";
import articles from "../data/articles.json";
import selectFeaturedArticle from "../utils/selectFeaturedArticle";

function PageHome() {
  // select one featured article and get rest of the articles randomly
  const { featuredArticle, otherArticles } = selectFeaturedArticle(articles);

  return (
    <section id="articles-section">
      <HeaderNav />
      <FeaturedArticle article={featuredArticle} />
      <ArticleGrid articles={otherArticles} />
    </section>
  );
}

export default PageHome;
