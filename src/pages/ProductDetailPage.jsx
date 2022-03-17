import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { getProducto } from "../Mock/baseDeDatos";

const ProductDetailPage = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState();
	const [isLoading, setIsLoading] = useState(false);

	console.log(productId);

	useEffect(() => {
		setIsLoading(true);
		getProducto(productId)
			.then((data) => setProduct(data))
			.finally(() => setIsLoading(false));
	}, [productId]);

	return (
		<Container className="vh-80 d-flex flex-column justify-content-center align-items-center">
			<Row>
				{isLoading || !product ? (
					<Container fluid className="h-100 w-100 mt-5 pt-5 pb-3 text-center">
						<p>Cargando...</p>
					</Container>
				) : (
					<Container className="d-flex justify-content-center">
						<ItemDetailContainer producto={product} />
					</Container>
				)}
			</Row>
		</Container>
	);
};

export default ProductDetailPage;
