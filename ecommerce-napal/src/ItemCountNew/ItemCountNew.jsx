import React, { useState } from "react"

const ItemCountNew = (props)=>{

    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)

    const handleStock = {
        sumaStock:()=>{
            if(stock===0){
                alert('no hay mas stock')
            } else {
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(unidades===0){
                alert('no podes comprar negativos')
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }

    }

    return(
        <div className='button-ItemCountNew'>
            <button onClick={handleStock.sumaStock} disabled={stock==='0'}>+</button>
            <p>{unidades}</p>
            <button onClick={handleStock.restaStock} disabled={stock==='0'}>-</button>
            <p>Stock disponible: {stock}</p>
        </div>
    )
}

export default ItemCountNew