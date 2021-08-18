import data from '../data/producto'
import Item from './Item/Item.jsx'
import React, { useState, useEffect } from 'react'

const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const productos = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                }, 2000)
            })
        }
        productos().then((items) => {
            setProductos(items)
            setCargando(false)
        })
    }, [])

    return (<>
        {cargando ? <h2>CARGANDO PRODUCTOS</h2> :
            productos.map((producto) =>
                <Item key={producto.id}
                    title={producto.title}
                    description={producto.description}
                    price={producto.price} />)
        }
    </>)
}

export default ItemList