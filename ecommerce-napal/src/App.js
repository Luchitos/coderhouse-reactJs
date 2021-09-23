
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainerNew from './components/ItemDetailContainer/ItemDetailContainerNew';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ItemList from './components/ItemList/ItemList';
// import ContactForm from './components/ContactForm/ContactForm'
import { Link } from 'react-router-dom';
import Cart from './components/Cart/Cart'
import { CartFunction } from './context/cartContext'


function App() {

  return (
    <BrowserRouter>
      <CartFunction>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <NavBar></NavBar>
              <Switch>
                <Route exact path="/">
                  <ItemListContainer />
                </Route>
                <Route path="/cart" exact>
                  <Cart />
                </Route>
                <Route path="/:categoria/:id" exact>
                  <ItemDetailContainerNew />
                </Route>
                <Route path="/:categoria/" exact>
                  <ItemList />
                </Route>
                <Link to="/Cart">
                 <p>Cart</p>
                </Link>
              </Switch>
            </div>
          </div>
        </div>
      </CartFunction>
    </BrowserRouter>
  );
}

export default App;



// const items = productos.map(productos => <ItemListContainer nameProducto={productos.nombre} precio={productos.precio} url={productos.url}/>)