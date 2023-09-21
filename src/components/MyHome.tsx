import { Col, Container, Row } from "react-bootstrap";
import MyArticle from "./MyArticle";
import { useEffect, useState } from "react";
import { Result } from "../interfaces/Article";

const MyHome = () => {
  const [articles, setArticles] = useState<Result[] | null>(null);
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
    <Container
      style={{
        background:
          "linear-gradient(11deg, rgba(88,92,173,0.6530987394957983) 0%, rgba(0,150,254,0.7231267507002801) 100%)",
      }}
    >
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
