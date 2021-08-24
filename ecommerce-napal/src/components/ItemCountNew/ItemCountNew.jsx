import React, { useState } from "react"

const ItemCountNew = ({ props, defaultValue = 0, onAdd = () => {} }) => {
    const [stock, setStock] = useState(props.stock)
    const [unidades, setUnidades] = useState(0)
    const [count , setCount] = useState(defaultValue)

    const handleStock = {
        sumaStock: () => {
            if (stock === 0) {
                alert('no hay mas stock')
            } else {
                setUnidades(unidades + 1)
                setStock(stock - 1)
            }
        },
        restaStock: () => {
            if (unidades === 0) {
                alert('no podes comprar negativos')
            } else {
                setUnidades(unidades - 1)
                setStock(stock + 1)
            }
        }

    }
    useEffect(() => {
        onAdd(count)
    }, [count])
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={handleStock.sumaStock} disabled={stock === '0'}>Agregar +</button>
            <div>{unidades}</div>
            <button type="button" className="btn btn-secondary" onClick={handleStock.restaStock} disabled={stock === '0'}>Quitar -</button>
            <div>Stock disponible: {stock}</div>
        </>
    )
}
export default ItemCountNew