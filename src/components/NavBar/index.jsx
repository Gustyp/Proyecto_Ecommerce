import { Container, Nav, Navbar} from "react-bootstrap";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand='lg' bg="dark" variant="dark" className="navbar">
            <Container>
                <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link className="me-5" href="#home">Home</Nav.Link>
                        <Nav.Link className="me-3" href="#seccion1">Sección 1</Nav.Link>
                        <Nav.Link className="me-3" href="#seccion2">Sección 2</Nav.Link>
                        <Nav.Link className="me-3" href="#seccion3">Sección 3</Nav.Link>
                        <Nav.Link className="me-3" href="#seccion4">Sección 4</Nav.Link>
                        <Nav.Link className="me-3" href="#seccion5">Sección 5</Nav.Link>
                        <Nav.Link className="me-3" href="#seccion6">Sección 6</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;