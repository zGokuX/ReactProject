import { Link } from "react-router-dom";
import ButtonCS from "../button-component/ButtonComponent";

export default function UpdateComponent(props) {
    const date = new Date();
    return (
        <>
            <title>News</title>
            <div className="container-up">
                <h1>News/Update del sito</h1>
                <Link to={'/Home'}>
                    <i className="bi bi-arrow-bar-left danger back"></i>
                </Link>
            </div>
            <div className="container-desc">
                <div className="container-between">
                    <h2>News/update del {date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</h2>
                    {!props.isAdmin &&

                        <ButtonCS>Aggiunti notizia o novità<i className="bi bi-plus-circle-fill"></i></ButtonCS>
                    }
                </div>
                {!props.getUpdate && (
                    <span>Non ci sono aggiornamenti o news al momento</span>
                )
                }
                {props.getUpdate && (
                    <span>{props.infoUpdate}</span>
                )
                }
            </div>
        </>
    )
}