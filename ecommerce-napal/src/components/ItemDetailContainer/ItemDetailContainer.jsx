
import ItemDetail from "./ItemDetail/ItemDetail"

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
                    <button type="button" className="btn btn-primary"> Detalles
                        <ItemDetail nombre={nombre} stock={stock} initial={initial} descripcion={descripcion} />
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default ItemDetailContainer