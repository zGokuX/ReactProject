
import { useState } from 'react'
import ButtonCS from '../button-component/ButtonComponent'
import { Link } from 'react-router-dom'
export default function Login() {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <>
            <title>Login</title>
            <div className="container-up">
                <h1>Login</h1>
                <Link to={'/Home'}>
                    <i className="bi bi-arrow-bar-left danger back"></i>
                </Link>
            </div>

            <div className="login-form">
                <label htmlFor="email">email</label>
                <input type="email" placeholder="inserisci l'email..." />
                <label htmlFor="password">password</label>
                <input type={isClicked ? "text" : "password"} placeholder="inserisci la password..." />
                <div className="check-password">
                    <span>{isClicked ? "Nascondi passowrd" : "Mostra password"}</span>
                    <input type="checkbox" onClick={() => setIsClicked(prev => !prev)} />
                </div>

                <ButtonCS>Accedi</ButtonCS>
                <Link to={"/register"}>Non hai un'account? Registrati subito!</Link>
            </div>

        </>
    )
}