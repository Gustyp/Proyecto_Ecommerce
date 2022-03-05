import { Card, Col, Container, Button } from "react-bootstrap";

const Item = ({ producto }) => {
    // console.log(producto);
    return (
        <Col xs={6} md={4}>
            <Card>
                <Card.Body className="m-auto">
                    <Container fluid className="d-flex align-items-center">
                        <img className="img-fluid pb-3 m-auto" src={producto.img} alt={producto.nombre} /> 
                    </Container>
                    <Container fluid className="d-flex flex-column align-items-start">
                        <p>Nombre: {producto.nombre}</p>
                        <p>Descripcion: {producto.descripcion}</p>
                        <p>Precio: ${producto.precio}</p>
                    </Container>
                    <Container className="d-flex justify-content-center">
                        <Button className="btn btn-dark">Ver más detalles</Button>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;