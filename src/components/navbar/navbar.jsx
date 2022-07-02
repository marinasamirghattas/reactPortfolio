import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar className="p-3" bg="dark" variant="dark">
      <Container>
        <Link className="text-decoration-none text-white" to="/">
          Home
        </Link>
        <Nav className="ms-auto d-flex justify-content-between">
          <Link className="m-3 text-decoration-none text-white" to="/shop">
            Products
          </Link>
          <Link className="m-3 text-decoration-none text-white" to="/counter">
            Donation
          </Link>
          <Link className="m-3 text-decoration-none text-white" to="/about">
            About
          </Link>
          <Link className="m-3 text-decoration-none text-white" to="/todo">
            ToDo
          </Link>
          <Link className="m-3 text-decoration-none text-white" to="/contactUs">
            Contact Us
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
