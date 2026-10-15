import { Link } from "react-router-dom";
import ButtonCS from "../button-component/ButtonComponent";


export default function NotFound(){
    return(
        <>
        <title>Error</title>
        <div className="container-up center-js">
            <h1><i className="bi bi-ban danger"></i> Questa pagina non esiste <i className="bi bi-ban danger"></i></h1>
        </div>
        <div className="container-desc center-js colunm">
            <h4>Stai cercando di raggiungere una pagina che attualmente non esiste</h4>
            <Link to={'/'}>
            <ButtonCS>Torna indietro</ButtonCS>
            </Link>
        </div>
        </>
    )
}