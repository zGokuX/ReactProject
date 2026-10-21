import { useEffect, useState } from 'react'
import ButtonCS from '../button-component/ButtonComponent'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUserNotification, create, setIsLogged, setSelectedUserLogged } from '../Store/userSlice';
import {
    incrementNotification,
    setContentOfNotification
} from '../Store/notificationSlice';


export default function Register() {
    const d = new Date()
    const navigate = useNavigate()
    const data = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
    const dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const checkLogged = useSelector((state) => state.user.isLogged)
    useEffect(() => {
        if (checkLogged) {
            navigate('/Home')
        }
    }, [checkLogged])

    function register() {
        if (password === confirmPassword) {
            const message = `Benvenuto ${name}, hai creato il tuo account nel nostro sito! -- ${data}`
            dispatch(setContentOfNotification(message))
            dispatch(create({
                name: name,
                email: email,
                password: password,
                content_notify: message
            }))
            dispatch(setSelectedUserLogged({
                name: name,
                email: email,
                password: password
            }))
            dispatch(addUserNotification(message))
            dispatch(setIsLogged(true))
            dispatch(incrementNotification())
            navigate('/Home')
        }
    }
    return (
        <>
            <title>Register</title>
            <div className="container-up">
                <h1>Register(WIP)</h1>
                <Link to={'/Home'}>
                    <i className="bi bi-arrow-bar-left danger back"></i>
                </Link>
            </div>

            <div className="login-form">
                <label htmlFor="nome">Nome</label>
                <input type="text" onChange={(e) => setName(prev => e.target.value)} placeholder="inserisci il tuo nome utente..." />
                <label htmlFor="email">email</label>
                <input type="email" onChange={(e) => setEmail(prev => e.target.value)} placeholder="inserisci l'email..." />
                <label htmlFor="password">Crea password</label>
                <input type={isClicked ? "text" : "password"} onChange={(e) => setPassword(prev => e.target.value)} placeholder="inserisci la password..." />
                <label htmlFor="password">Conferma password</label>
                <input type={isClicked ? "text" : "password"} onChange={(e) => setConfirmPassword(prev => e.target.value)} placeholder="Inserisci dinuovo la tua password..." />
                <div className="check-password">
                    <span>{isClicked ? "Nascondi passowrd" : "Mostra password"}</span>
                    <input type="checkbox" onClick={() => setIsClicked(prev => !prev)} />
                </div>

                <ButtonCS onClick={() => register()}>Registrati</ButtonCS>
                <Link to={"/login"}>Hai già un'account? accedi!</Link>
            </div>
        </>
    )
}