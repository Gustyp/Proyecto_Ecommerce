import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <Navbar sticky="top" collapseOnSelect expand='lg' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link className="me-3 sinDecoracion" to="/">E-commerce</Link></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <NavLink className="me-3 sinDecoracion" to="/">Home</NavLink>
                        <NavLink className="me-3 sinDecoracion" to="/products">Productos</NavLink>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;