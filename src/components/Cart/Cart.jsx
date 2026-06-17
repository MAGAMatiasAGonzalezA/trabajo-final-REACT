import React from "react";
import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import { Count } from "../Count/Count";

export const Cart = () => {
    const { addItem, updatedItemQuantity, getTotalItems, getTotalPrice, checkOut, cart, removeItem } = useCart();


    if (!cart.length) {
        return <p>No realizaste compras aún, vuelve luego de elegir algun producto</p>
    }

    return (
        <div>
            <h1>Carrito de Compras</h1>

            {cart.map((item) => (
                <Item key={item.id} {...item} >
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <Count count={item.quantity} setCount={(newQuantity) => updatedItemQuantity(item.id, newQuantity)} stock={item.stock} />
                    <button className="btn primary" onClick={() => removeItem(item.id)}>Eliminar</button>
                </Item>
            ))}
            <h3>Total: ${getTotalPrice()}</h3>
            <button className="btn primary" onClick={checkOut} disabled={getTotalItems() === 0}>Finalizar Compra</button>
        </div>
    )
}