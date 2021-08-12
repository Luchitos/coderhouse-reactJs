import { useEffect, useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
    //Es recomendable que sea const
    const [count, setCount] = useState(parseInt(initial))
    //UseState devuelve un array 

    const handleOperation = (op) => {

        // op === "+" ? setCount(count+1) : setCount(count-1)
        if(op == "+")
            if(count < stock)setCount(count+1)
        if(op == "-")
            if(count > 1)setCount(count-1)
    }

    return <>
        <button type="button" class="btn btn-primary"  onClick={() => handleOperation("+")}>+</button>
        <button type="button" class="btn btn-secondary" onClick={() => handleOperation("-")}> -</button >
        <div>{count}</div>
        <button type="button" class="btn btn-info" onClick={() => onAdd(count)}>Agregar al carrito</button >
    </>
}

export default ItemCount


// Otras formas de resolver
 // //Sintaxis handle
    // const handleOnClickSuma= () =>{
    //     if(count < parseInt(stock)){setCount(count+1)}
    // }   

    // const handleOnClickResta = () =>{
    //     if(count > 0 )setCount(count-1)
    // }

    // return <>
    //     <button type="button" class="btn btn-primary"  onClick={(handleOnClickSuma)}>+</button>
    //     <button type="button" class="btn btn-secondary" onClick={handleOnClickResta}>-</button>
    //     <div>{count}</div>
    // </>

    //Otra forma de resolverlo
    // return <>
    //     <button type="button" class="btn btn-primary"  onClick={() => {if(count < props.stock)setCount(count+1)}}>+</button>
    //     <button type="button" class="btn btn-secondary" onClick={() => {if(count > 0 )setCount(count-1)}}>-</button>
    //     <div>{count}</div>
    // </>