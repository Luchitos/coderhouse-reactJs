import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( nombre, precio, descripcion, url, stock, initial ) => {

    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }
    return <>
        <p className="card-text">
            {descripcion}
        </p>
        <ItemCount stock={stock} initial={initial} onAdd={handleAdd}></ItemCount>

    </>
}
export default ItemDetail