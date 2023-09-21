import { Col, Container, Row } from "react-bootstrap";
import MyArticle from "./MyArticle";
import { useEffect, useState } from "react";
import { Article } from "../interfaces/Article";

const MyHome = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const checkArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=20");
      if (resp.ok) {
        const data = await resp.json();
        setArticles(data.results);
      }
    } catch (error) {}
  };

  useEffect(() => {
    checkArticle();
  }, []);

  return (
    <Container>
      <Row>
        {articles &&
          articles.map((Article) => (
            <Col xs={6} md={4} lg={3} key={`art-${Article.id}`}>
              <MyArticle article={Article} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MyHome;
