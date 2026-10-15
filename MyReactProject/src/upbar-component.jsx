import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ButtonCS from './button-component/ButtonComponent'

export default function upBar() {
    const [isClick,setIsClick] = useState(false)
    const navigate = useNavigate();
    function changePage(name){
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
                            <ButtonCS color='transparent' size='2rem' onClick={() => setIsClick(prev => !prev)}>
                                <i className="bi bi-person-circle"></i>
                            </ButtonCS>
                            {isClick && 
                            <div className='list-opt'>
                                <span onClick={() => changePage('/login')}>Login</span>
                                <span onClick={() => changePage('/option')}>Option</span>
                                <span onClick={() => changePage('/')}>Logout</span>
                            </div>
                            }
                        </div>

                    </ul>
                </div>

            </div>
            <div className='selections' style={{backgroundColor: '#1c1c84'}}>
                <ul>
                    <Link to={'/about'} style={{textDecoration: 'none'}}>
                    
                    <li>About</li>
                    </Link>
                    <Link to={'/news'} style={{textDecoration: 'none'}}>
                    
                    <li>News/Update</li>
                    </Link>
                    <Link to={'/feedback'} style={{textDecoration: 'none'}}>
                    
                    <li>Mandaci un feedback</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}