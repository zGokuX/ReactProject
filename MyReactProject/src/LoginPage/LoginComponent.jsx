
import { useEffect, useState } from 'react'
import ButtonCS from '../button-component/ButtonComponent'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLogged, setSelectedUserLogged } from '../Store/userSlice'
export default function Login() {
    const checkLogged = useSelector((state) => state.user.isLogged)
    const navigate = useNavigate()
    useEffect(() => {
      if(checkLogged){
        navigate('/Home')
      }
    }, [checkLogged,navigate])
    

    const [isClicked, setIsClicked] = useState(false)
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const users = useSelector((state) => state.user.users)
    const [password,setPassword] = useState('')
    function checkCanLog(){
        const user = users.find(
            (check) =>
                check.email === email &&
                check.password === password
        )
        if (user) {
            dispatch(setSelectedUserLogged(user))
            dispatch(setIsLogged(true))
        } else {
            console.log('Email o password errati')
        }
    }

    return (
        <>
            <title>Login</title>
            <div className="container-up">
                <h1>Login(WIP)</h1>
                <Link to={'/Home'}>
                    <i className="bi bi-arrow-bar-left danger back"></i>
                </Link>
            </div>

            <div className="login-form">
                <label htmlFor="email">email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="inserisci l'email..." />
                <label htmlFor="password">password</label>
                <input type={isClicked ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="inserisci la password..." />
                <div className="check-password">
                    <span>{isClicked ? "Nascondi passowrd" : "Mostra password"}</span>
                    <input type="checkbox" onClick={() => setIsClicked(prev => !prev)} />
                </div>

                <ButtonCS onClick={() => checkCanLog()}>Accedi</ButtonCS>
                <Link to={"/register"}>Non hai un'account? Registrati subito!</Link>
            </div>

        </>
    )
}