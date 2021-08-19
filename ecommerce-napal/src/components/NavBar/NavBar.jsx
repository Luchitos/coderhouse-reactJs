import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

export default function NavBar() {

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to="/"><span className="navbar-brand" >NAPAL</span></Link>
            <CartWidget></CartWidget>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="navbar-nav">
                    <Link to="/velas"><li className="nav-item active">
                        <span className="nav-link" >Velas <span className="sr-only"></span></span>
                    </li></Link>
                    <Link to="/floreros"><li className="nav-item">
                        <span className="nav-link" >Floreros</span>
                    </li></Link>
                    <Link to="/contacto"><li className="nav-item">
                        <span className="nav-link" >Contacto</span>
                    </li></Link>
                </ul>
            </div>
        </nav>

    </>)

}