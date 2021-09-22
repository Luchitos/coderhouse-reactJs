import ItemCountNew from "../../ItemCountNew/ItemCountNew"
import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../context/cartContext"

const ItemDetailNew = ({ id, title, description, price, pictureUrl, stock }) => {
    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }
    const [itemsCountVisible, setItemCountVisible] = useState(true)
    const [buyButtonVisibility, setbuybuttonsVisibility] = useState(false)
    const [itemsCount, setItemCount] = useState(0)
    const [buy, setBuy] = useState()
    const {onAdd} = useContext(Context)

    const agregar = (count) => {
        console.log(count)
        setBuy(true)
        setItemCount(count)
        onAdd({id,title,price,count},count)
    }
 
    return <>
        <div>
            <h2>Componente Detail</h2>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h4>${price}</h4>
            <img style={{ width: "100px", height: "100px" }} src={pictureUrl} alt={title} />
            {!buy ? <ItemCountNew stocks={parseInt(stock)} onAdd={agregar} /> : <Link to="/cart"><button>Terminar compra</button></Link> }
        </div>
    </>
}
export default ItemDetailNew