import { useEffect, useState } from "react"

import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const getData = () => {
    // /data/producto.json
    // 
    return fetch('https://api.mercadolibre.com/sites/MLA/search?q=velas%20soja')
        .then(response => {
            return response.json();
        })
}


const ItemListContainer = () => {
    const [itemList, setitemList] = useState([])
    //Se suscribe a una variable
    useEffect(async () => {
        const data = await getData()
        const arr = []
        data.results.forEach(item => {
            arr.push(<ItemDetailContainer key={item.id} nombre={item.title} descripcion={item.title} precio={item.price} url={item.thumbnail} stock={item.available_quantity} />)
        })
        setitemList(arr)
    }, [])

    return <>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">

                        {itemList}
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default ItemListContainer



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