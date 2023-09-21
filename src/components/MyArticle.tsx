import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Article } from "../interfaces/Article";

interface singleArticleProps {
  article: Article;
}

const MyArticle = ({ article }: singleArticleProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>

        <Button variant="primary">{article.id} </Button>
      </Card.Body>
    </Card>
  );
};

export default MyArticle;
