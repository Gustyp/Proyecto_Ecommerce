import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getProductos } from "../../Mock/baseDeDatos";
import Item from "../Item";

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false);

    useEffect(() => {
        setEstaCargando(true);
        getProductos()
        .then((data) => setProductos(data))
        .catch((error) => console.error(error))
        .finally(() => setEstaCargando(false));
    }, []);

    return (
        <Container>
            <Row>
                {estaCargando ? (
                    <Container fluid className="h-100 w-100">
                        <p className="text-center">Cargando...</p>
                    </Container>
                ) : (
                    productos.map((producto) => <Item key={producto.id} producto={producto} />)
                )}
            </Row>
        </Container>
    );
}
export default ItemList;