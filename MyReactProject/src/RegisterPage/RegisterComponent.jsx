import { useState } from 'react'
import ButtonCS from '../button-component/ButtonComponent'
import { Link } from 'react-router-dom'


export default function Register(){
    const [isClicked, setIsClicked] = useState(false)

    return(
        <>
         <title>Register</title>
            <div className="container-up">
                <h1>Register</h1>
                <Link to={'/Home'}>
                    <i className="bi bi-arrow-bar-left danger back"></i>
                </Link>
            </div>

            <div className="login-form">
                <label htmlFor="nome">Nome</label>
                <input type="text" placeholder="inserisci il tuo nome utente..." />
                <label htmlFor="email">email</label>
                <input type="email" placeholder="inserisci l'email..." />
                <label htmlFor="password">Crea password</label>
                <input type={isClicked ? "text" : "password"} placeholder="inserisci la password..." />
                <label htmlFor="password">Conferma password</label>
                <input type={isClicked ? "text" : "password"} placeholder="Inserisci dinuovo la tua password..." />
                <div className="check-password">
                    <span>{isClicked ? "Nascondi passowrd" : "Mostra password"}</span>
                    <input type="checkbox" onClick={() => setIsClicked(prev => !prev)} />
                </div>

                <ButtonCS>Registrati</ButtonCS>
                <Link to={"/login"}>Hai già un'account? accedi!</Link>
            </div>
        </>
    )
}