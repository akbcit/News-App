import "../styles/PageHome.css";
import ArticleGrid from "../components/ArticleGrid";
import FeaturedArticle from "../components/FeaturedArticle";
import articles from "../data/articles.json";
import selectFeaturedArticle from "../utils/selectFeaturedArticle";
import HeaderNav from "../components/HeaderNav";

function PageHome() {
  // select one featured article and get rest of the articles randomly
  const { featuredArticle, otherArticles } = selectFeaturedArticle(articles);

  return (
    <>
    <HeaderNav/>
    <main>
      <section id="articles-section">
        <FeaturedArticle article={featuredArticle} />
        <ArticleGrid articles={otherArticles} />
      </section>
    </main>
    </>
  );
}

export default PageHome;
