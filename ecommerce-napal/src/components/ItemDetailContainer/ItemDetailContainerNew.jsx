import data from '../../data/producto'
import ItemDetailNew from './ItemDetail/ItemDetailNew'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"

const ItemDetailContainerNew = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        const productos = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                }, 2000)
            })
        }
        productos().then((items) => {
            const producto = items.find(producto => producto.id === parseInt(id))
            setProducto(producto)
            setCargando(false)
        })
    }, [])

    return (<>
        {cargando ? <h4>LOADING PRODUCTO...</h4> :
            <ItemDetailNew
                title={producto.title}
                description={producto.description}
                price={producto.price}
                pictureUrl={producto.pictureUrl}
                stock={parseInt(producto.stock)} />
        }
    </>)
}

export default ItemDetailContainerNew