import { Item } from "../Item/Item"
import { Count } from "../Count/Count"

export const ItemDetail = ({ item }) => {
    return (
        <Item {...item}>

            <Count />
            <button className="btn primary">Agregar al carrito</button>

        </Item>
    )
}