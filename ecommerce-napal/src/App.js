
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
          <ItemListContainer></ItemListContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
