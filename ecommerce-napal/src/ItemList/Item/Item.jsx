const Item = ({title,description,price} ) => {

    return <>
        <div>
            <h2>Componente Item</h2>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h4>${price}</h4>
        </div>
    </>
}
export default Item