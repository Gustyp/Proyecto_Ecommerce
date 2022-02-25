import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ItemCount = ({stock, inicio}) => {
    const [contador, setContador] = useState(inicio);
    const [stockDisponible, setStockDisponible] = useState(stock);
    const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(0);

    const incrementar = () => {
        if (contador < stockDisponible) return setContador(contador+1);

    }

    const decrementar = () => {
        if (contador > 1) return setContador(contador-1);
    }

    const agregarAlCarrito = () => {
        if (stockDisponible > 0){
            setAgregadoAlCarrito(agregadoAlCarrito+contador);
            setStockDisponible(stockDisponible-contador);
        }
        setContador(inicio);
    }

    const mostrarStockDisponible = () => {
        return (stockDisponible > 0) ? document.querySelector(`#stockDisponible`).innerHTML = `Stock disponible: <strong>${stockDisponible}</strong>` : (document.querySelector(`#stockDisponible`).innerHTML = `¡Sin stock!`, setContador(0));
    };

    const mostrarProductosEnCarrito = () => {
        (agregadoAlCarrito === 0) ? document.querySelector(`#agregadoAlCarrito`).innerHTML = `No hay productos en el carrito.` : document.querySelector(`#agregadoAlCarrito`).innerHTML = `Productos en el carrito: <strong>${agregadoAlCarrito}</strong>`;
    };

    useEffect(mostrarStockDisponible, [contador, stockDisponible]);
    useEffect(mostrarProductosEnCarrito, [agregadoAlCarrito])

    return (
        <Container className="mt-5">
            <Row>
                <Col className="m-auto mt-5">
                    <Card className="mt-5 item-count">
                        <Card.Header className="text-center">
                            <small id="stockDisponible"></small>
                        </Card.Header>
                        <Card.Body className="d-flex flex-column gap-3">
                            <p className="text-center">Producto random</p>
                            <div className="d-flex">
                                <Button className="btn btn-primary" onClick={()=>decrementar()}> - </Button>
                                <input className="m-auto text-center input-contador" value={contador} disabled/>
                                <Button className="btn btn-warning" onClick={()=>incrementar()}> + </Button>
                            </div>
                            <Button className="btn btn-dark" onClick={()=>agregarAlCarrito()}>Agregar al carrito</Button>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <small id="agregadoAlCarrito"></small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemCount;