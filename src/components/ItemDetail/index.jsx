import { Col, Container, Card } from "react-bootstrap";

const ItemDetail = ({ producto }) => {
	return (
		<Col xs={12} sm={6} className="d-flex align-items-center justify-content-center mt-4">
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
				</Card.Body>
			</Card>
		</Col>
    )};

export default ItemDetail;
