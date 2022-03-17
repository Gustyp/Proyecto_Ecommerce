import { Container } from "react-bootstrap";
import ItemListContainer from "../components/ItemListContainer";


const ProductsPage = () => {
    const mensaje = "Este es mi ItemListContainer";
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center">
			<h1>ProductsPage</h1>
			<ItemListContainer mensaje={mensaje} />
		</Container>
	);
};

export default ProductsPage;
