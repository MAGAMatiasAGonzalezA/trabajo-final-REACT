export const validateProduct = (data) => {
    const errors = {}

    if (!data.name) {
        errors.name = "Debes ingresar un nombre"
    }

    if (!data.description) {
        errors.description = "Debes ingresar detalles del producto"
    }

    if (!data.image) {
        errors.image = "Debes cargar una imagen"
    }

    if (!data.category) {
        errors.category = "Debes definir la categoria adecuada"
    }

    if (!data.price) {
        errors.price = "Debes definir el monto"
    }

    if (!data.stock) {
        errors.stock = "Debes registrar cuantos"
    }

    return errors
};