import React, {useState} from 'react'
import data from "../data/data.json"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CocktailCard from './CocktailCard'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Body = () => {
  const [cocktailList, setCocktailList] = useState(data.drinks)
  const [searchQuery, setSearchQuery] = useState("")
  const filterCocktails = (query) => {
    setCocktailList(data.drinks.filter((drink) => drink.strDrink.toLowerCase().includes(query.toLowerCase()) || drink.strCategory.toLowerCase().includes(query.toLowerCase())))
  }
  return (
    <Container>
      <Form className="d-flex my-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" onClick={()=> filterCocktails(searchQuery)}>Search</Button>
          </Form>
      <Row xs={1} md={4} className="g-2">
        {cocktailList.map((cocktailData) => (
          <Col key={cocktailData.idDrink}>
            <CocktailCard data={cocktailData} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Body