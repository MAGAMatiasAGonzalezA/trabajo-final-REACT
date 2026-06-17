import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth debe tener un AuthProvider");
    }

    return context

}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
            setLoading(false)
        })
        return unsubscribe
    }, []);

    const login = async (email, password) => {
        try {
            return await signInWithEmailAndPassword(auth, email, password)

        } catch (err) {
            console.error("Error al iniciar sesión ", err)
            throw err
        }
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (err) {
            console.error("Error al cerrar sesión ", err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}