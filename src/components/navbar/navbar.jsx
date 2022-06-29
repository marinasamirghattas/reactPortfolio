import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar className="p-4" bg="dark" variant="dark">
      <Container>
        <Link to="/">Home</Link>
        <Nav className="ms-auto d-flex justify-content-between">
          <Link className="m-3" to="/shop">
            Products
          </Link>
          <Link className="m-3" to="/counter">
            Donat
          </Link>
          <Link className="m-3" to="/about">
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
