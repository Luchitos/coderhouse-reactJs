
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <NavBar></NavBar>
          <ItemListContainer
            nameProducto="Nombre Producto"
            precio="$200"
            descripcion="Breve descripcion del producto"
            url="https://www.layoutit.com/img/people-q-c-600-200-1.jpg">
          </ItemListContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
