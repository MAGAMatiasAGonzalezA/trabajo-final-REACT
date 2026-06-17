import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LogIn.css"

export const LogIn = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData({
            ...userData,
            [name]: value
        })

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("")

        try {

            await login(userData.email, userData.password)
            navigate("/admin")
        } catch (err) {
            setError("Email o contraseña incorrectos")
        }
    }

    return (
        <div className="login-wrapper">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Ingresa tus datos</h2>
                <fieldset>
                    <label>Usuario:</label>
                    <input type="text" name="email" value={userData.email} onChange={handleChange} />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} />
                </fieldset>
                <button type="submit">
                    Ingresar
                </button>

            </form>
            {error && <p className="login-error">{error}</p>}
        </div>
    )
}