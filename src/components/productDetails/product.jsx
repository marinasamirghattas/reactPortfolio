import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";

const Product = () => {
  const urlParams = useParams();
  console.log("kkkkk", urlParams);

  useEffect(() => {
    fetchProduct();
  }, []);

  const [product, setProduct] = useState(null);

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  return (
    <>
      {product ? (
        <Card className="w-25 mb-5 bg-dark text-white text-center my-5 mx-auto">
          <Card.Img src={product.image} alt="Card image" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.desc}</Card.Text>
            <Card.Text>{product.price}$</Card.Text>
          </Card.Body>
        </Card>
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

export default Product;
