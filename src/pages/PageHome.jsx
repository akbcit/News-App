import "../styles/PageHome.css";
import ArticleGrid from "../components/ArticleGrid";
import FeaturedArticle from "../components/FeaturedArticle";
import articles from "../data/articles.json";
import selectFeaturedArticle from "../utils/selectFeaturedArticle";
import HeaderNav from "../components/HeaderNav";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

function PageHome() {
  // select one featured article and get rest of the articles randomly
  const { featuredArticle, otherArticles } = selectFeaturedArticle(articles);

  return (
    <>
    <HeaderNav/>
    <main>
    <FeaturedArticle article={featuredArticle} />
      <section id="articles-section">
        <ArticleGrid articles={otherArticles} />
        <SideBar/>
      </section>
      <Footer/>
    </main>
    </>
  );
}

export default PageHome;
