import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {

    const context = useContext(CartContext);

    if (!context) {
        throw new Erro("useCart debe ser usado dentro de un CartProvider");
    }
    return context
}


export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);


    const isInCart = (item) => {
        const InCart = cart.some(element => element.id === item.id)
        return InCart
    };


    const addItem = (item, quantity) => {
        if (isInCart(item)) {
            const updatedCart = cart.map(element => element.id === item.id ? { ...element, quantity: element.quantity + quantity } : element)
            setCart(updatedCart)
            alert("Cantidad del producto añadido al carrito")
            return
        } else {
            setCart(prevCart => [...prevCart, { ...item, quantity: quantity }])
        }
        alert("Producto agregado al carrito")
    };


    const updatedItemQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        const updatedCart = cart.map(element => element.id === id ? { ...element, quantity: newQuantity } : element)
        setCart(updatedCart)
    };


    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.id !== id)
        setCart(updatedCart)
        alert("Producto eliminado del carrito")
    };


    const getTotalItems = () => {
        return cart.reduce((acc, element) => acc + element.quantity, 0)
    };


    const getTotalPrice = () => {
        return cart.reduce((acc, element) => acc + (element.price * element.quantity), 0)
    };


    const clearCart = () => {
        setCart([])
    };


    const checkOut = () => {
        alert("Compra realizada con exito")
        clearCart()
        navigate("/")
    };


    const values = { cart, addItem, updatedItemQuantity, removeItem, getTotalItems, getTotalPrice, checkOut }


    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}