import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
    const { getTotalPrice, checkOut } = useCart()

    const total = getTotalPrice();

    return (
        <>
            <p>Total a Pagar: ${total}</p>
            <button className="btn bg-success primary" onClick={checkOut} disable={total === 0}>
                Finalizar Compra
            </button>
        </>
    );
};