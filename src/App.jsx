import './scss/App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    const mensaje = "Este es mi ItemListContainer";
    return (
        <>
            <NavBar />
            <ItemListContainer mensaje={mensaje} />
        </>
    )
}

export default App;