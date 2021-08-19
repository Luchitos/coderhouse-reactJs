import data from '../data/producto'
import Item from './Item/Item.jsx'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"

const ItemList = () => {

    const { categoria } = useParams()
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
            if (categoria != null) {
                const productosFiltrados = items.filter((producto) => producto.categoria === categoria)
                setProductos(productosFiltrados)
                setCargando(false)
            } else {
                setProductos(items)
                setCargando(false)
            }
        })
    }, [categoria])


    return (
        <>
            <div className="container-fluid">
                <div className="row">

                        {cargando ? <h2>CARGANDO PRODUCTOS...</h2> :
                            productos.map((producto) =>
                                <Item key={producto.id}
                                    title={producto.title}
                                    description={producto.description}
                                    price={producto.price}
                                    pictureUrl={producto.pictureUrl}
                                    categoria={producto.categoria}
                                    id={producto.id}
                                    stock={parseInt(producto.stock)
                                    } />
                            )
                        }
                    </div>
                </div>


            
        </>
    )
}

export default ItemList