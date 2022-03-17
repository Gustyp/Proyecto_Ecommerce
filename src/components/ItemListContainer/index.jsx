// import ItemCount from '../ItemCount';
import { Container } from 'react-bootstrap';
import ItemList from '../ItemList';

const ItemListContainer = ({mensaje}) => {
    return (
        <Container className='text-center'>
            <h1>{mensaje}</h1>
            <ItemList />
        </Container>
    );
}

export default ItemListContainer;