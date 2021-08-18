import ItemCountNew from "../../ItemCountNew/ItemCountNew"

const Item = ({title,description,price,pictureUrl,stock} ) => {
    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }
    return <>
        <div>
            <h2>Componente Item</h2>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h4>${price}</h4>
            <h4>{pictureUrl}</h4> 
            <ItemCountNew stock={parseInt(stock)} />
        </div>
    </>
}
export default Item