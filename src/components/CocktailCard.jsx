import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CocktailCard({ data }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={data.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{data.strDrink}</Card.Title>
        <Card.Text>{data.strInstructions}</Card.Text>
      </Card.Body>
      <Card.Body>
        <h6>Ingredients</h6>
        <ul>
          {[...Array(15).keys()].map((_, index) => {
            index += 1;
            if (data[`strIngredient${index}`] === null) return;
            return (
              <li key={index}>
                <div className="d-flex justify-content-between">
                  <span>{data[`strIngredient${index}`]}</span>
                  <span>{data[`strMeasure${index}`]}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </Card.Body>
      <Card.Body>
        <h6>Category</h6>
        <span>{data.strCategory}</span>
      </Card.Body>
    </Card>
  );
}

export default CocktailCard;
