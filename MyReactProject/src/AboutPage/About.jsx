import { Link } from "react-router-dom";


export default function About() {
    return (
        <>
        <title>About</title>
            <div className="container-up container-about">
                <h1>About us</h1>
                <Link to={'/Home'}>
                    <i className="bi bi-arrow-bar-left danger back"></i>
                </Link>
            </div>
            <div className="container-desc">
                <h2>Come si è formato il nostro sito?</h2>
                <span>Il nostro sito si è formato principalmente per aiutare chiunque a capire il React al meglio! Dai il tuo feedback al sito oppure scrivi cosa vorresti che venisse aggiunto nel nostro sito!</span>
            </div>
        </>
    )
}