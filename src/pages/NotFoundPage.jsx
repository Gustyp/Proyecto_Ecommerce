import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
	<Container className="vh-80 d-flex flex-column justify-content-center align-items-center">
		<h1>Error 404</h1>
		<Link to="/">Volver a la Home</Link>
	</Container>
	);
};

export default NotFoundPage;
