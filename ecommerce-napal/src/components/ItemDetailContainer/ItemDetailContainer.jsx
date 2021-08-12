import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer = ({ props }) => {

    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }

    return <>
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
                <ItemCount stock={props.stock} initial={props.initial} onAdd={handleAdd}></ItemCount>
            </div>
        </div>
    </>
}

export default ItemDetailContainer