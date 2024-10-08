import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = ({ arteicles }) => {
  const { id } = useParams();
  const article = arteicles.find((article) => article.id === parseInt(id));

  if (!article) return <div>Статья не найдена</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>год</p>
    </div>
  );
};

export default ArticleDetail;
