import data from '../../data/producto'
import Item from './Item/Item.jsx'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
import { allItem, itemCat } from '../../firebase'


const ItemList = () => {

    const { categoria } = useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {

            if (categoria != null) {
                const items = itemCat(categoria)
                items.then((data) => {
                    const itemAux = []
                    data.forEach(item => {
                        itemAux.push({id:item.id, title:item.data().titulo, description:item.data().Descripcion, stock:item.data().Stock, pictureUrl:item.data().UrlPicture})
                    });

                    setProductos(itemAux)
                    setCargando(false)
                })
            } else {
                const items = allItem()
                items.then((data) => {
                    const itemAux = []
                    data.forEach(item => {
                        itemAux.push({id:item.id, title:item.data().titulo, description:item.data().Descripcion, stock:item.data().Stock, pictureUrl:item.data().UrlPicture})
                    });

                    setProductos(itemAux)
                    setCargando(false)
                })
            }
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