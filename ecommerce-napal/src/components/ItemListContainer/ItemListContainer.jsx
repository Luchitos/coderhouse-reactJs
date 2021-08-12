import { useEffect } from "react"

import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"


const ItemListContainer = () => {
    //Se suscribe a una variable
    useEffect(() => {

    }, [])
    return <>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <ItemDetailContainer
                                nombre="Nombre Producto"
                                precio="$200"
                                descripcion="Breve descripcion del producto"
                                url="https://www.layoutit.com/img/people-q-c-600-200-1.jpg"
                                stock="5"
                                initial="1"></ItemDetailContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default ItemListContainer



// Para esta entrega está todo bien pero me está faltando un punto de la consigna,
//  que es la prop que tenés que pasarle al ItemListContainer.
//   A lo que me refiero es que el mensaje que está hardcodeado en en componente 
//   ItemListContainer venga desde su padre cómo una prop. (en este caso App.js) 

// Y fijate si podes sumarle también que no sea solo un tag <p>,
//  sino algún div con un h1 adentro para hacerlo un poquito más complejo. 


