// import ItemCount from '../ItemCount';
import { Container } from 'react-bootstrap';
import ItemList from '../ItemList';

const ItemListContainer = ({mensaje}) => {
    // const stock = 5;
    // const inicio = 1;
    return (
        <>
            <Container className='mt-5 pt-5 pb-3 text-center'>
            <h1>{mensaje}</h1>
            </Container>
            <ItemList />
            {/* <ItemCount stock={stock} inicio={inicio} /> */}
        </>
    );
}

export default ItemListContainer;