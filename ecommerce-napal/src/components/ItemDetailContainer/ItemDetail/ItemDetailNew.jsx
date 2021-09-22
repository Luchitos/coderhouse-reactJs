import ItemCountNew from "../../ItemCountNew/ItemCountNew"
import React, { useState } from "react"


const ItemDetailNew = ({ title, description, price, pictureUrl, stock }) => {
    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }
    const [itemsCountVisible, setItemCountVisible] = useState(true)
    const [buyButtonVisibility, setbuybuttonsVisibility] = useState(false)
    const [itemsCount, setItemCount] = useState(0)
    const [buy, setBuy] = useState()

    const onAdd = (count) => {
        debugger
        console.log(count)
        setBuy(true)
        setItemCount(count)
    }

    const onBuy = () => {
        setItemCountVisible(false)
    }
    const onFinishBuy = () => {
        setbuybuttonsVisibility(false)
        console.log("Terminar la compra")
    }
    return <>
        <div>
            <h2>Componente Detail</h2>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h4>${price}</h4>
            <img style={{ width: "100px", height: "100px" }} src={pictureUrl} alt={title} />
            {!buy ? <ItemCountNew stocks={parseInt(stock)} onAdd={onAdd} /> : <button>Terminar compra</button>}
        </div>
    </>
}
export default ItemDetailNew