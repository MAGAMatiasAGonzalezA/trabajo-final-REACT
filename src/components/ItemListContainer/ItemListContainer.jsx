import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getByCategory } from "../../services/productsService";
import "./ItemListContainer.css"

export const ItemListContainer = ({ basePath = "/product" }) => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        getByCategory(category)
            .then((data) => setProducts(data))
            .catch((err) => console.log("Algo salir mal:", err))
            .finally(() => setLoading(false));
    }, [category]);

    if (loading) return <p>Cargando...</p>;

    return (
        <section>

            <ItemList products={products} basePath={basePath} />
        </section>
    );
};