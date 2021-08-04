import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

// const NavBar = () => {
//     return <> 

//     </>
// }


export default function NavBar() {
    const handleClick = (event) => {
        console.log(event);
    }
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <button onClick={handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="navbar-toggler-icon">NAPAL</span>
            </button> <a onClick={handleClick} className="navbar-brand" href="#">Napal</a>
            <CartWidget></CartWidget>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Velas <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Floreros</a>
                    </li>
                </ul>
            </div>
        </nav>

    </>)

}
// export default NavBar