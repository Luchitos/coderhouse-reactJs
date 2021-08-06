import { useEffect, useState } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(0)


    return <>
        <button type="button" class="btn btn-primary"  onClick={() => {if(count < props.stock)setCount(count+1)}}>+</button>
        <button type="button" class="btn btn-secondary" onClick={() => {if(count > 0 )setCount(count-1)}}>-</button>
        <div>{count}</div>
    </>
}

export default ItemCount