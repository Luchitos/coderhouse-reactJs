
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainerNew from './components/ItemDetailContainer/ItemDetailContainerNew';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import ItemList from './components/ItemList/ItemList';
import ContactForm from './components/ContactForm/ContactForm';



function App() {

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path="/:categoria/:id" exact>
                <ItemDetailContainerNew />
              </Route>
              <Route path="/:categoria/" exact>
                <ItemList />
              </Route>
              <Route path="/contacto" exact>
                <ContactForm/>
              </Route>
              
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



// const items = productos.map(productos => <ItemListContainer nameProducto={productos.nombre} precio={productos.precio} url={productos.url}/>)