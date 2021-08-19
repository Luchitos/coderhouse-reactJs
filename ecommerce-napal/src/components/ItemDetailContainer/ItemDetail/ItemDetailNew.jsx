import ItemCountNew from "../../ItemCountNew/ItemCountNew"

const ItemDetailNew = ({title,description,price,pictureUrl,stock} ) => {
    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }
    return <>
        <div>
            <h2>Componente Detail</h2>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h4>${price}</h4>
            <img style={{width:"100px", height:"100px" }} src={pictureUrl} alt={title}/> 
            <ItemCountNew stock={parseInt(stock)} />
        </div>
    </>
}
export default ItemDetailNew