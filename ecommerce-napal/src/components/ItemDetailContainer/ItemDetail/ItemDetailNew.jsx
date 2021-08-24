import ItemCountNew from "../../ItemCountNew/ItemCountNew"
import React, { useState } from "react"


const ItemDetailNew = ({title,description,price,pictureUrl,stock} ) => {
    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }
    const [itemsCountVisible, setItemCountVisible] = useState(true)
    const [itemsCount, setItemCount] = useState(0)

    const onAdd = (count) =>{
        setItemCount(count)
    }
    const onAddToCart = () => {
        setItemCountVisible(false)
    }
    const onBuy = () => {
        setItemCountVisible(false)
    }
    const onFinishBuy = () => {
        console.log("Terminar la compra")
    }
    return <>
        <div>
            <h2>Componente Detail</h2>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h4>${price}</h4>
            <img style={{width:"100px", height:"100px" }} src={pictureUrl} alt={title}/> 
            {itemsCountVisible && <ItemCountNew stock={parseInt(stock)} /> }
            <br/>
            <br/>
            <button onClick={onAddToCart}> Agregar al carruto</button>
            <button onClick={onBuy}> Comprar </button>
            <button onClick={onFinishBuy}> Finalizar Compra </button>
        </div>
    </>
}
export default ItemDetailNew