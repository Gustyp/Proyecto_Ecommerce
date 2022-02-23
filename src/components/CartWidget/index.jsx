import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        // <a className="nav-link active m-auto" aria-current="page" href=""><FontAwesomeIcon icon={faCartShopping} /></a>
        <FontAwesomeIcon icon={faCartShopping} className="carrito-de-compras"/>
    );
}

export default CartWidget;