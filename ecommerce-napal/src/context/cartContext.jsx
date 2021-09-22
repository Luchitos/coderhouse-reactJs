import React, { useState } from "react";

export const Context = React.createContext();

const CartFunction = ({ children }) => {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const onAdd = (producto, cantidad) => {
        const itemExist = cart.find(item => item.id === producto.id)
        if (!itemExist) {
            setCart([...cart, { id: producto.id, nombre: producto.title, precio: producto.price, cantidad: cantidad, subTotal: (producto.price * producto.cantidad) }])
            setUnidades(unidades + 1)
            setTotal(total + (producto.precio * producto.cantidad))
        }
    }

    return <Context.Provider value={{ cart, unidades, total, onAdd }}>
        {children}
    </Context.Provider>
}

export { CartFunction }