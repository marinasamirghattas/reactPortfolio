import { useEffect, useState } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const Shop = (props) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  const [products, setProducts] = useState([]);
  console.log(products);

  return (
    <Row xs={1} md={3} className="g-4 my-5">
      {products.map((item, i) => {
        return (
          <Link to={`/shop/${item.id}`} key={i}>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{item.desc} </ListGroupItem>
                <ListGroupItem>{item.price}$</ListGroupItem>
              </ListGroup>
            </Card>
          </Link>
        );
      })}
    </Row>
  );
};

export default Shop;
