import React, {useContext } from "react";
import { Context } from "../../context/cartContext";

const Cart = () =>{

    const {cart} = useContext(Context)
    return (
        <>
            {cart ? cart.map((item) => <div>nombre: {item.nombre},precio: {item.precio},subtotal: {item.subTotal}</div>):<div>El carrito se encuentra vacio</div>}
        </>
    )
}
export default Cart