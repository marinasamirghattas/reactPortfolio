import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Product = () => {
  const urlParams = useParams();
  console.log("kkkkk", urlParams);

  useEffect(() => {
    fetchProduct();
  }, []);

  const [product, setProduct] = useState({});

  const fetchProduct = () => {
    fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  return (
    <Card className="w-25 mb-5 bg-dark text-white text-center my-5 mx-auto">
      <Card.Img src={product.image} alt="Card image" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.desc}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
