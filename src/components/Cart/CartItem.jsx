import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import { Count } from "../Count/Count";

export const CartItem = ({ item }) => {
    const { removeItem, updatedItemQuantity } = useCart();

    return (
        <Item {...item}>
            <Count count={item.quantity} setCount={(newQuantity) => updatedItemQuantity(item.id, newQuantity)} stock={item.stock} />
            <button className="btn bg-delete primary" onClick={() => removeItem(item.id)} >
                Eliminar
            </button>
        </Item>
    );
};