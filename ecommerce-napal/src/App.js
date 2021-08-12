
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
  <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <NavBar></NavBar>
          <ItemListContainer/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;


// const productos = [
//   {
//     "id": 0,
//     "nombre": "Vela La Pampa",
//     "precio": 1525,
//     "url": "https://arredo.vteximg.com.br/arquivos/ids/215850-800-800/81191Z60084-KN_1.jpg?v=637629189321830000",
//     "vendido": false
//   },
//   {
//     "id": 1,
//     "nombre": "Vela Buenos aires",
//     "precio": 1265,
//     "url": "https://http2.mlstatic.com/D_NQ_NP_2X_660965-MLA46672338020_072021-F.webp",
//     "vendido": false
//   },
//   {
//     "id": 2,
//     "nombre": "Vela Santa Fe",
//     "precio": 999,
//     "url": "https://arredo.vteximg.com.br/arquivos/ids/215852-800-800/81191Z60084-KN_3.jpg?v=637629189325600000",
//     "vendido": false
//   },
//   {
//     "id": 3,
//     "nombre": "Vela Mendoza",
//     "precio": 1567,
//     "url": "https://d3cdlnm7te7ky2.cloudfront.net/pub/media/catalog/product/cache/2041cb3a5a9babd51192dc754f75de06/P/R/PR32013BI27542_PS133757_VELA_AROMATICA_GLOSSY_MAGNOLIA_VAINILLA_SZ1.jpg",
//     "vendido": false
//   },
//   {
//     "id": 4,
//     "nombre": "Vela Salta",
//     "precio": 1456,
//     "url": "https://d3cdlnm7te7ky2.cloudfront.net/pub/media/catalog/product/cache/2041cb3a5a9babd51192dc754f75de06/P/R/PR32013BI27542_PS133757_VELA_AROMATICA_GLOSSY_MAGNOLIA_VAINILLA_SZ1.jpg",
//     "vendido": false
//   },
//   {
//     "id": 5,
//     "nombre": "Vela Catamarca",
//     "precio": 1345,
//     "url": "https://http2.mlstatic.com/D_NQ_NP_2X_905264-MLA44377964696_122020-F.webp",
//     "vendido": false
//   },
//   {
//     "id": 6,
//     "nombre": "Vela Neuquen",
//     "precio": 1123,
//     "url": "https://http2.mlstatic.com/D_NQ_NP_2X_827459-MLA45331123912_032021-F.webp",
//     "vendido": false
//   },
//   {
//     "id": 7,
//     "nombre": "Vela San Luis",
//     "precio": 1234,
//     "url": "https://http2.mlstatic.com/D_NQ_NP_678773-MLA46672067981_072021-O.webp",
//     "vendido": false
//   }
// ]

// const items = productos.map(productos => <ItemListContainer nameProducto={productos.nombre} precio={productos.precio} url={productos.url}/>)