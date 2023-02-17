import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CocktailCard({ data }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={data.strDrinkThumb} />
      <Card.Body>
        <Card.Title>
          <Link to={"/cocktail/" + data?.idDrink} className="stretched-link">
            {data.strDrink}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CocktailCard;
