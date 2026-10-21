import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonCS from './button-component/ButtonComponent'

export default function upBar({ notificationNumber, setNotificationNumber }) {
    console.log(notificationNumber)
    const [isClick, setIsClick] = useState(false)

    const navigate = useNavigate();
    function changePage(name) {
        setIsClick(false)
        navigate(name)
        console.log(navigate(name))
    }
    return (
        <>
            <div className='container-up'>
                <div className='title'>
                    <h1>Ciao siamo nella home di react</h1>
                </div>
                {/*
                    TODO: Quando si clicca l'iconcina del profile, deve uscire una barra sotto con
                    
                    Accedi(in caso non si è fatto l'accesso)

                    Option

                    logOut

                    quest'ultimi dovranno essere resi cliccabili e non grigi in caso l'utente fosse loggato

                */}
                <div className='side-up-right'>
                    <ul>
                        <div className='box'>

                            <div className='notification-c' onClick={() => changePage("/notification")}>
                                <ButtonCS color='transparent' size='2rem' >
                                    <i className="notification bi bi-bell-fill"></i>
                                </ButtonCS>
                                {notificationNumber >= 1 &&
                                
                                <span className='notification-number' >{notificationNumber >= 10 ? "+9" : "+" + notificationNumber}</span>
                                }
                                

                            </div>

                            <ButtonCS color='transparent' size='2rem' onClick={() => setIsClick(prev => !prev)}>
                                <i className="bi bi-person-circle"></i>
                            </ButtonCS>



                            {isClick &&
                                <div className='list-opt'>
                                    <span onClick={() => changePage('/login')}>Login</span>
                                    <span onClick={() => changePage('/option')}>Option</span>
                                    <span onClick={() => changePage('/Home')}>Logout</span>
                                </div>
                            }
                        </div>

                    </ul>
                </div>

            </div>
            <div className='selections' style={{ backgroundColor: '#1c1c84' }}>
                <ul>
                    <Link to={'/about'} style={{ textDecoration: 'none' }}>

                        <li>About</li>
                    </Link>
                    <Link to={'/news'} style={{ textDecoration: 'none' }}>

                        <li>News/Update</li>
                    </Link>
                    <Link to={'/feedback'} style={{ textDecoration: 'none' }}>

                        <li>Mandaci un feedback</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}