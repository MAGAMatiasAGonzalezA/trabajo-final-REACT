import logo from "../../assets/comida.png";
import { Nav } from "../Nav/Nav";
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo construccion" />
            <Nav />
        </header>
    );
};