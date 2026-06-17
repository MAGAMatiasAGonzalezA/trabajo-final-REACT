import { collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "cocinapractico")

export const getProductById = async (id) => {
    try {
        const productRef = doc(db, "cocinapractico", id)

        const snapshot = await getDoc(productRef)

        if (snapshot.exists()) {
            const product = { id: snapshot.id, ...snapshot.data() }
            return product;
        } else {
            return null;
        }

    } catch (err) {
        console.error("Error al traer producto por id: ", err)
        return null
    }
}

export const getByCategory = async (category) => {
    try {
        let queryRef;

        if (category) {
            queryRef = query(productsRef, where("category", "==", category))
        } else {
            queryRef = productsRef;
        }

        const snapshot = await getDocs(queryRef)

        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })

        return productsFormat;


    } catch (err) {
        console.error("Error al traer productos por catogoría: ", err)
        return [];
    }
}

export const createProduct = async (productData) => {
    try {
        const docRef = await addDoc(productsRef, productData)

        return docRef.id;

    } catch (err) {
        console.error("Error al crear el producto: ", err)
        throw err;
    }
}

export const deleteProduct = async (id) => {
    try {
        const productRef = await doc(db, "cocinapractico", id);

        const snapshot = await deleteDoc(productRef);

    } catch (err) {
        console.log(err)
    }
}

export const updateProduct = async (id, productData) => {
    try {
        const productRef = await doc(db, "cocinapractico", id);

        const snapshot = await updateDoc(productRef, productData)

    } catch (err) {
        console.error("Error al actualizar el producto: ", err)
    }
}