import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Article } from "../interfaces/Article";
import { Link } from "react-router-dom";

interface singleArticleProps {
  article: Article;
}

const MyArticle = ({ article }: singleArticleProps) => {
  return (
    <Card className="my-2">
      <Card.Img variant="top" src={article.image_url} style={{ maxHeight: "142px" }} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>

        <Link to={`/article/${article.id}`}>
          <Button variant="primary">{article.id} </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MyArticle;
