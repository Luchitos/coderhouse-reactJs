import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer = ({ nombre, precio, descripcion, url, stock, initial }) => {

    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }

    return <>
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top" alt="Bootstrap Thumbnail First" src={url} />
                <div className="card-block">
                    <h2 className="card-title">
                        {nombre}
                    </h2>
                    <h4>{precio}</h4>
                    <p className="card-text">
                        {descripcion}
                    </p>
                    <ItemCount stock={stock} initial={initial} onAdd={handleAdd}></ItemCount>
                </div>
            </div>
        </div>
    </>
}

export default ItemDetailContainer