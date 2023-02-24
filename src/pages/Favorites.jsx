import React from "react";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CocktailCard from "../components/CocktailCard";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Shimmer from "../components/Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorites } from "../utils/favoritesSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const handleClearItems = () => dispatch(clearFavorites());
  const favoriteCocktails = useSelector((store) => store.favorites.items);
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {favoriteCocktails.map((cocktailData) => (
          <Col key={cocktailData.idDrink}>
            <CocktailCard data={cocktailData} />
          </Col>
        ))}
      </Row>
      <Button variant="danger" onClick={() => handleClearItems()}>
        Clear all favorites
      </Button>
    </Container>
  );
};

export default Favorites;
