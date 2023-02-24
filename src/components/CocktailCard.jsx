import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import LikeDislikeIcon from "../assets/LikeDislikeIcon";

function CocktailCard({ data }) {
  return (
    <Card className="mb-4">
      <div className="position-relative">
        <Card.Img variant="top" src={data.strDrinkThumb} />
        <div class="position-absolute bottom-0 end-0 p-2">
          <LikeDislikeIcon isLiked={false} />
        </div>
      </div>
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
