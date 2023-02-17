import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useSearchLists } from "../utils/hooks";

const Search = () => {
  const [categoriesUL, glassesUL, alcoholicUL, ingredientsUL, alphabetList] =
    useSearchLists();
  return (
    <Container>
      <Row md={4}>
        <Col>
          <h4>Categories</h4>
          {categoriesUL}
        </Col>
        <Col>
          <h4>Type of Glass</h4>
          {glassesUL}
        </Col>
        <Col>
          <h4>Alcoholic or Non-Alcoholic</h4>
          {alcoholicUL}
        </Col>
        <Col>
          <h4>Ingredients</h4>
          {ingredientsUL}
        </Col>
      </Row>
      <h4>First Letter</h4>
      <div className="d-flex justify-content-evenly">{alphabetList}</div>
    </Container>
  );
};

export default Search;
