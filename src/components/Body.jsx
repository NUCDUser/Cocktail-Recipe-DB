import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CocktailCard from "./CocktailCard";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { cocktailAPIRoot } from "../config";

const Body = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [filteredCocktailList, setFilteredCocktailList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getCocktailsList();
  }, []);

  async function getCocktailsList() {
    const response = await fetch(cocktailAPIRoot + "search.php?f=a");
    const data = await response.json();
    setCocktailList(data.drinks);
    setFilteredCocktailList(data.drinks);
  }

  const filterCocktails = (query) => {
    setFilteredCocktailList(
      cocktailList.filter(
        (drink) =>
          drink.strDrink.toLowerCase().includes(query.toLowerCase()) ||
          drink.strCategory.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  return (
    <Container>
      <Form className="d-flex mb-3 mt-2" onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="outline-success"
          onClick={() => filterCocktails(searchQuery)}
        >
          Search
        </Button>
      </Form>
      {cocktailList.length == 0 ? (
        <p>Loading cocktails</p>
      ) : filteredCocktailList.length == 0 ? (
        <p>No cocktails with that name were found</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4}>
          {filteredCocktailList.map((cocktailData) => (
            <Col key={cocktailData.idDrink}>
              <CocktailCard data={cocktailData} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Body;
