import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css"

export const ItemList = ({ products, basePath = "/product" }) => {
    if (!products.length) {
        return <p>No hay productos</p>;
    }

    return (
        <div className="container">
            {products.map((product) => (
                <Link to={`${basePath}/${product.id}`} key={product.id}>
                    <Item {...product} />
                </Link>
            ))}
        </div>
    );
};