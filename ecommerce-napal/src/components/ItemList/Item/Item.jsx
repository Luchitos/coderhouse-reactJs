import ItemCountNew from "../../ItemCountNew/ItemCountNew"
import { Link } from 'react-router-dom'

const Item = ({ title, description, price, pictureUrl, stock, categoria, id }) => {
    const handleAdd = (count) => {
        console.log("La cantidad a agregar es: ", count)
    }
    return <>
        < div className="col-md-4" >
            <div className="card">

                <img className="card-img-top" alt="Bootstrap Thumbnail First" src={pictureUrl} />
                <div className="card-block">
                    <Link to={`/${categoria}/${id}`}>
                        <h2 className="card-title">
                            {title}
                        </h2>
                    </Link>
                    <h4>${price}</h4>
                    <ItemCountNew stock={parseInt(stock)} />
                </div>

            </div>
        </div>
    </>
}
export default Item

