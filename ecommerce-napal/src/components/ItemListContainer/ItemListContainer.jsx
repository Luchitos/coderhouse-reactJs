import { useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {
    //Se suscribe a una variable
    useEffect(() => {

    }, [])
    return <>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" alt="Bootstrap Thumbnail First" src={props.url} />
                                <div class="card-block">
                                    <h2 class="card-title">
                                        {props.nameProducto}
                                    </h2>
                                    <h4>{props.precio}</h4>
                                    <p class="card-text">
                                        {props.descripcion}
                                    </p>
                                    <ItemCount stock={props.stock}></ItemCount>
                                </div>
                            </div>
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


