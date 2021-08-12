import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer = ({ nombre, precio, descripcion, url, stock, initial }) => {

    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }

    return <>
        <div class="col-md-4">
            <div class="card">
                <img class="card-img-top" alt="Bootstrap Thumbnail First" src={url} />
                <div class="card-block">
                    <h2 class="card-title">
                        {nombre}
                    </h2>
                    <h4>{precio}</h4>
                    <p class="card-text">
                        {descripcion}
                    </p>
                    <ItemCount stock={stock} initial={initial} onAdd={handleAdd}></ItemCount>
                </div>
            </div>
        </div>
    </>
}

export default ItemDetailContainer