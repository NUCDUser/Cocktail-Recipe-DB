import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCocktail } from "../utils/hooks";
import { useState } from "react";
import { addFavorite } from "../utils/favoritesSlice";
import { useDispatch } from "react-redux";

const CocktailDetail = () => {
  const { cocktailID } = useParams();
  const cocktailDetail = useCocktail(cocktailID);
  const [isFavorited, setIsFavorited] = useState(false);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addFavorite(item));
  };

  if (!cocktailDetail) return <h1>Loading...</h1>;

  return (
    <Container className="mt-5">
      <Row xs={1} md={2}>
        <Col>
          <Image src={cocktailDetail.strDrinkThumb} fluid />
        </Col>
        <Col>
          <h2 className="mb-0">{cocktailDetail.strDrink}</h2>
          <p className="text-muted">
            <Link to={"/categories/" + cocktailDetail.strCategory}>
              {cocktailDetail.strCategory}
            </Link>
            <span>, </span>
            <Link to={"/alcoholic/" + cocktailDetail.strAlcoholic}>
              {cocktailDetail.strAlcoholic}
            </Link>
            <span>, </span>
            <Link to={"/glass/" + cocktailDetail.strGlass}>
              {cocktailDetail.strGlass}
            </Link>
          </p>
          <div>
            <h5 className="mb-0">Instructions</h5>
            <p className="text-muted">{cocktailDetail.strInstructions}</p>
          </div>
          <div>
            <h5>Ingredients</h5>
            <ul>
              {[...Array(15).keys()].map((_, index) => {
                index += 1;
                if (cocktailDetail[`strIngredient${index}`] === null) return;
                return (
                  <li key={index}>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={
                          "/ingredient/" +
                          cocktailDetail[`strIngredient${index}`]
                        }
                      >
                        <span>{cocktailDetail[`strIngredient${index}`]}</span>
                      </Link>
                      <span>{cocktailDetail[`strMeasure${index}`]}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button
              type="button"
              className={`btn text-white ${
                isFavorited ? "btn-outline-danger" : " btn-danger"
              }`}
              onClick={() => handleAddItem(cocktailDetail)}
            >
              {isFavorited ? "Remove from Favorites" : "Add to Favorite"}
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CocktailDetail;
