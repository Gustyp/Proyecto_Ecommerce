import { Row } from "react-bootstrap";
import ItemDetail from "../ItemDetail";
import ItemCount from "../ItemCount";

const ItemDetailContainer = ({producto}) => {
	const stock = Math.floor(Math.random() * 11);
    const inicio = 1;
	return (
		<Row className="mt-5">
			<ItemDetail producto={producto}/>
			<ItemCount stock={stock} inicio={inicio} />
		</Row>
	);
};

export default ItemDetailContainer;