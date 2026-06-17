import { useParams, useNavigate } from "react-router-dom";
import "./ProductFormContainer.css";
import { useState, useEffect } from "react";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProducts";
import { uploadImage } from "../../services/uploadImage"
import { createProduct, updateProduct, getProductById } from "../../services/productsService";


export const ProductFormContainer = ({ updateMode }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        stock: "",
    });

    // Si es edición, cargo el producto

    useEffect(() => {
        if (!updateMode || !id) return;
        getProductById(id).then((data) => {
            setProduct({
                name: data.name,
                price: data.price,
                category: data.category,
                description: data.description,
                stock: data.stock,
                image: data.image,
            });
        });
    }, [id]);




    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;

        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //modificamos los estados para el "loading mientras se procesa"
        setErrors({});
        setLoading(true);

        if (updateMode) {
            //validar
            const newErrors = validateProduct({ ...product });
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setLoading(false);
                return;
            }
        } else {
            //validar
            const newErrors = validateProduct({ ...product, image: file });
            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setLoading(false);
                return;
            }
        }

        try {
            //subir la imagen
            // const imageUrl = await uploadImage(file);
            const imageUrl = file ? await uploadImage(file) : product.image
            //armar el producto completo
            const productData = {
                ...product,
                price: Number(product.price),
                stock: Number(product.stock),
                image: imageUrl,
            };

            if (updateMode) {
                await updateProduct(id, productData)
            } else {
                //alta
                const id = await createProduct(productData);
            }


            //vaciar
            setProduct({ name: "", price: "", category: "", description: "", stock: "", image: "" });
            setFile(null);
            // navigate(`/ProductSuccess/${id}`, { replace: true });
            navigate("/admin")
        } catch (error) {
            setErrors({ general: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
            updateMode={updateMode}
        />
    );
};