import ItemCountNew from "../../ItemCountNew/ItemCountNew"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../context/cartContext"

const ItemDetailNew = ({ id, titulo, Descripcion, Precio, UrlPicture, Stock }) => {
    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }
    // const [itemsCountVisible, setItemCountVisible] = useState(true)
    // const [buyButtonVisibility, setbuybuttonsVisibility] = useState(false)
    const [itemsCount, setItemCount] = useState(0)
    const [buy, setBuy] = useState()
    const {onAdd} = useContext(Context)

    const agregar = (count) => {
        console.log(count)
        setBuy(true)
        setItemCount(count)
        onAdd({id,titulo,Precio,count},count)
    }
 
    return <>
        <div>
            <h2>Componente Detail</h2>
            <h2>{titulo}</h2>
            <h3>{Descripcion}</h3>
            <h4>${Precio}</h4>
            <img style={{ width: "100px", height: "100px" }} src={UrlPicture} alt={titulo} />
            {!buy ? <ItemCountNew stocks={parseInt(Stock)} onAdd={agregar} /> : <Link to="/cart"><button>Terminar compra</button></Link> }
        </div>
    </>
}
export default ItemDetailNew