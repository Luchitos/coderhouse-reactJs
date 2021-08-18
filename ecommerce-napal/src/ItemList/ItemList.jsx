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
        {cargando ? <h4>LOADING...</h4>:
            productos.map((producto) =>
                <Item key={producto.id}
                    title={producto.title}
                    description={producto.description}
                    price={producto.price} 
                    pictureUrl={producto.pictureUrl}
                    stock={parseInt(producto.stock)}/>)
        }
    </>)
}

export default ItemList