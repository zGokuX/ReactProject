import { Link } from "react-router-dom";


export default function NotificationC( { notificationN }) {
    return (
        <>
        <title>{notificationN <= 0 ? "Non hai nessuna notifica" : "hai " + notificationN + " notifica da leggere"}</title>
            <div className="container-up">
                <h1>{notificationN <= 0 ? "Non hai nessuna notifica" : "Hai " + notificationN + " notifica da leggere"}</h1>
                <Link to={'/Home'}>
                    <i className="bi bi-arrow-bar-left danger back"></i>
                </Link>
            </div>

        </>
    )
}