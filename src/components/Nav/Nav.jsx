import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./Nav.css";

export const Nav = () => {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    return (
        <nav>
            {/* <ul className={styles["nav-list"]}> */}
            <ul className="nav-list">
                <li><Link to={"/"}>Home</Link></li>
                <li>
                    <Link to={"/category/entrada"}>Entradas</Link>
                </li>
                <li>
                    <Link to={"/category/plato principal"}>Platos Principales</Link>
                </li>
                <li>
                    <Link to={"/category/parrilla"}>Parrilla</Link>
                </li>
                <li>
                    <Link to={"/category/pizza"}>Pizzas</Link>
                </li>
                <li>
                    <Link to={"/category/postre"}>Postres</Link>
                </li>
                <li><Link to={"/carrito"}>
                    Carrito {totalItems > 0 && <span className="incart">{totalItems}</span>}
                </Link></li>
            </ul>
        </nav>
    );
};