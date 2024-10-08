import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  <div>
    <h3> Список статей</h3>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  </div>;
};

export default ArticleList;
