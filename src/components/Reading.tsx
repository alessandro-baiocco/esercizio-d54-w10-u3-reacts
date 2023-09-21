import { Col, Container, Row } from "react-bootstrap";
import MyArticle from "./MyArticle";
import { useEffect, useState } from "react";
import { Article } from "../interfaces/Article";
import { useParams } from "react-router-dom";

const ArticleRead = () => {
  const { id } = useParams();

  const [articles, setArticles] = useState<Article | null>(null);
  const checkArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + id);
      if (resp.ok) {
        const data = await resp.json();
        setArticles(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    checkArticle();
  }, []);

  return (
    <>
      {articles && (
        <Container>
          <img src={articles.image_url} alt={articles.title} />
          <h2>{articles.title}</h2>
          <p>{articles.summary}</p>
          <p>pubblicato da: {articles.news_site}</p>
          <p>
            più info in: <a href={articles.url}>{articles.url}</a>
          </p>
        </Container>
      )}
    </>
  );
};

export default ArticleRead;
