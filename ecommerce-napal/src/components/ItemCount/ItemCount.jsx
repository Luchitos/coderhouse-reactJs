import { useEffect, useState } from "react"

const ItemCount = ({stock, initial}) => {
    //Es recomendable que sea const
    const [count, setCount] = useState(parseInt(initial))
    //UseState devuelve un array 
    
    //Sintaxis handle
    const handleOnClickSuma= () =>{
        if(count < parseInt(stock)){setCount(count+1)}
    }   

    const handleOnClickResta = () =>{
        if(count > 0 )setCount(count-1)
    }

    return <>
        <button type="button" class="btn btn-primary"  onClick={handleOnClickSuma}>+</button>
        <button type="button" class="btn btn-secondary" onClick={handleOnClickResta}>-</button>
        <div>{count}</div>
    </>

    //Otra forma de resolverlo
    // return <>
    //     <button type="button" class="btn btn-primary"  onClick={() => {if(count < props.stock)setCount(count+1)}}>+</button>
    //     <button type="button" class="btn btn-secondary" onClick={() => {if(count > 0 )setCount(count-1)}}>-</button>
    //     <div>{count}</div>
    // </>
}

export default ItemCount