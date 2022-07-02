import { useEffect } from "react";
import { Card, ListGroupItem, ListGroup, Spinner, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/features/shopSlice";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.shopSlice.products);
  const loading = useSelector((state) => state.shopSlice.loading);

  return (
    <>
      {!loading ? (
        <Row xs={1} md={3} className="g-4 my-5 mx-auto py-5">
          {products.map((item, i) => {
            return (
              <Link
                className="text-decoration-none"
                to={`/shop/${item.id}`}
                key={i}
              >
                <Card style={{ width: "25rem", height: "27rem" }}>
                  <Card.Img
                    className="mx-auto"
                    style={{ width: "10rem", height: "15rem" }}
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title className=" text-dark">{item.title}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush ">
                    {/* <ListGroupItem>{item.description} </ListGroupItem> */}
                    <ListGroupItem className=" text-white bg-dark">
                      {item.price}$
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Link>
            );
          })}
        </Row>
      ) : (
        <Spinner
          className="mx-auto d-block my-5"
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default Shop;
