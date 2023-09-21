import { Col, Container, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import { Result } from "../interfaces/Article";
import { Link, useParams } from "react-router-dom";

const ArticleRead = () => {
  const { id } = useParams();

  const [articles, setArticles] = useState<Result | null>(null);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {articles && (
        <Container
          style={{
            background:
              "linear-gradient(11deg, rgba(121,193,244,0.5634628851540616) 0%, rgba(121,193,244,0.5914740896358543) 100%)",
            maxWidth: "fit-content",
          }}
        >
          <img src={articles.image_url} alt={articles.title} />
          <h2>{articles.title}</h2>
          <p>{articles.summary}</p>
          <p>pubblicato da: {articles.news_site}</p>
          <p>
            più info in: <Link to={`${articles.url}`}> {articles.url} </Link>
          </p>
          <p>pubblicato il : {articles.published_at.toString()}</p>
        </Container>
      )}
    </>
  );
};

export default ArticleRead;
