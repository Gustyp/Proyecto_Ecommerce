import ItemCount from '../ItemCount';

const ItemListContainer = ({mensaje}) => {
    const stock = 5;
    const inicio = 1;
    return (
        <>
            <div className="container mt-5 pt-5 text-center">
                <h1>{mensaje}</h1>
            </div>
            <ItemCount stock={stock} inicio={inicio} />
        </>
    );
}

export default ItemListContainer;