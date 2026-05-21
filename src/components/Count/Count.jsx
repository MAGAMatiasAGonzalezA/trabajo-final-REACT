import "./Count.css";

export const Count = ({ count, setCount, stock }) => {

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };


    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };


    return (
        <div className="count-container">
            <button
                className="btn primary"
                onClick={decrement}
                disabled={count === 0}
            >
                -
            </button>

            <p>Cantidad: {count}</p>

            <button className="btn primary" onClick={increment} disabled={count === stock}>
                +
            </button>
        </div>
    );
};