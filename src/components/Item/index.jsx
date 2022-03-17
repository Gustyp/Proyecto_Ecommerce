import { Card, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Item = ({ producto }) => {
    const navigate = useNavigate();
    return (
        <Col xs={12} sm={6} md={4}>
            <Card>
                <Card.Body className="m-auto">
                    <Container fluid className="d-flex align-items-center">
                        <img className="img-fluid pb-3 m-auto" src={producto.img} alt={producto.nombre} /> 
                    </Container>
                    <Container fluid className="d-flex flex-column align-items-start">
                        <p>Nombre: {producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                    </Container>
                    <Container className="d-flex justify-content-center">
                        <Button className="btn btn-dark" onClick={() => navigate(`/products/${producto.id}`)}>Ver más detalles</Button>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;