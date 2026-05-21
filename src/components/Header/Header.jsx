import { Link } from "react-router-dom";
import logo from "../../assets/comida.png";
import { Nav } from "../Nav/Nav";
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <Link to={"/"}>
                <img src={logo} alt="logo construccion" />
            </Link>
            <Nav />
        </header>
    );
};