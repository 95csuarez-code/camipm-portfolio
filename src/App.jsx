import { useState } from "react";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const navigate = (to, data = null) => {
    setPage(to);
    if (data) setSelectedArticle(data);
    window.scrollTo(0, 0);
  };

  if (page === "blog") return <BlogPage navigate={navigate} />;
  if (page === "article") return <ArticlePage article={selectedArticle} navigate={navigate} />;
  return <HomePage navigate={navigate} />;
}
