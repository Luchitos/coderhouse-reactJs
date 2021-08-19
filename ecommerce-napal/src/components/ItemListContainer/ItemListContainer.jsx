import { useEffect, useState } from "react"
import ItemDetailContainerNew from "../ItemDetailContainer/ItemDetailContainerNew"
// import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {


    return <>
        <ItemList />
    </>
}
export default ItemListContainer

// ---- Otras formas------
    // const [itemList, setitemList] = useState([]);
    // useEffect(() => {
    //     const peticion = async () => {
    //         const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=velas%20soja');
    //         const datos = await response.json();
    //         const arr = []
    //         datos.results.forEach(item => {
    //             arr.push(<ItemDetailContainer key={item.id} nombre={item.title} descripcion={item.title} precio={item.price} url={item.thumbnail} stock='10' initial='1' />)
    //         })
    //         setitemList(arr)
    //     }
    //     setTimeout(() => {
    //         peticion()
    //     }, 2000)
    // }, [])


// const getData = () => {
//     // /data/producto.json
//     // 
//     return fetch('https://api.mercadolibre.com/sites/MLA/search?q=velas%20soja')
//         .then(response => {
//             return response.json();
//         })
// }

    // producto = [
    //     {
    //         "id": 0,
    //         "title": "Vela La Pampa",
    //         "price": 1525,
    //         "pictureUrl": "https://arredo.vteximg.com.br/arquivos/ids/215850-800-800/81191Z60084-KN_1.jpg?v=637629189321830000",
    //         "description": "Descripcion del producto"
    //     },
    //     {
    //         "id": 1,
    //         "title": "Vela Buenos aires",
    //         "price": 1265,
    //         "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_660965-MLA46672338020_072021-F.webp",
    //         "description": "Descripcion del producto"
    //     },
    //     {
    //         "id": 2,
    //         "title": "Vela Santa Fe",
    //         "price": 999,
    //         "pictureUrl": "https://arredo.vteximg.com.br/arquivos/ids/215852-800-800/81191Z60084-KN_3.jpg?v=637629189325600000",
    //         "description": "Descripcion del producto"
    //     },
    //     {
    //         "id": 3,
    //         "title": "Vela Mendoza",
    //         "price": 1567,
    //         "pictureUrl": "https://d3cdlnm7te7ky2.cloudfront.net/pub/media/catalog/product/cache/2041cb3a5a9babd51192dc754f75de06/P/R/PR32013BI27542_PS133757_VELA_AROMATICA_GLOSSY_MAGNOLIA_VAINILLA_SZ1.jpg",
    //         "description": "Descripcion del producto"
    //     },
    //     {
    //         "id": 4,
    //         "title": "Vela Salta",
    //         "price": 1456,
    //         "pictureUrl": "https://d3cdlnm7te7ky2.cloudfront.net/pub/media/catalog/product/cache/2041cb3a5a9babd51192dc754f75de06/P/R/PR32013BI27542_PS133757_VELA_AROMATICA_GLOSSY_MAGNOLIA_VAINILLA_SZ1.jpg",
    //         "description": "Descripcion del producto"
    //     },
    //     {
    //         "id": 5,
    //         "title": "Vela Catamarca",
    //         "price": 1345,
    //         "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_905264-MLA44377964696_122020-F.webp",
    //         "description": "Descripcion del producto"
    //     },
    //     {
    //         "id": 6,
    //         "title": "Vela Neuquen",
    //         "price": 1123,
    //         "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_827459-MLA45331123912_032021-F.webp",
    //         "description": "Descripcion del producto"
    //     },
    //     {
    //         "id": 7,
    //         "title": "Vela San Luis",
    //         "price": 1234,
    //         "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_678773-MLA46672067981_072021-O.webp",
    //         "description": "Descripcion del producto"
    //     }
    // ]

    // const [itemList, setitemList] = useState([])
    // //Se suscribe a una variable
    // useEffect(async () => {
    //     const data = await getData()
    //     const arr = []
        // data.results.forEach(item => {
        //     arr.push(<ItemDetailContainer key={item.id} nombre={item.title} descripcion={item.title} precio={item.price} url={item.thumbnail} stock={item.available_quantity} />)
        // })
        // setitemList(arr)
    // }, [])


// const [itemList, setitemList] = useState(new Set())
// //Se suscribe a una variable
// useEffect(async () => {
//     const data = await getData()
//     // console.log(data)
//     data.results.forEach(item => {
//         const arr = [... itemList]
//         arr.push(<ItemDetailContainer key={item.id} nombre={item.title} descripcion={item.title} precio={item.price} url={item.thumbnail} stock={item.available_quantity}/>)
//         setitemList(arr) 
//         setitemList(prev => prev.push)
//     })
// }, [])