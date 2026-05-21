import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import { Count } from "../Count/Count";

export const ItemDetail = ({ item }) => {
    const navigate = useNavigate();
    const { addItem } = useCart();
    const [count, setCount] = useState(0);

    const handleAddToCart = () => {
        if (count === 0) {
            alert("Selecciona al menos 1 articulo \nLuego agrega")
            return
        }
        addItem(item, count)
        navigate("/")
    };



    return (
        <Item {...item}>

            <Count count={count} setCount={setCount} stock={item.stock} />
            <button className="btn primary" onClick={handleAddToCart}>Agregar al carrito</button>

        </Item>
    )
}