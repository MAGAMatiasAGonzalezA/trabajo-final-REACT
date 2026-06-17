import { useParams, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../services/productsService";

export const DeleteProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();


    const handleDelete = async () => {
        await deleteProduct(id)
        navigate("/admin/dashboard")
    }

    return (
        <div className="delete-actions">
            <button className="btn bg-delete" onClick={handleDelete}>
                🗑️ Confirmar eliminación
            </button>
            <button className="btn" onClick={() => navigate(-1)}>
                Cancelar
            </button>
        </div>
    )
}