import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

const CartWidget = () => {
    const [show, setShow] = useState(false);
    const cerrarCarito = () => setShow(false);
    const mostrarCarrito = () => setShow(true);

    return (
        <>
            <FontAwesomeIcon onClick={mostrarCarrito} icon={faCartShopping} className="carrito-de-compras"/>
            <Offcanvas show={show} onHide={cerrarCarito} placement="end" backdrop={false}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Aquí irian los artículos que tengo agregados hasta el momento.
            </Offcanvas.Body>
            </Offcanvas>
        </>
        );
}

export default CartWidget;