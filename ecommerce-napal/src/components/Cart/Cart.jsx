import React, {useContext } from "react";
import { Context } from "../../context/cartContext";

const Cart = () =>{

    const {cart, total, remove, clear} = useContext(Context)
    return (
        <>
            {cart.length>0 ? cart.map((item) =>
            <div>nombre: {item.nombre},
            precio: {item.precio},
            subtotal: {item.subTotal},
            total: {item.total}
            <button onClick={()=> remove(item.id,item.cantidad, item.precio)}>Eliminar Producto</button>
            </div>
            )
            :<><div>El carrito se encuentra vacio</div>
            <button onClick={()=> clear()}>Vaciar Carrito</button></>}
        </>
    )
}
export default Cart