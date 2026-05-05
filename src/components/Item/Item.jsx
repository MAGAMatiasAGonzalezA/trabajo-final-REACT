import { Count } from "../Count/Count";
import "./Item.css"

export const Item = ({ name, description, price, image, children }) => {
    return (
        <article className="card">
            <img src={image} alt={`foto de ${name}`} />
            <h3 className="name">{name}</h3>
            <p className="description">{description}</p>
            <p className="price">${price}</p>
            {children}
        </article>
    );
};