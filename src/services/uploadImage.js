const IMGBB_API_KEY = "2b0cd0bc9985c65334bc3f902b31f43f";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {

        const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!data.success) {
            throw new Error("Error al subir la imagen");
        }

        return data.data.url;

    } catch (err) {
        console.error("ImgBB error: ", err);
        throw err;
    }
};